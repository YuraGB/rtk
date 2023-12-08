import { Container } from "@chakra-ui/react";
import CanvasToolbar from "./components/CanvasToolbar/CanvasToolbar.tsx";
import { Canvas } from "./components/Canvas/Canvas.tsx";

export const DrawModule = () => {
  return (
    <Container maxW="4xl" bg="blue.600" color="white">
      <CanvasToolbar />
      <Canvas />
    </Container>
  );
};
