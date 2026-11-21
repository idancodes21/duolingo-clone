import { SECTION, units } from "@/utils/unit";
import { BookText } from "lucide-react-native";
import { useEffect, useRef, useState } from "react";
import { Animated, Easing, Pressable, Text } from "react-native";

const indices = units.map((_, i) => i);

export default function UnitBanner({ unitIndex }: { unitIndex: number }) {
  const colorAnim = useRef(new Animated.Value(unitIndex)).current;
  const textAnim = useRef(new Animated.Value(1)).current;
  const [shown, setShown] = useState(unitIndex);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    Animated.timing(colorAnim, {
      toValue: unitIndex,
      duration: 350,
      easing: Easing.out(Easing.quad),
      useNativeDriver: false,
    }).start();

    // Fade the old text out, swap it, fade the new text in.
    textAnim.stopAnimation();
    Animated.timing(textAnim, {
      toValue: 0,
      duration: 110,
      useNativeDriver: true,
    }).start(({ finished }) => {
      if (!finished) return;
      setShown(unitIndex);
      Animated.timing(textAnim, {
        toValue: 1,
        duration: 180,
        useNativeDriver: true,
      }).start();
    });
  }, [unitIndex, colorAnim, textAnim]);

  const unit = units[shown] ?? units[0]!;

  const face = colorAnim.interpolate({
    inputRange: indices,
    outputRange: units.map((u) => u.face),
  });
  const edge = colorAnim.interpolate({
    inputRange: indices,
    outputRange: units.map((u) => u.edge),
  });

  return (
    <Animated.View
      style={{
        backgroundColor: face,
        borderBottomColor: edge,
        borderBottomWidth: 4,
        borderRadius: 16,
        paddingHorizontal: 16,
        paddingVertical: 12,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 12,
      }}
    >
      <Animated.View
        style={{
          flex: 1,
          opacity: textAnim,
          transform: [
            {
              translateY: textAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [6, 0],
              }),
            },
          ],
        }}
      >
        <Text className="font-nunito-extrabold text-xs uppercase tracking-wide text-white/70">
          Section {SECTION}, Unit {unit.number}
        </Text>
        <Text
          className="font-nunito-extrabold text-lg text-white"
          numberOfLines={2}
        >
          {unit.description}
        </Text>
      </Animated.View>

      <Pressable accessibilityRole="button" accessibilityLabel="Guidebook">
        <Animated.View
          style={{
            borderColor: edge,
            borderWidth: 2,
            borderBottomWidth: 4,
            borderRadius: 14,
            padding: 10,
          }}
        >
          <BookText size={24} color="#FFFFFF" strokeWidth={2.5} />
        </Animated.View>
      </Pressable>
    </Animated.View>
  );
}
