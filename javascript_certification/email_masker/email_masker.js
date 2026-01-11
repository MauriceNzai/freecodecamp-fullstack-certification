#!/usr/bin/node

/**
 * Masks an email address by replacing the middle characters
 * of the username with asterisks (*).
 *
 * @param {string} email - The email address to be masked
 * @returns {string} The masked email address
 */
function maskEmail(email) {
  const atIndex = email.indexOf('@');

  if (atIndex <= 1) {
    return email; // Nothing to mask or invalid email
  }

  const username = email.slice(0, atIndex);
  const domain = email.slice(atIndex);

  const maskedUsername =
    username[0] +
    '*'.repeat(username.length - 2) +
    username[username.length - 1];

  return maskedUsername + domain;
}

module.exports = {
	maskEmail,
}
