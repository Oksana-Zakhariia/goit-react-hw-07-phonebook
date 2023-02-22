import { createSlice } from '@reduxjs/toolkit';
import { addContact, fetchContacts, deleteContact } from './operations';
const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [addContact.pending]: handlePending,
    [deleteContact.pending]: handlePending,
    [fetchContacts.rejected]: handleRejected,
    [addContact.rejected]: handleRejected,
    [deleteContact.rejected]: handleRejected,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        contact => contact.id === action.payload
      );
      state.items.splice(index, 1);
    },
  },
});

export const contactsReducer = contactsSlice.reducer;

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: {
//     items: [],
//     isLoading: false,
//     error: null,
//   },
//   //   reducers: {
//   //     fetchingInProgress(state) {
//   //       state.isLoading = true;
//   //     },
//   //     fetchingSuccess(state, action) {
//   //       state.isLoading = false;
//   //       state.error = null;
//   //       state.items = action.payload;
//   //     },
//   //     fetchingError(state, action) {
//   //       state.isLoading = false;
//   //       state.error = action.payload;
//   //     },
//   //   },
//   // });
//   // export const { fetchingInProgress, fetchingSuccess, fetchingError } =
//   //   contactsSlice.actions;
//   // export const contactsReducer = contactsSlice.reducer;
//   extraReducers: {
//     [fetchContacts.pending](state) {
//       state.isLoading = true;
//     },
//     [fetchContacts.fulfilled](state, action) {
//       state.isLoading = false;
//       state.error = null;
//       state.items = action.payload;
//     },
//     [fetchContacts.rejected](state, action) {
//       state.isLoading = false;
//       state.error = action.payload;
//     },
//     [addContact.pending](state) {
//       state.isLoading = true;
//     },
//     [addContact.fulfilled](state, action) {
//       state.isLoading = false;
//       state.error = null;
//       state.items.push(action.payload);
//     },
//     [addContact.rejected](state, action) {
//       state.isLoading = false;
//       state.error = action.payload;
//     },
//     [deleteContact.pending](state) {
//       state.isLoading = true;
//     },
//     [deleteContact.fulfilled](state, action) {
//       state.isLoading = false;
//       state.error = null;
//       const index = state.items.findIndex(
//         contact => contact.id === action.payload.id
//       );
//       state.items.splice(index, 1);
//     },
//     [deleteContact.rejected](state, action) {
//       state.isLoading = false;
//       state.error = action.payload;
//     },
//   },
// });
