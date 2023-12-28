import {configureStore} from '@reduxjs/toolkit'
import personReducer from "./slice"
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { createApi } from '../api';

export const store = configureStore({
  reducer: {
    person: personReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: createApi(),
      },
    }),
})

export type AppDispatch = typeof store.dispatch;
export type State = ReturnType<typeof store.getState>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<State> = useSelector;
