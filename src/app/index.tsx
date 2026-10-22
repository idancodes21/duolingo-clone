import LottieAnimation from "@/components/LottieAnimation";
import { Text, View } from "react-native";

import welcomeAnimation from "../assets/onboarding-welcome.json";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-white px-6">
      <LottieAnimation source={welcomeAnimation} size={300} />

      <Text className="mt-6 text-center font-nunito-extrabold text-3xl">
        Learn a little every day!
      </Text>

      <Text className="mt-3 text-center font-nunito-regular text-base text-gray-600">
        Make learning fun, one lesson at a time.
      </Text>
    </View>
  );
}
