import { useAppDispatch } from '../../../../context/hooks/redux.ts';
import { ChangeEvent, useEffect } from 'react';
import { canvasToolSlice } from '../../../../context/reducers/CanvasToolSlice.ts';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../context';
import PencilTool from '../../tools/Pencil.ts';
import { useToolActions } from './useToolActions.ts';

export type CallbackFunc = () => void;
export type CallbackFuncWithEvent = (e: ChangeEvent<HTMLInputElement>) => void;

export const useCanvasToolbar = () => {
    const dispatch = useAppDispatch();
    const { setTool } = canvasToolSlice.actions;
    const { canvas } = useSelector((state: RootState) => state.canvasReducer);
    const isCanvas = canvas instanceof HTMLCanvasElement;

    const { setColor, setPencilTool, setRectTool, lineWidth } = useToolActions(dispatch, canvas);

    useEffect(() => {
        if (isCanvas) {
            dispatch(setTool(new PencilTool(canvas)));
        }
    }, [canvas, dispatch, isCanvas, setTool]);

    return {
        dispatch,
        setTool,
        canvas,
        setColor,
        setPencilTool,
        setRectTool,
        lineWidth,
    };
};
