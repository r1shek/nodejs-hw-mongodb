import { ContactsCollection } from '../db/models/contact.js';

export const getAllContacts = async () => {
  const contacts = await ContactsCollection.find();
  return contacts;
};

export const getContactById = async (contactById) => {
  if (!contactById) {
    throw new Error('Contact ID is required');
  }

  const contact = await ContactsCollection.findById(contactById);
  return contact;
};
