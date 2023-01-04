export type Color = "primary" | "accent" | "neutral" | "success" | "error";
export const colorWrapper = (baseProp: string, color: Color) => {
  return baseProp.replaceAll("primary", color);
};
