import { createAuthClient } from "better-auth/react";
import { inferAdditionalFields } from "better-auth/client/plugins";
import type { auth } from "./index";

export type CreateClientOptions = {
  baseURL: string;
  plugins?: any[];
  [key: string]: any;
};

export const createClient = (options: CreateClientOptions) => {
  return createAuthClient({
    ...options,
    plugins: [
      // This ensures type inference works for both platforms based on your auth config
      inferAdditionalFields<typeof auth>(),
      ...(options.plugins || []),
    ],
  });
};
