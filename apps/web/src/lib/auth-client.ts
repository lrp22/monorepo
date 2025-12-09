import { createAuthClient } from "better-auth/react";

const BASE_URL = process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3001";

export const authClient = createAuthClient({
  baseURL: BASE_URL,
});
