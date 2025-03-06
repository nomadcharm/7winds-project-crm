import { configureStore } from '@reduxjs/toolkit';
import { rowApiSlice } from './features/rowApi';

export const store = configureStore({
  reducer: {
    [rowApiSlice.reducerPath]: rowApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rowApiSlice.middleware),
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
