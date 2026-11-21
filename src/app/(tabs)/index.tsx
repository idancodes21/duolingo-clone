import LearnTopBar from "@/components/LearnTopBar";
import Lesson from "@/components/Lesson";
import LottieAnimation from "@/components/LottieAnimation";
import UnitBanner from "@/components/UnitBanner";
import { units, type Unit } from "@/utils/unit";
import { BookOpen, House, Shield, Store, UserRound } from "lucide-react-native";
import { useRef, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import DuoWaving from "../../assets/duo-waving.json";

const SWITCH_OFFSET = 120;
const OFFSETS = [0, -45, -70, -45, 0, 45, 70, 45];

const getOffset = (index: number, count: number, unitNumber: number) => {
  if (index >= count - 1) return 0;
  const offsets =
    unitNumber % 2 === 1
      ? OFFSETS
      : [...OFFSETS.slice(4), ...OFFSETS.slice(0, 4)];
  return offsets[index % offsets.length] ?? 0;
};

function UnitDivider({ caption }: { caption: string }) {
  return (
    <View className="flex-row items-center px-4 pb-2 pt-6">
      <View className="h-0.5 flex-1 bg-gray-200" />
      <Text className="mx-3 text-center font-nunito-extrabold text-sm text-gray-400">
        {caption}
      </Text>
      <View className="h-0.5 flex-1 bg-gray-200" />
    </View>
  );
}

function UnitPath({ unit }: { unit: Unit }) {
  const nodeCount = unit.items.filter((k) => !k.startsWith("mascot")).length;
  let n = 0;

  return (
    <View className="items-center pb-6 pt-8">
      {unit.items.map((kind, i) => {
        if (kind === "mascot-left" || kind === "mascot-right") {
          return (
            <View
              key={i}
              style={{
                alignSelf: kind === "mascot-left" ? "flex-start" : "flex-end",
                height: 130,
                marginHorizontal: 12,
                justifyContent: "center",
              }}
            >
              <LottieAnimation source={DuoWaving} size={150} />
            </View>
          );
        }

        const offset = getOffset(n++, nodeCount, unit.number);
        return (
          <View
            key={i}
            style={{ transform: [{ translateX: offset }], marginBottom: -10 }}
          >
            <Lesson variant={kind} />
          </View>
        );
      })}
    </View>
  );
}

function BottomNavigation() {
  const items = [
    { label: "Learn", Icon: House },
    { label: "League", Icon: Shield },
    { label: "Quests", Icon: BookOpen },
    { label: "Shop", Icon: Store },
    { label: "Profile", Icon: UserRound },
  ];

  return (
    <View className="flex-row items-center justify-around border-t-2 border-gray-200 bg-white px-2 py-3">
      {items.map(({ label, Icon }, index) => {
        const active = index === 0;

        return (
          <View
            key={label}
            className={`h-12 w-12 items-center justify-center rounded-lg ${
              active ? "border-2 border-[#58CC02] bg-green-50" : ""
            }`}
          >
            <Icon
              size={28}
              color={active ? "#58CC02" : "#AFAFAF"}
              strokeWidth={active ? 3 : 2.5}
            />
          </View>
        );
      })}
    </View>
  );
}

export default function LearnScreen() {
  const [unitIndex, setUnitIndex] = useState(0);
  // Each unit's top edge inside the scroll content, filled in by onLayout.
  const unitTops = useRef<number[]>([]);

  const handleScroll = (y: number) => {
    let current = 0;
    unitTops.current.forEach((top, i) => {
      if (top !== undefined && y + SWITCH_OFFSET >= top) current = i;
    });
    setUnitIndex(current);
  };

  return (
    <SafeAreaView className="flex-1 bg-white" edges={["top", "left", "right"]}>
      {/* Fixed top bar */}
      <LearnTopBar />

      {/* Fixed banner: colors and text follow the unit you're scrolled to */}
      <View className="bg-white px-3 pb-3 pt-1">
        <UnitBanner unitIndex={unitIndex} />
      </View>

      <ScrollView
        className="flex-1 bg-white"
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={(e) => handleScroll(e.nativeEvent.contentOffset.y)}
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        {units.map((unit, i) => (
          <View
            key={unit.number}
            onLayout={(e) => {
              unitTops.current[i] = e.nativeEvent.layout.y;
            }}
          >
            {i > 0 && <UnitDivider caption={unit.description} />}
            <UnitPath unit={unit} />
          </View>
        ))}
      </ScrollView>

      {/* Fixed bottom navigation */}
      <BottomNavigation />
    </SafeAreaView>
  );
}
