import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactsInitialState = [
  { id: 'id-1', name: 'Jason Statham', number: '459-12-56' },
  { id: 'id-2', name: 'Sylvester Stallone', number: '443-89-12' },
  { id: 'id-3', name: 'Dolph Lundgren', number: '645-17-79' },
  { id: 'id-4', name: 'Arnold Schwarzenegger', number: '227-91-26' },
];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer: (state, { payload }) => {
        state.push(payload);
      },
      prepare: contact => {
        return {
          payload: {
            ...contact,
            id: nanoid(),
          },
        };
      },
    },

    deleteContact: (state, { payload }) =>
      state.filter(({ id }) => id !== payload),
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
