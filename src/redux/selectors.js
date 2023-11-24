import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contact.contacts;

export const selectStatusFilter = state => state.filter.filter;

export const selectIsLoading = state => state.contact.isLoading;

export const selectError = state => state.contact.error;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectStatusFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
