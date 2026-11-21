export type NodeKind = "active" | "locked" | "chest" | "headphones" | "trophy";
export type PathItem = NodeKind | "mascot-left" | "mascot-right";

/** Keys for the mascot animations. Map each key to a Lottie file in LearnScreen. */
export type AnimationKey = "waving" | "celebrating" | "thinking" | "walking";

export type Unit = {
  number: number;
  description: string;
  /** Banner color and its darker 3D edge */
  face: string;
  edge: string;
  /** Which animation plays at the mascot spots in this unit */
  animation: AnimationKey;
  items: PathItem[];
};

export const SECTION = 1;

export const units: Unit[] = [
  {
    number: 1,
    description: "Introduce yourself and greet others",
    face: "#58CC02",
    edge: "#46A302",
    animation: "waving",
    items: [
      "active",
      "locked",
      "chest",
      "mascot-right",
      "headphones",
      "locked",
      "trophy",
    ],
  },
  {
    number: 2,
    description: "Order food and drinks",
    face: "#CE82FF",
    edge: "#A568CC",
    animation: "celebrating",
    items: [
      "locked",
      "locked",
      "headphones",
      "locked",
      "chest",
      "mascot-left",
      "locked",
      "locked",
      "trophy",
    ],
  },
  {
    number: 3,
    description: "Talk about your family and friends",
    face: "#1CB0F6",
    edge: "#1899D6",
    animation: "thinking",
    items: [
      "locked",
      "locked",
      "chest",
      "locked",
      "headphones",
      "mascot-right",
      "locked",
      "locked",
      "locked",
      "trophy",
    ],
  },
  {
    number: 4,
    description: "Ask for directions and get around",
    face: "#FF9600",
    edge: "#E58700",
    animation: "walking",
    items: [
      "locked",
      "headphones",
      "locked",
      "locked",
      "chest",
      "mascot-left",
      "locked",
      "locked",
      "headphones",
      "locked",
      "trophy",
    ],
  },
];
