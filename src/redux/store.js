import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';


import { userInitState } from './users.init-state';
import { usersReducer } from './users.slice';

const initState = {
  users: userInitState,
};

export const store = configureStore({
  preloadedState: initState,
  devTools: true,
  reducer: {
    users: usersReducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),

  // middleware: get => {
  //   console.log(get());

  //   return get().concat([]);
  // },
});

export const persistor = persistStore(store);