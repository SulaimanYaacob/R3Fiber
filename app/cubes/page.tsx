"use client";

import {
  Center,
  Container,
  Divider,
  Grid,
  Slider,
  Stack,
  Text,
} from "@mantine/core";
import Cube from "../components/r3f/Cube";
import MainCanvas from "../components/r3f/MainCanvas";
import { useState } from "react";

export default function Cubes() {
  const [scale, setScale] = useState<[number, number, number]>();
  const [lightPosition, setLightPosition] = useState<[number, number, number]>([
    0, 0, 1,
  ]);

  const sliderConfigurations = [
    {
      label: "Scale",
      onChange: (value: number) => setScale([value, value, value]),
      defaultValue: 1,
      step: 0.5,
      min: 1,
      max: 2,
      marks: [
        { value: 1, label: "1" },
        { value: 1.5, label: "1.5" },
        { value: 2, label: "2" },
      ],
    },
    {
      label: "Light X Position",
      onChange: (value: number) =>
        setLightPosition((prev) => [value, prev[1], prev[2]]),
      defaultValue: 0,
      step: 1,
      min: -2,
      max: 2,
      marks: [
        { value: -2, label: "-2" },
        { value: -1, label: "-1" },
        { value: 0, label: "0" },
        { value: 1, label: "1" },
        { value: 2, label: "2" },
      ],
    },
    {
      label: "Light Y Position",
      onChange: (value: number) =>
        setLightPosition((prev) => [prev[0], value, prev[2]]),
      defaultValue: 0,
      step: 1,
      min: -2,
      max: 2,
      marks: [
        { value: -2, label: "-2" },
        { value: -1, label: "-1" },
        { value: 0, label: "0" },
        { value: 1, label: "1" },
        { value: 2, label: "2" },
      ],
    },
    {
      label: "Light Z Position",
      onChange: (value: number) =>
        setLightPosition((prev) => [prev[0], prev[1], value]),
      defaultValue: 0,
      step: 1,
      min: -2,
      max: 2,
      marks: [
        { value: -2, label: "-2" },
        { value: -1, label: "-1" },
        { value: 0, label: "0" },
        { value: 1, label: "1" },
        { value: 2, label: "2" },
      ],
    },
  ];

  return (
    <Container>
      <Center pos="absolute" mih="100vh" w="100%" top={0} left={0}>
        <Stack gap="xl">
          <MainCanvas>
            {/* <ambientLight intensity={0.5} /> */}
            <directionalLight position={lightPosition} />
            <group position={[0, 0, 0]} scale={scale}>
              <Cube color="hotpink" position={[1, 1, 0]} />
              <Cube color="royalblue" position={[-1, 1, 0]} />
              <Cube color="green" position={[1, -1, 0]} />
              <Cube color="yellow" position={[-1, -1, 0]} />
            </group>
          </MainCanvas>
          <Divider label="Config" labelPosition="center" />

          <Stack gap="xl">
            {sliderConfigurations.map(({ label, onChange, ...rest }) => (
              <Grid key={label}>
                <Grid.Col span={4}>
                  <Text fw={500} ta="center">
                    {label}
                  </Text>
                </Grid.Col>
                <Grid.Col span={8}>
                  <Slider
                    label={null}
                    onChange={onChange}
                    defaultValue={rest.defaultValue}
                    step={rest.step}
                    min={rest.min}
                    max={rest.max}
                    marks={rest.marks}
                  />
                </Grid.Col>
              </Grid>
            ))}
          </Stack>
        </Stack>
      </Center>
    </Container>
  );
}
