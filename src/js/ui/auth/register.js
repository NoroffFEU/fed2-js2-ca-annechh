import { register } from '../../api/auth/register';

/**
 * @description
 * Handles the register form submission and sends user credentials for authentication.
 *
 * This function prevents the default form submission behavior, gathers form data,
 * and passes the register credentials to the `register` function. It handles the register process
 * asynchronously and waits for the result of the register attempt.
 *
 * @async
 * @function onRegister
 * @param {Event} event - Form submission event
 * @returns {Promise<object>} A promise that on successful register resolves user data.
 *
 * @example
 * const form = document.forms.register;
 * form.addEventListener("submit", onRegister);
 */

export async function onRegister(event) {
  event.preventDefault();

  const registerUserData = Object.fromEntries(new FormData(event.target));

  await register(registerUserData);
}
