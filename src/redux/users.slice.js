
import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { nanoid } from 'nanoid'
import { userInitState } from './users.init-state';

const userSlice = createSlice({
  name: 'users',
  initialState: userInitState,
  reducers: {
    usersFilterAction: (state, { payload }) => {
      state.filter = payload;
    },

    deleteUserAction: (state, { payload }) => {
      state.contacts = state.contacts.filter(user => user.id !== payload);
    },

    addContactAction: (state, { payload }) => {
    const names = state.contacts.map(contact => contact.name);

		if (names.indexOf(payload.name) >= 0) {
			alert(payload.name + " is already in contacts.");
			return;
      }

    state.contacts = [{ id: nanoid(), "name": payload.name, "number": payload.number }, ...state.contacts];
    },
  },
});

export const { usersFilterAction, deleteUserAction, addContactAction } = userSlice.actions;

const persistConfig = {
  key: 'goit-react-hw-06-phonebook',
  storage,
  whitelist: ['contacts'],
};

export const usersReducer = persistReducer(persistConfig, userSlice.reducer);