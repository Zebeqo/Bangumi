export type Color = "primary" | "accent" | "neutral" | "success";
export const colorWrapper = (baseProp: string, color: Color) => {
  return baseProp.replaceAll("primary", color);
};
