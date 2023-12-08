import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../index.ts';

export const useAppDispatch = () => useDispatch<AppDispatch>();

// to check why it doesn't work
export const useAppSelector: TypedUseSelectorHook<RootState> = () => useSelector;
