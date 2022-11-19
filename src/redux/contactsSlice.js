import { nanoid } from 'nanoid';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
  filter: '',
};

const contactsSlice = createSlice({
  name: 'state',
  initialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.contacts.push(action.payload);
      },
      prepare(contactName, number) {
        return {
          payload: {
            id: nanoid(),
            name: contactName,
            number: number,
          },
        };
      },
    },
    filterContacts: (state, action) => {
      state.filter = action.payload;
    },

    deleteContact: (state, action) => {
      const contactIdx = state.contacts.findIndex(
        contact => contact.id === action.payload
      );
      state.contacts.splice(contactIdx, 1);
    },
  },
});

export const { addContact, deleteContact, filterContacts } =
  contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
