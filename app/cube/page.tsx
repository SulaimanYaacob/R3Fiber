"use client";

import {
  Center,
  ColorInput,
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
  const [scale, setScale] = useState<[number, number, number]>([2, 2, 2]);
  const [lightPosition, setLightPosition] = useState<[number, number, number]>([
    0, 0, 1,
  ]);
  const [rotateX, setRotateX] = useState<number>(0);
  const [rotateY, setRotateY] = useState<number>(0);
  const [rotateZ, setRotateZ] = useState<number>(0);
  const [color, setColor] = useState<string>("#fff");

  const sliderConfigurations = [
    {
      label: "Scale",
      onChange: (value: number) => setScale([value, value, value]),
      defaultValue: 2,
      step: 1,
      min: 1,
      max: 3,
      marks: [
        { value: 1, label: "1" },
        { value: 2, label: "2" },
        { value: 3, label: "3" },
      ],
    },
    {
      label: "Light X Pos",
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
      label: "Light Y Pos",
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
      label: "Light Z Pos",
      onChange: (value: number) =>
        setLightPosition((prev) => [prev[0], prev[1], value]),
      defaultValue: 1,
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
      label: "Rotate X Pos",
      onChange: (value: number) => setRotateX(value),
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
      label: "Rotate Y Pos",
      onChange: (value: number) => setRotateY(value),
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
      label: "Rotate Z Pos",
      onChange: (value: number) => setRotateZ(value),
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
      <Stack gap="xl">
        <MainCanvas style={{ height: "50vh" }}>
          <directionalLight position={lightPosition} />
          <Cube
            color={color}
            position={[0, 0, 0]}
            size={scale}
            rotateX={rotateX}
            rotateY={rotateY}
            rotateZ={rotateZ}
          />
        </MainCanvas>
        <Center>
          <ColorInput onChange={setColor} />
        </Center>
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
    </Container>
  );
}
