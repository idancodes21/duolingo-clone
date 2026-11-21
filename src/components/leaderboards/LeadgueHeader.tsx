import { Clock } from "lucide-react-native";
import { Text, View } from "react-native";
import { CURRENT_LEAGUE, LEAGUES, PROMOTION_COUNT } from "../../../leaderboard";
import LeagueBadge from "./LeagueBadge";

export default function LeagueHeader() {
  const league = LEAGUES[CURRENT_LEAGUE]!;

  return (
    <View className="items-center px-4 pb-4 pt-6">
      <View className="flex-row items-end gap-3">
        {LEAGUES.map((l, i) => (
          <LeagueBadge
            key={l.name}
            league={l}
            state={
              i === CURRENT_LEAGUE
                ? "current"
                : i < CURRENT_LEAGUE
                  ? "earned"
                  : "locked"
            }
          />
        ))}
      </View>

      <Text className="mt-5 font-nunito-extrabold text-2xl text-gray-700">
        {league.name} League
      </Text>
      <Text className="mt-1 text-center font-nunito-extrabold text-base text-gray-400">
        Top {PROMOTION_COUNT} advance to the next league
      </Text>

      <View className="mt-3 flex-row items-center gap-1.5 rounded-full bg-amber-50 px-3 py-1.5">
        <Clock size={16} color="#FF9600" strokeWidth={3} />
        <Text className="font-nunito-extrabold text-sm text-[#FF9600]">
          3 days
        </Text>
      </View>
    </View>
  );
}
