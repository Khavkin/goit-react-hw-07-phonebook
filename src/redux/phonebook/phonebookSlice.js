import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts } from 'redux/operations';

//console.dir(fetchContacts);

const handlePending = state => (state.contacts.isLoading = true);
const handleRejected = (state, action) => {
  console.log('handleRejected', action.payload);
  state.contacts.isLoading = false;
  state.contacts.error = action.payload;
};

export const phonebookSlice = createSlice({
  name: 'phonebook',
  initialState: {
    contacts: {
      items: [],
      isLoading: false,
      error: null,
    },
    filter: '',
  },
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items = action.payload;
    },
    [fetchContacts.rejected]: handleRejected,
  },
});

export const { addContact, delContact, setFilter } = phonebookSlice.actions;
export default phonebookSlice.reducer;
