import { Button, Center, SimpleGrid } from "@mantine/core";
import Link from "next/link";

export default function Home() {
  return (
    <Center pos="absolute" mih="100vh" w="100%" top={0} left={0}>
      <SimpleGrid cols={3}>
        <Button href={"/cubes"} component={Link}>
          Cubes
        </Button>
        <Button href={"/cubes"} component={Link}>
          Cubes
        </Button>
        <Button href={"/cubes"} component={Link}>
          Cubes
        </Button>
      </SimpleGrid>
    </Center>
  );
}
