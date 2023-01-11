import { z } from "zod";
import type { ToastAction } from "@/lib/toast";

export const errorScheme = z.object({
  title: z.string(),
  details: z
    .object({
      path: z.string(),
      method: z.string(),
    })
    .optional(),
  description: z.string(),
});

export class ToastError extends Error {
  public action: ToastAction;
  public description: string;
  constructor({
    description,
    action,
  }: {
    action: ToastAction;
    description: string;
  }) {
    super(description);
    this.action = action; // this property is defined in parent
    this.description = description;
  }
}
