interface Props {
  position: [number, number, number];
  color: string;
  size?: [number, number, number];
}

function Cube({ color, position, size }: Props) {
  return (
    <mesh position={position}>
      <boxGeometry args={size} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

export default Cube;
