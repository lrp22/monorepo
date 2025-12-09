import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "../../global.css";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/utils/orpc";
import { PortalHost } from "@rn-primitives/portal";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" options={{ headerShown: false }} />
        </Stack>
        <PortalHost />
      </QueryClientProvider>
    </SafeAreaProvider>
  );
}
