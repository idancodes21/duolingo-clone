import { ChevronDown, ChevronUp } from "lucide-react-native";
import { Text, View } from "react-native";

export default function ZoneDivider({
  kind,
}: {
  kind: "promotion" | "demotion";
}) {
  const promo = kind === "promotion";
  const color = promo ? "#58CC02" : "#FF4B4B";
  const Icon = promo ? ChevronUp : ChevronDown;

  return (
    <View className="flex-row items-center px-4 py-3">
      <View
        className="h-0.5 flex-1"
        style={{ backgroundColor: color, opacity: 0.35 }}
      />
      <View className="mx-3 flex-row items-center gap-1">
        <Icon size={18} color={color} strokeWidth={3.5} />
        <Text
          className="font-nunito-extrabold text-sm uppercase tracking-wide"
          style={{ color }}
        >
          {promo ? "Promotion zone" : "Demotion zone"}
        </Text>
        <Icon size={18} color={color} strokeWidth={3.5} />
      </View>
      <View
        className="h-0.5 flex-1"
        style={{ backgroundColor: color, opacity: 0.35 }}
      />
    </View>
  );
}
