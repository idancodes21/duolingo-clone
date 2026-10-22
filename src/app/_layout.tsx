import {
  Nunito_400Regular,
  Nunito_600SemiBold,
  Nunito_800ExtraBold,
} from "@expo-google-fonts/nunito";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import "../global.css";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_600SemiBold,
    Nunito_800ExtraBold,
  });

  if (!fontsLoaded) {
    return null;
  }
  return <Stack screenOptions={{ headerShown: false }} />;
}
