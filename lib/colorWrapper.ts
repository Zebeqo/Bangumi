export type Color = "primary" | "accent" | "neutral";
export const colorWrapper = (baseProp: string, color: Color) => {
  return baseProp.replaceAll("primary", color);
};
