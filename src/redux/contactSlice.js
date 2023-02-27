import { createSlice } from '@reduxjs/toolkit';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const initialState = [
  { id: 'id-1', name: 'Jason Statham', number: '459-12-56' },
  { id: 'id-2', name: 'Sylvester Stallone', number: '443-89-12' },
  { id: 'id-3', name: 'Dolph Lundgren', number: '645-17-79' },
  { id: 'id-4', name: 'Arnold Schwarzenegger', number: '227-91-26' },
];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact(state, action) {
      const { name } = action.payload;
      const normalizedName = name.toLowerCase();

      const dublicate = state.find(
        ({ name }) => name.toLowerCase().trim() === normalizedName
      );

      if (dublicate) {
        Notify.failure(`${name} already in contacts`, {
          showOnlyTheLastOne: true,
          position: 'right-bottom',
        });
      } else {
        state.push(action.payload);
      }
    },

    deleteContact(state, action) {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;