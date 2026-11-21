import { Text, View } from "react-native";
import type { Player, Zone } from "../../../leaderboard";
import Rank from "./Rank";

const AVATAR_COLORS = [
  "#58CC02",
  "#1CB0F6",
  "#CE82FF",
  "#FF9600",
  "#FF4B4B",
  "#FFC800",
];

type PlayerRowProps = Player & {
  rank: number;
  zone: Zone;
};

export default function PlayerRow({
  rank,
  zone,
  name,
  xp,
  isYou,
}: PlayerRowProps) {
  return (
    <View
      className={`mx-3 flex-row items-center gap-3 rounded-2xl px-3 py-3 ${
        isYou
          ? "border-2 border-[#84D8FF] bg-[#DDF4FF]"
          : "border-2 border-transparent"
      }`}
    >
      <Rank rank={rank} zone={zone} />

      <View
        className="h-11 w-11 items-center justify-center rounded-full"
        style={{ backgroundColor: AVATAR_COLORS[rank % AVATAR_COLORS.length] }}
      >
        <Text className="font-nunito-extrabold text-lg text-white">
          {name.charAt(0)}
        </Text>
      </View>

      <Text
        className="flex-1 font-nunito-extrabold text-base text-gray-700"
        numberOfLines={1}
      >
        {name}
      </Text>

      <Text className="font-nunito-extrabold text-base text-gray-500">
        {xp} XP
      </Text>
    </View>
  );
}
