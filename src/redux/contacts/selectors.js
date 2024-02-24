export const selectFilter = store => store.filter;

export const selectAllContacts = store => store.contacts;

export const selectFilteredContacts = store => {
  const { contacts, filter } = store;
  const { items } = contacts;
  if (!filter) {
    return items;
  }
  const normalizedFilter = filter.toLowerCase();

  const filteredContacts = items.filter(({ name }) => {
    const normalizedName = name.toLowerCase();
    return normalizedName.includes(normalizedFilter);
  });
  return filteredContacts;
};
