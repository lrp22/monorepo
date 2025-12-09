import { createClient } from "@app/auth/client"; // Import from your shared package
import { expoClient } from "@better-auth/expo/client";
import * as SecureStore from "expo-secure-store";
import Constants from "expo-constants";

const BASE_URL = process.env.EXPO_PUBLIC_SERVER_URL || "http://localhost:3001";

const scheme = Constants.expoConfig?.scheme;
const resolvedScheme = Array.isArray(scheme) ? scheme[0] : scheme;

export const authClient = createClient({
  baseURL: BASE_URL,
  plugins: [
    expoClient({
      scheme: resolvedScheme || "mobile",
      storagePrefix: resolvedScheme || "mobile",
      storage: SecureStore,
    }),
  ],
});
