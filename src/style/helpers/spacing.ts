import { important } from "csx";
import { SPACING_MAP } from "../constants";
import { Spacing, Spacings } from "../types";

const mapSpacings = (spacings: Spacings) =>
  spacings
    .split(" ")
    .map((m) => SPACING_MAP[m as Spacing])
    .toString()
    .replaceAll(",", " ");

export const useMargin = (margin: Spacings, i = false) => ({
  margin: i ? important(mapSpacings(margin)) : mapSpacings(margin),
});

export const usePadding = (padding: Spacings) => ({
  padding: mapSpacings(padding),
});
