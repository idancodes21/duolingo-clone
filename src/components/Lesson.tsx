import { Headphones, Package, Star, Trophy } from "lucide-react-native";
import { useEffect, useRef } from "react";
import { Animated, Easing, Pressable, Text, View } from "react-native";

type LessonVariant = "active" | "locked" | "chest" | "headphones" | "trophy";

type LessonProps = {
  variant?: LessonVariant;
  onPress?: () => void;
};

const RING = 96;
const FACE = 64;
const DEPTH = 6;
const STACK_TOP = (RING - FACE - DEPTH) / 2;

const PALETTE: Record<
  LessonVariant,
  { face: string; edge: string; icon: string }
> = {
  active: { face: "#58CC02", edge: "#46A302", icon: "#FFFFFF" },
  locked: { face: "#E5E5E5", edge: "#B7B7B7", icon: "#AFAFAF" },
  chest: { face: "#FBBF24", edge: "#D97706", icon: "#FFFFFF" },
  headphones: { face: "#E5E5E5", edge: "#B7B7B7", icon: "#AFAFAF" },
  trophy: { face: "#E5E5E5", edge: "#B7B7B7", icon: "#AFAFAF" },
};

export default function Lesson({ variant = "active", onPress }: LessonProps) {
  const floatAnim = useRef(new Animated.Value(0)).current;

  const isActive = variant === "active";
  const palette = PALETTE[variant];

  useEffect(() => {
    if (!isActive) return;

    const animation = Animated.loop(
      Animated.sequence([
        Animated.timing(floatAnim, {
          toValue: -6,
          duration: 600,
          easing: Easing.inOut(Easing.quad),
          useNativeDriver: true,
        }),
        Animated.timing(floatAnim, {
          toValue: 0,
          duration: 600,
          easing: Easing.inOut(Easing.quad),
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

  const filled = variant === "active" || variant === "locked";

  return (
    <View className="w-24 items-center">
      {isActive && (
        <Animated.View
          pointerEvents="none"
          style={{ transform: [{ translateY: floatAnim }] }}
          className="z-10 mb-2 items-center"
        >
          <View className="rounded-xl border-2 border-gray-200 bg-white px-3 py-2">
            <Text className="font-nunito-extrabold text-sm uppercase tracking-wide text-[#58CC02]">
              Start
            </Text>

            <View
              style={{ position: "absolute", bottom: -7, left: 0, right: 0 }}
              className="items-center"
            >
              <View
                style={{ transform: [{ rotate: "45deg" }] }}
                className="h-3 w-3 border-b-2 border-r-2 border-gray-200 bg-white"
              />
            </View>
          </View>
        </Animated.View>
      )}

      <Pressable
        onPress={onPress}
        disabled={!onPress}
        accessibilityRole="button"
        accessibilityLabel={`${variant} lesson`}
        style={{ width: RING, height: RING }}
      >
        {({ pressed }) => (
          <>
            {/* Ring track, only for the active lesson */}
            {isActive && (
              <View
                style={{
                  position: "absolute",
                  width: RING,
                  height: RING,
                  borderRadius: RING / 2,
                  borderWidth: 8,
                  borderColor: "#E5E5E5",
                }}
              />
            )}

            <View
              style={{
                position: "absolute",
                top: STACK_TOP,
                left: (RING - FACE) / 2,
                width: FACE,
                height: FACE + DEPTH,
              }}
            >
              <View
                style={{
                  position: "absolute",
                  top: DEPTH,
                  width: FACE,
                  height: FACE,
                  borderRadius: FACE / 2,
                  backgroundColor: palette.edge,
                }}
              />
              <View
                style={{
                  width: FACE,
                  height: FACE,
                  borderRadius: FACE / 2,
                  backgroundColor: palette.face,
                  alignItems: "center",
                  justifyContent: "center",
                  transform: [{ translateY: pressed ? DEPTH : 0 }],
                }}
              >
                <Icon
                  size={30}
                  color={palette.icon}
                  strokeWidth={2.5}
                  fill={filled ? palette.icon : "none"}
                />
              </View>
            </View>
          </>
        )}
      </Pressable>
    </View>
  );
}
