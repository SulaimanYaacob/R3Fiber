import { Button, Card, CardSection, Center, Divider } from "@mantine/core";
import Link from "next/link";
import Cube from "./components/r3f/Cube";
import MainCanvas from "./components/r3f/MainCanvas";

export default function Home() {
  return (
    <Center pos="absolute" mih="100vh" w="100%" top={0} left={0}>
      <Card withBorder>
        <CardSection>
          <MainCanvas>
            <directionalLight position={[0, 0, 1]} />
            <Cube
              animated
              color="white"
              position={[0, 0, 0]}
              size={[3, 3, 3]}
            />
          </MainCanvas>
          <Divider />
        </CardSection>
        <Button
          color="dimmed"
          variant="light"
          href={"/cube"}
          component={Link}
          mt="md"
        >
          Cube
        </Button>
      </Card>
      <Card withBorder>
        <CardSection>
          <MainCanvas>
            <directionalLight position={[0, 0, 1]} />
            <mesh>
              <sphereGeometry args={[2, 32, 32]} />
            </mesh>
          </MainCanvas>
          <Divider />
        </CardSection>
        <Button
          color="dimmed"
          variant="light"
          href={"/cubes"}
          component={Link}
          mt="md"
        >
          Sphere
        </Button>
      </Card>
      {/* <SimpleGrid cols={3}>
        <Button href={"/cubes"} component={Link}>
          Cubes
        </Button>
        <Button href={"/cubes"} component={Link}>
          Cubes
        </Button>
      </SimpleGrid> */}
    </Center>
  );
}
