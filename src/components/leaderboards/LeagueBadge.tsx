import { Shield } from "lucide-react-native";
import { View } from "react-native";
import type { League } from "../../../leaderboard";

type LeagueBadgeProps = {
  league: League;
  state: "earned" | "current" | "locked";
};

export default function LeagueBadge({ league, state }: LeagueBadgeProps) {
  const size = state === "current" ? 60 : 48;
  const depth = state === "current" ? 5 : 4;
  const locked = state === "locked";
  const face = locked ? "#E5E5E5" : league.face;
  const edge = locked ? "#B7B7B7" : league.edge;

  return (
    <View
      style={{ width: size, height: size + depth }}
      accessibilityLabel={`${league.name} league, ${state}`}
    >
      <View
        style={{
          position: "absolute",
          top: depth,
          width: size,
          height: size,
          borderRadius: size / 2,
          backgroundColor: edge,
        }}
      />
      <View
        style={{
          width: size,
          height: size,
          borderRadius: size / 2,
          backgroundColor: face,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Shield
          size={size * 0.5}
          color={locked ? "#AFAFAF" : "#FFFFFF"}
          fill={locked ? "#AFAFAF" : "#FFFFFF"}
          strokeWidth={2}
        />
      </View>
    </View>
  );
}
