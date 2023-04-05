import type { z } from "zod";
import { errorScheme } from "@/lib/error";
import { signOut } from "next-auth/react";

export async function handleResponse<T extends z.ZodTypeAny>(
  response: Response,
  schema: T
): Promise<z.infer<T>> {
  if (response.status === 401) {
    void signOut();
    throw new Error("认证失败，请重新登录");
  }

  const data: unknown = await response.json();

  const result = schema.safeParse(data);
  if (!result.success) {
    const errorResult = errorScheme.safeParse(data);
    if (errorResult.success) {
      throw new Error(JSON.stringify(errorResult.data, null, 2));
    } else {
      throw new Error(
        `FROM ERROR:\n${errorResult.error.message}\n\nFROM RESULT:\n${result.error.message}`
      );
    }
  }
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return result.data;
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
