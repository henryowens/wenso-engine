type FontWeights =
  | "100"
  | "200"
  | "300"
  | "400"
  | "500"
  | "600"
  | "700"
  | "800"
  | "900";

export type FontInput =
  | { type: "custom"; url: string; name: string }
  | { type: "google"; name: string; weights?: FontWeights[] };
