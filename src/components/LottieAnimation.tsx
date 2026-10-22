import LottieView, { type AnimationObject } from "lottie-react-native";

type LottieAnimationProps = {
  source: AnimationObject;
  size?: number;
};

export default function LottieAnimation({
  source,
  size = 280,
}: LottieAnimationProps) {
  return (
    <LottieView
      source={source}
      autoPlay
      loop
      style={{ width: size, height: size }}
    />
  );
}
