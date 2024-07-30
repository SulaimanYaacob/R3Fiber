import { Inter } from "next/font/google";
import "@mantine/core/styles.css";

const inter = Inter({ subsets: ["latin"] });

import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import MainLayout from "./components/AppLayout/MainLayout";

export const metadata = {
  title: "My Mantine app",
  description: "I have followed setup instructions carefully",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript defaultColorScheme="auto" />
      </head>
      <body>
        <MantineProvider defaultColorScheme="auto">
          <MainLayout>{children}</MainLayout>
        </MantineProvider>
      </body>
    </html>
  );
}
