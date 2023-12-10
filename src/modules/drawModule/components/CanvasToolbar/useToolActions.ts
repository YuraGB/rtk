import { ChangeEvent, useCallback } from 'react';
import PencilTool from '../../tools/Pencil.ts';
import RectTool from '../../tools/Rect.ts';
import { CallbackFunc, CallbackFuncWithEvent } from './useCanvasToolbar.ts';
import { canvasToolSlice } from '../../../../context/reducers/CanvasToolSlice.ts';
import { Dispatch } from '@reduxjs/toolkit';

export const useToolActions = (dispatch: Dispatch, canvas: HTMLCanvasElement | object) => {
    const { setTool, setColorStroke, setFillColor, setLineWidth } = canvasToolSlice.actions;
    const isCanvas = canvas instanceof HTMLCanvasElement;

    const setColor: CallbackFuncWithEvent = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            if (e.target.value) {
                dispatch(setColorStroke(e.target.value));
                dispatch(setFillColor(e.target.value));
            }
        },
        [dispatch, setColorStroke, setFillColor],
    );

    const setPencilTool: CallbackFunc = useCallback(() => {
        if (isCanvas) {
            dispatch(setTool(new PencilTool(canvas)));
        }
    }, [canvas, dispatch, isCanvas, setTool]);

    const setRectTool: CallbackFunc = useCallback(() => {
        if (isCanvas) {
            dispatch(setTool(new RectTool(canvas)));
        }
    }, [canvas, dispatch, isCanvas, setTool]);

    const lineWidth: CallbackFuncWithEvent = useCallback(
        (e) => {
            if (e.target.value) {
                dispatch(setLineWidth(e.target.value));
            }
        },
        [dispatch, setLineWidth],
    );

    return {
        setColor,
        setPencilTool,
        setRectTool,
        lineWidth,
    };
};
