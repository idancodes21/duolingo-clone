import { Tabs } from "expo-router";
import { BookOpen, Target, Trophy, UserRound } from "lucide-react-native";

const ACTIVE_COLOR = "#58CC02";
const INACTIVE_COLOR = "#AFAFAF";

export default function TabsLayout() {
  return (
    <Tabs
      initialRouteName="index"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: ACTIVE_COLOR,
        tabBarInactiveTintColor: INACTIVE_COLOR,
        tabBarShowLabel: true,

        tabBarStyle: {
          height: 68,
          paddingTop: 0,
          paddingBottom: 0,
          backgroundColor: "#FFFFFF",
          borderTopWidth: 1,
          borderTopColor: "#E5E5E5",
          elevation: 0,
          position: "absolute",
          bottom: 40,
          left: 0,
          right: 0,
        },

        tabBarItemStyle: {
          justifyContent: "flex-start",
          paddingTop: 6,
        },

        tabBarLabelStyle: {
          fontFamily: "Nunito_800ExtraBold",
          fontSize: 11,
          marginTop: 2,
          marginBottom: 0,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Learn",
          tabBarIcon: ({ color, size, focused }) => (
            <BookOpen
              color={color}
              size={size}
              strokeWidth={focused ? 3 : 2.5}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="leaderboard"
        options={{
          title: "Leaderboard",
          tabBarIcon: ({ color, size, focused }) => (
            <Trophy color={color} size={size} strokeWidth={focused ? 3 : 2.5} />
          ),
        }}
      />

      <Tabs.Screen
        name="quests"
        options={{
          title: "Quests",
          tabBarIcon: ({ color, size, focused }) => (
            <Target color={color} size={size} strokeWidth={focused ? 3 : 2.5} />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size, focused }) => (
            <UserRound
              color={color}
              size={size}
              strokeWidth={focused ? 3 : 2.5}
            />
          ),
        }}
      />
    </Tabs>
  );
}
