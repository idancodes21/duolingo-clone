import { ListChecks } from "lucide-react-native";
import { Text, View } from "react-native";

export default function Section() {
  return (
    <View className="w-full items-center px-3">
      <View className="w-full flex-row items-stretch justify-between overflow-hidden rounded-xl border-b-4 border-[#46A302] bg-[#58CC02]">
        {/* Section information */}
        <View className="flex-1 justify-center gap-1 px-4 py-3">
          <Text className="font-nunito-extrabold text-sm uppercase tracking-wide text-white/85">
            Section 1, Unit 1
          </Text>

          <Text className="font-nunito-extrabold text-lg text-white">
            Order at a café
          </Text>
        </View>

        {/* Section icon */}
        <View className="w-14 items-center justify-center border-l-2 border-[#46A302]">
          <ListChecks size={27} color="#FFFFFF" strokeWidth={2.5} />
        </View>
      </View>
    </View>
  );
}
