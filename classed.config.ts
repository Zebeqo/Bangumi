import { createClassed } from "@tw-classed/react";
import { customTwMerge } from "@/lib/utils";

export const { classed } = createClassed({ merger: customTwMerge });
