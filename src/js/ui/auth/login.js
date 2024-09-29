import { login } from '../../api/auth/login';

/**
 * @description
 * Handles the login form submission and sends user credentials for authentication.
 *
 * This function prevents the default form submission behavior, gathers form data,
 * and passes the login credentials to the `login` function. It handles the login process
 * asynchronously and waits for the result of the login attempt.
 *
 * @async
 * @function onLogin
 * @param {Event} event - Form submission event
 * @returns {Promise<object>} A promise that on successful login resolves user data.
 *
 *
 * @example
 * const form = document.forms.login;
 * form.addEventListener("submit", onLogin);
 */

export async function onLogin(event) {
  event.preventDefault();

  const loginUserData = Object.fromEntries(new FormData(event.target));

  await login(loginUserData);
}
