import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: 'id-1', name: 'Jason Statham', number: '459-12-56' },
  { id: 'id-2', name: 'Sylvester Stallone', number: '443-89-12' },
  { id: 'id-3', name: 'Dolph Lundgren', number: '645-17-79' },
  { id: 'id-4', name: 'Arnold Schwarzenegger', number: '227-91-26' },
];

export const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.contacts.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

export const { addContact, deleteContact } = contactSlice.actions;
export const contactsReducer = contactSlice.reducer;
