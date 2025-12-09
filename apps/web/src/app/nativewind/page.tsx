"use client";

import Link from "next/link";
import { Text } from "@app/ui";
import { Button, Card } from "@app/ui";

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
          <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-2xl mx-auto mb-4">
            🎨
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Shared UI Components
          </h1>
          <p className="text-gray-600 mb-4">
            Cross-platform components built with React Native and NativeWind
          </p>
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium">
            🌐 Web App
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Component Showcase */}
        <section className="space-y-8">
          {/* Button Component */}
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Button</h2>
            <div className="space-y-3">
              <Button variant={"test"} onPress={() => alert("Works on web!")}>
                <Text>Primary Button</Text>
              </Button>
              <Button
                variant="secondary"
                onPress={() => alert("Same component, different style")}
              >
                <Text>Primary Button</Text>
              </Button>
            </div>
          </div>

          {/* Card Component */}
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Card</h2>
            <Card variant="default">
              <Text className="text-gray-700 text-sm">
                This nested card demonstrates consistent spacing and styling
                across platforms. The same component works identically on
                mobile.
              </Text>
            </Card>
          </div>

          {/* How It Works */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-3">
              How It Works
            </h2>
            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
              Components use React Native primitives (View, Text, Pressable)
              with NativeWind for styling. React Native Web transforms these
              into HTML elements for the browser.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white p-3 rounded border border-blue-100">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-blue-600">🌐</span>
                  <span className="font-medium text-blue-900 text-sm">Web</span>
                </div>
                <p className="text-blue-700 text-xs">React Native Web → HTML</p>
              </div>

              <div className="bg-white p-3 rounded border border-purple-100">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-purple-600">📱</span>
                  <span className="font-medium text-purple-900 text-sm">
                    Mobile
                  </span>
                </div>
                <p className="text-purple-700 text-xs">Native iOS/Android</p>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="mt-12 text-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 transition-colors text-white rounded-lg px-6 py-2 font-medium text-sm gap-2"
          >
            <span>🏠</span>
            <span>Back to Home</span>
          </Link>

          <p className="mt-4 text-sm text-gray-500">
            Try the mobile app to see identical components in action
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-gray-600 text-sm">
          Same components • Different platforms • One codebase
        </div>
      </footer>
    </div>
  );
}
