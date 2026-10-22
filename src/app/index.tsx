import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-white px-6">
      <Text className="font-nunito-extrabold text-3xl text-green-500">
        Welcome to Duolingo!
      </Text>

      <Text className="mt-4 font-nunito-regular text-lg text-gray-600">
        Learn a little every day.
      </Text>

      <Text className="mt-4 font-nunito-semibold text-base text-gray-800">
        Let's get started!
      </Text>
    </View>
  );
}
