import { Headphones, Package, Star, Trophy } from "lucide-react-native";
import { useEffect, useRef } from "react";
import { Animated, Text, View } from "react-native";

type LessonVariant = "active" | "locked" | "chest" | "headphones" | "trophy";

type LessonProps = {
  variant?: LessonVariant;
};

export default function Lesson({ variant = "active" }: LessonProps) {
  const floatAnim = useRef(new Animated.Value(0)).current;

  const isActive = variant === "active";
  const isLocked = variant === "locked";

  useEffect(() => {
    if (!isActive) return;

    const animation = Animated.loop(
      Animated.sequence([
        Animated.timing(floatAnim, {
          toValue: -5,
          duration: 700,
          useNativeDriver: true,
        }),
        Animated.timing(floatAnim, {
          toValue: 0,
          duration: 700,
          useNativeDriver: true,
        }),
      ]),
    );

    animation.start();

    return () => animation.stop();
  }, [floatAnim, isActive]);

  const Icon =
    variant === "headphones"
      ? Headphones
      : variant === "trophy"
        ? Trophy
        : variant === "chest"
          ? Package
          : Star;

  const buttonStyle = isActive
    ? "border-[#46A302] bg-[#58CC02]"
    : isLocked
      ? "border-gray-300 bg-gray-200"
      : variant === "chest"
        ? "border-amber-600 bg-amber-400"
        : "border-gray-300 bg-gray-200";

  const iconColor = isActive
    ? "#FFFFFF"
    : isLocked
      ? "#B0BEC5"
      : variant === "chest"
        ? "#FFFFFF"
        : "#8A9CA3";

  return (
    <View className="w-24 items-center">
      {/* Floating START label */}
      {isActive && (
        <Animated.View
          style={{ transform: [{ translateY: floatAnim }] }}
          className="z-10 mb-1 items-center"
        >
          <View className="rounded-lg border-2 border-gray-200 bg-white px-3 py-2">
            <Text className="font-nunito-extrabold text-sm text-[#58CC02]">
              START
            </Text>
          </View>

          {/* Small pointer */}
          <View className="-mt-1 h-2 w-2 rotate-45 border-b-2 border-r-2 border-gray-200 bg-white" />
        </Animated.View>
      )}

      {/* Outer ring */}
      <View
        className={`h-24 w-24 items-center justify-center rounded-full ${
          isActive ? "bg-gray-200" : "bg-transparent"
        }`}
      >
        {/* Inner ring */}
        <View
          className={`h-20 w-20 items-center justify-center rounded-full ${
            isActive ? "bg-white" : "bg-transparent"
          }`}
        >
          {/* Lesson button */}
          <View
            className={`h-16 w-16 items-center justify-center rounded-full border-b-4 ${buttonStyle}`}
          >
            <Icon
              size={30}
              color={iconColor}
              strokeWidth={2.5}
              fill={
                variant === "active" || variant === "locked"
                  ? iconColor
                  : "none"
              }
            />
          </View>
        </View>
      </View>
    </View>
  );
}
