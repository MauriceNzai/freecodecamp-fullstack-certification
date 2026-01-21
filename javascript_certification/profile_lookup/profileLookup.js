#!/usr/bin/node

/**
 * Looks up a contact by first name and returns the requested property.
 *
 * @param {Array<Object>} contacts - Array of contact objects
 * @param {string} firstName - First name of the contact to search for
 * @param {string} prop - Property to retrieve from the contact
 * @returns {string|Array} The property value or an error message
 */
function lookUpProfile(contacts, firstName, prop) {
  const contact = contacts.find(
    profile => profile.firstName === firstName
  );

  if (!contact) {
    return "No such contact";
  }

  if (prop in contact) {
    return contact[prop];
  }

  return "No such property";
}

/**
 * Finds a contact by first name.
 *
 * @param {Array<Object>} contacts
 * @param {string} firstName
 * @returns {Object|null}
 */
function findContactByFirstName(contacts, firstName) {
  return contacts.find(profile => profile.firstName === firstName) || null;
}

module.exports = {
  lookUpProfile,
  findContactByFirstName,
};
