import LottieAnimation from "@/components/LottieAnimation";
import { Link } from "expo-router";
import { Image, Pressable, Text, View } from "react-native";
import welcomeAnimation from "../assets/onboarding-welcome.json";

export default function Index() {
  return (
    <View className="mb-10 flex-1 items-center justify-center bg-white px-6">
      <View className="flex-row items-center gap-2">
        <Image
          source={require("../assets/duolingo-icon.png")}
          className="h-9 w-9"
          resizeMode="contain"
        />

        <Text className="font-nunito-extrabold text-xl text-[#58CC02]">
          Duolingo
        </Text>
      </View>

      <LottieAnimation source={welcomeAnimation} size={300} />

      <Text className="text-center font-nunito-extrabold text-3xl text-[#4B4B4B]">
        The most fun way to learn languages, chess, and more!
      </Text>

      <Link href="/(tabs)" asChild>
        <Pressable className="mt-10 w-full items-center justify-center rounded-xl border-b-4 border-[#46A302] bg-[#58CC02] py-4">
          <Text className="font-nunito-extrabold text-white">GET STARTED</Text>
        </Pressable>
      </Link>

      <Link href="/onboarding" asChild>
        <Pressable className="mt-2 w-full items-center justify-center rounded-xl border-2 border-[#E5E5E5] bg-white py-4">
          <Text className="font-nunito-extrabold text-[#1CB0F6]">
            ALREADY HAVE AN ACCOUNT
          </Text>
        </Pressable>
      </Link>
    </View>
  );
}
