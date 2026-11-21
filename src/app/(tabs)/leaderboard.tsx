import LeagueHeader from "@/components/leaderboards/LeadgueHeader";
import PlayerRow from "@/components/leaderboards/PlayerRow";
import ZoneDivider from "@/components/leaderboards/ZoneDivider";
import { Fragment } from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { PLAYERS, getZone } from "../../../leaderboard";

export default function LeaderboardScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white" edges={["top", "left", "right"]}>
      <ScrollView
        className="flex-1 bg-white"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 24 }}
      >
        <LeagueHeader />

        {PLAYERS.map((player, i) => {
          const rank = i + 1;
          const zone = getZone(rank, PLAYERS.length);
          const prevZone = i > 0 ? getZone(rank - 1, PLAYERS.length) : zone;

          return (
            <Fragment key={player.name}>
              {/* A divider appears wherever the zone changes */}
              {zone !== prevZone && zone === "safe" && (
                <ZoneDivider kind="promotion" />
              )}
              {zone !== prevZone && zone === "demotion" && (
                <ZoneDivider kind="demotion" />
              )}
              <PlayerRow rank={rank} zone={zone} {...player} />
            </Fragment>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}
