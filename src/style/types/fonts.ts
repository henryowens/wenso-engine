export type FontInput =
  | { type: "custom"; url: string; name: string }
  | { type: "google"; name: string };
