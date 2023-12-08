import { memo, ReactNode } from "react";
import { Box } from "@chakra-ui/react";

const CanvasToolbar = (): ReactNode => {
  return (
    <section>
      <Box bg="tomato" w="100%" p={4} color="white">
        This is the Box
      </Box>
    </section>
  );
};

export default memo(CanvasToolbar);
