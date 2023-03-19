import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAllContacts = createAsyncThunk(
    "contacts/fetch-all",
    async(_, thunkAPI) => {
        try {
            const {data} = await axios.get('/contacts');
            return data;
        }
       catch (error) {
      console.log(error.message);
      return thunkAPI.rejectWithValue(error);
    }
        }
)

export const fetchAddContact = createAsyncThunk(
    "contacts/add",
    async(contact, thunkAPI) => {
        try {
            const {data:result} = await axios.post('/contacts', contact);
            return result;
        }
        catch(error) {
      console.log(error.message);
      return thunkAPI.rejectWithValue(error);
    }
    },

)

export const fetchDeleteContact = createAsyncThunk(
    "contacts/delete",
    async(contactsId, thunkAPI) => {
        try {
             const {data} = await axios.delete(`/contacts/${contactsId}`);
            return data.id;
        }
        catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
        }
)
