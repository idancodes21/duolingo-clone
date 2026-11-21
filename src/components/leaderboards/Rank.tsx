import { Text, View } from "react-native";
import type { Zone } from "../../../leaderboard";

const MEDALS = ["#FFC800", "#B8BFC8", "#E39A5B"]; // gold, silver, bronze

const ZONE_COLORS: Record<Zone, string> = {
  promotion: "#58CC02",
  safe: "#AFAFAF",
  demotion: "#FF4B4B",
};

export default function Rank({ rank, zone }: { rank: number; zone: Zone }) {
  if (rank <= 3) {
    return (
      <View
        className="h-8 w-8 items-center justify-center rounded-full"
        style={{ backgroundColor: MEDALS[rank - 1] }}
      >
        <Text className="font-nunito-extrabold text-base text-white">
          {rank}
        </Text>
      </View>
    );
  }

  return (
    <View className="h-8 w-8 items-center justify-center">
      <Text
        className="font-nunito-extrabold text-base"
        style={{ color: ZONE_COLORS[zone] }}
      >
        {rank}
      </Text>
    </View>
  );
}
