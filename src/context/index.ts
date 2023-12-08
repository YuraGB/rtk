import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/UserSlice.ts';
// import { createTransform, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import canvasToolReducer from './reducers/CanvasToolSlice.ts';
import canvasReducer from './reducers/CanvasContext.ts';
// import { parse, stringify } from 'flatted';

// export const transformCircular = createTransform(
//     (inboundState) => stringify(inboundState),
//     (outboundState) => parse(outboundState),
// );
//
// const persistConfig = {
//     key: 'root',
//     storage,
//     transforms: [transformCircular],
// };

const rootReducer = combineReducers({
    userReducer,
    canvasToolReducer,
    canvasReducer,
});

// const persistedReducer = persistReducer(persistConfig, rootReducer);

export const setupStore = () =>
    configureStore({
        reducer: rootReducer,
        devTools: process.env.NODE_ENV !== 'production',
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: false,
            }),
    });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
