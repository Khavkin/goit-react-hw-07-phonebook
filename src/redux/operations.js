import { createAsyncThunk } from '@reduxjs/toolkit';
import { getContacts } from 'api/mockapi-api';

export const fetchContacts = createAsyncThunk(
  'contacts/fetch',
  async (_, thunkAPI) => {
    try {
      console.log('fetch contacts operation');
      const response = await getContacts();
      return response.data;
    } catch (error) {
      console.log('fetch contacts error-', error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);
