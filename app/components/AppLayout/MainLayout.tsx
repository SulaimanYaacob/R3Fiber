import { AppShell, AppShellMain } from "@mantine/core";
import AppHeader from "./AppHeader";

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <AppShell padding="md" header={{ height: 60 }}>
      <AppHeader />
      <AppShellMain>{children}</AppShellMain>
    </AppShell>
  );
}

export default MainLayout;
