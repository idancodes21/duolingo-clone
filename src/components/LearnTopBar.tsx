import { Flame, Gem, Heart } from "lucide-react-native";
import { Text, View } from "react-native";

export default function LearnTopBar() {
  return (
    <View className="flex-row items-center justify-between px-5 py-3">
      <Text className="text-3xl">🇩🇪</Text>

      {/* Streak */}
      <View className="flex-row items-center gap-1.5">
        <Flame size={25} color="#FF9600" fill="#FF9600" />
        <Text className="font-nunito-extrabold text-lg text-[#FF9600]">7</Text>
      </View>

      {/* Gems */}
      <View className="flex-row items-center gap-1.5">
        <Gem size={24} color="#1CB0F6" fill="#1CB0F6" />
        <Text className="font-nunito-extrabold text-lg text-[#1CB0F6]">
          450
        </Text>
      </View>

      {/* Hearts */}
      <View className="flex-row items-center gap-1.5">
        <Heart size={25} color="#FF4B4B" fill="#FF4B4B" />
        <Text className="font-nunito-extrabold text-lg text-[#FF4B4B]">5</Text>
      </View>
    </View>
  );
}
