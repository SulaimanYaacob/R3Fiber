"use client";
import {
  AppShellHeader,
  Center,
  Container,
  Group,
  Switch,
  Title,
  UnstyledButton,
  useComputedColorScheme,
  useMantineColorScheme,
} from "@mantine/core";
import Link from "next/link";

function AppHeader() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light");
  const toggleColorScheme = () => {
    setColorScheme(computedColorScheme === "dark" ? "light" : "dark");
  };

  return (
    <AppShellHeader>
      <Container pos="relative" w="100%" h="100%">
        <Center
          visibleFrom="sm"
          pos="absolute"
          mih="100%"
          w="100%"
          left="0"
          top={0}
        >
          <UnstyledButton component={Link} href="/">
            <Title>React 🌾🌾🌾 </Title>
          </UnstyledButton>
        </Center>
        <Group hiddenFrom="sm" justify="space-between" mih="100%">
          <UnstyledButton component={Link} href="/">
            <Title>R3️⃣F </Title>
          </UnstyledButton>

          <Switch
            label="Dark Mode"
            onChange={toggleColorScheme}
            checked={computedColorScheme === "dark" ? true : false}
          />
        </Group>
        <Group visibleFrom="sm" justify="end" mih="100%">
          <Switch
            label="Dark Mode"
            onChange={toggleColorScheme}
            checked={computedColorScheme === "dark" ? true : false}
          />
        </Group>
      </Container>
    </AppShellHeader>
  );
}

export default AppHeader;
