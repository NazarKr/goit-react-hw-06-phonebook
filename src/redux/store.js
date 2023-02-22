import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactSlice';
import { filterReducer } from './filtersSlice';

export const store = configureStore({
  reducer: {
    contact: contactsReducer,
    filters: filterReducer,
  },
});
