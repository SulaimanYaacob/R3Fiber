"use client";

import {
  AppShellHeader,
  Center,
  Container,
  Group,
  Switch,
  Title,
  useComputedColorScheme,
  useMantineColorScheme,
} from "@mantine/core";

function AppHeader() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light");
  const toggleColorScheme = () => {
    setColorScheme(computedColorScheme === "dark" ? "light" : "dark");
  };

  console.log(computedColorScheme);

  return (
    <AppShellHeader>
      <Container pos="relative" w="100%" h="100%">
        <Center pos="absolute" mih="100%" w="100%" left={0} top={0}>
          <Title>React 3️⃣ Fiber</Title>
        </Center>
        <Group justify="right" mih="100%">
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
