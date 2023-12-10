import React, { ReactNode } from 'react';
import { Box, Flex, Input } from '@chakra-ui/react';

import classes from './toolbar.module.scss';

import { useCanvasToolbar } from './useCanvasToolbar.ts';
import PencilToolComponent from './components/PencilTool/PencilToolComponent.tsx';
import BrushToolComponent from './components/BrushToolComponent/BrushToolComponent.tsx';
import RectToolComponent from './components/RectToolComponent/RectToolComponent.tsx';

export const CanvasToolbar = (): ReactNode | null => {
    const { lineWidth, setColor, canvas, setPencilTool, setRectTool } = useCanvasToolbar();

    if (!(canvas instanceof HTMLCanvasElement)) {
        return null;
    }

    return (
        <section>
            <Box bg="tomato" w="100%" p={4} color="white" aria-label={'draw toolbar'} flex={1}>
                <Flex width={'100%'} grow={1} className={classes.toolbar}>
                    <Input type={'color'} rounded={50} width={50} onChange={setColor} />
                    <Input type={'number'} rounded={50} width={50} onChange={lineWidth} />
                    <PencilToolComponent setPencilTool={setPencilTool} />
                    <BrushToolComponent />
                    <RectToolComponent setRectTool={setRectTool} />
                </Flex>
            </Box>
        </section>
    );
};
