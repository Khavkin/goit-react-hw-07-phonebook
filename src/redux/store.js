import { configureStore } from '@reduxjs/toolkit';

import { phonebookReducer } from './phonebook/phonebookSlice';

export const store = configureStore({
  reducer: { phonebook: phonebookReducer },
});
