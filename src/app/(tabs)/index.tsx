import LearnTopBar from "@/components/LearnTopBar";
import Lesson from "@/components/Lesson";
import Section from "@/components/Section";
import { BookOpen, House, Shield, Store, UserRound } from "lucide-react-native";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function LessonPath() {
  return (
    <View className="items-center pb-4 pt-8">
      {/* Active lesson */}
      <View className="mb-6">
        <Lesson variant="active" />
      </View>

      {/* Locked lesson */}
      <View className="mb-6 -ml-10">
        <Lesson variant="locked" />
      </View>

      {/* Treasure chest */}
      <View className="mb-6 ml-8">
        <Lesson variant="chest" />
      </View>

      {/* Owl mascot placeholder */}
      <View className="mb-6 -ml-12 h-20 w-20 items-center justify-center">
        <Text className="text-6xl">🦉</Text>
      </View>

      {/* Listening lesson */}
      <View className="mb-6 -ml-10">
        <Lesson variant="headphones" />
      </View>

      {/* Star lesson */}
      <View className="mb-6 ml-8">
        <Lesson variant="locked" />
      </View>

      {/* Trophy lesson */}
      <View className="mb-6 -ml-10">
        <Lesson variant="trophy" />
      </View>
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
  return (
    <SafeAreaView className="flex-1 bg-white" edges={["top", "left", "right"]}>
      {/* Fixed top bar */}
      <LearnTopBar />

      {/* Fixed section banner */}
      <View className="bg-white px-3 pb-3 pt-1">
        <Section />
      </View>

      {/* Only the lesson path and caption scroll */}
      <ScrollView
        className="flex-1 bg-white"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 12 }}
      >
        <LessonPath />

        <View className="flex-row items-center px-4 py-3">
          <View className="h-0.5 flex-1 bg-gray-200" />

          <Text className="mx-3 text-center font-nunito-extrabold text-sm text-gray-400">
            Introduce yourself and greet others
          </Text>

          <View className="h-0.5 flex-1 bg-gray-200" />
        </View>
      </ScrollView>

      {/* Fixed bottom navigation */}
      <BottomNavigation />
    </SafeAreaView>
  );
}
