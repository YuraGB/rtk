import React, { ChangeEvent, ReactNode, useCallback, useEffect, useRef } from 'react';
import { Box, Button, Flex, Image, Input } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

import { useAppDispatch } from '../../../../context/hooks/redux.ts';
import { RootState } from '../../../../context';
import { canvasToolSlice } from '../../../../context/reducers/CanvasToolSlice.ts';

import PencilTool from '../../tools/Pencil.ts';
import RectTool from '../../tools/Rect.ts';

import classes from './toolbar.module.scss';
import Pencil from './assets/pencil.svg';
import Brush from './assets/brush.svg';
import Rect from './assets/rect.svg';

export const CanvasToolbar = (): ReactNode | null => {
    const dispatch = useAppDispatch();
    const colorRef = useRef<HTMLInputElement>(null);
    const { setTool, setLineWidth, setFillColor, setColorStroke } = canvasToolSlice.actions;
    const { canvas } = useSelector((state: RootState) => state.canvasReducer);

    const setColor = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            if (e.target.value) {
                dispatch(setColorStroke(e.target.value));
                dispatch(setFillColor(e.target.value));
            }
        },
        [dispatch, setColorStroke, setFillColor],
    );

    const lineWidth = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            if (e.target.value) {
                dispatch(setLineWidth(e.target.value));
            }
        },
        [dispatch, setLineWidth],
    );

    useEffect(() => {
        if (canvas instanceof HTMLCanvasElement) {
            dispatch(setTool(new PencilTool(canvas)));
        }
    }, [canvas, dispatch, setTool]);

    if (!(canvas instanceof HTMLCanvasElement)) {
        return null;
    }

    return (
        <section>
            <Box bg="tomato" w="100%" p={4} color="white" aria-label={'draw toolbar'} flex={1}>
                <Flex width={'100%'} grow={1} className={classes.toolbar}>
                    <Input type={'color'} ref={colorRef} rounded={50} width={50} onChange={setColor} />
                    <Input type={'number'} rounded={50} width={50} onChange={lineWidth} />
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
                    <Button
                        onClick={() => {
                            dispatch(setTool(new RectTool(canvas)));
                        }}
                    >
                        <Image
                            srcSet={Rect}
                            loading={'lazy'}
                            role={'button'}
                            alt={'draw Rect'}
                            src={Brush}
                            width={42}
                        />
                    </Button>
                </Flex>
            </Box>
        </section>
    );
};
