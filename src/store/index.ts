// src/store/index.ts

import { combineReducers, configureStore } from '@reduxjs/toolkit';
import noteReducer from './noteSlice';

const rootReducer = combineReducers({
    notes: noteReducer,
    // Add other reducers if any
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
    reducer: rootReducer,
});

export default store;
