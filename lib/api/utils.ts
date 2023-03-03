import type { z } from "zod";
import { errorScheme } from "@/lib/error";
import { signOut } from "next-auth/react";

export async function handleResponse<T>(
  response: Response,
  scheme: z.ZodSchema<T>
) {
  if (response.status === 401) {
    void signOut();
  }

  const data: unknown = await response.json();

  const result = scheme.safeParse(data);
  if (!result.success) {
    const errorResult = errorScheme.safeParse(data);
    if (errorResult.success) {
      throw new Error(JSON.stringify(errorResult.data, null, 2));
    } else {
      throw new Error(
        `FROM ERROR:\n${errorResult.error.message}\n\nFROM RESULT:\n${result.error.message}`
      );
    }
  } else {
    return result.data;
  }
}

export async function handleMutationResponse(response: Response) {
  if (response.status === 401) {
    void signOut();
  }

  if (response.status !== 204) {
    const errorResult = errorScheme.safeParse(await response.json());
    if (errorResult.success) {
      throw new Error(JSON.stringify(errorResult.data, null, 2));
    } else {
      throw new Error(errorResult.error.message);
    }
  }
}
