import React, { LegacyRef, ReactNode, useEffect, useRef } from 'react';
import classes from './canvas.module.scss';
import { useAppDispatch } from '../../../../context/hooks/redux.ts';
import { canvasContextSlice } from '../../../../context/reducers/CanvasContext.ts';

export const Canvas = (): ReactNode => {
    const ref: LegacyRef<HTMLCanvasElement> | undefined = useRef(null);
    const dispatch = useAppDispatch();
    const { setCanvas } = canvasContextSlice.actions;

    useEffect(() => {
        if (ref?.current) {
            dispatch(setCanvas(ref.current));
        }
    }, [dispatch, setCanvas]);

    return <canvas ref={ref} className={classes.canvas} width={750} height={750} />;
};
