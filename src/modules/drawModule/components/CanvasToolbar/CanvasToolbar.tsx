import React, { ReactNode } from 'react';
import { Box, Button, Flex, Image } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

import { useAppDispatch } from '../../../../context/hooks/redux.ts';
import { RootState } from '../../../../context';
import { canvasToolSlice } from '../../../../context/reducers/CanvasToolSlice.ts';
import PencilTool from '../../tools/Pencil.ts';

import classes from './toolbar.module.scss';
import Pencil from './assets/pencil.svg';
import Brush from './assets/brush.svg';

export const CanvasToolbar = (): ReactNode | null => {
    const dispatch = useAppDispatch();
    const { setTool } = canvasToolSlice.actions;
    const { canvas } = useSelector((state: RootState) => state.canvasReducer);

    if (!(canvas instanceof HTMLCanvasElement)) {
        return null;
    }

    return (
        <section>
            <Box bg="tomato" w="100%" p={4} color="white" aria-label={'draw toolbar'} flex={1}>
                <Flex width={'100%'} grow={1} className={classes.toolbar}>
                    <Button
                        onClick={() => {
                            dispatch(setTool(new PencilTool(canvas)));
                        }}
                    >
                        <Image
                            srcSet={Pencil}
                            loading={'lazy'}
                            role={'button'}
                            alt={'draw by pencil'}
                            src={Pencil}
                            width={30}
                        />
                    </Button>
                    <Button>
                        <Image
                            srcSet={Brush}
                            loading={'lazy'}
                            role={'button'}
                            alt={'draw by brush'}
                            src={Brush}
                            width={42}
                        />
                    </Button>
                </Flex>
            </Box>
        </section>
    );
};
