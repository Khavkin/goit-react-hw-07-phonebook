export const getContacts = state => state.phonebook.contacts.items;
export const getFilteredContacts = state => {
  const filterLC = state.phonebook.filter.toLocaleLowerCase();

  return state.phonebook.contacts.items.filter(({ name }) =>
    name.toLowerCase().includes(filterLC)
  );
};

export const getFilter = state => state.phonebook.filter;
