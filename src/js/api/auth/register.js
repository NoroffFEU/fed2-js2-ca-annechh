import { API_AUTH_REGISTER } from '../constants';
import { headers } from '../headers';

/**
 * @description
 * Registers a new user by sending a `POST` request with the provided credentials.
 *
 * The function attempts to register new user with the provided name, email and password.
 * If successful the new user will be redirected to login page.
 * If register fails, it will display an alert message
 *
 * @async
 * @function register
 * @param {Object} credentials
 * @param {string} credentials.name New user name
 * @param {string} credentials.email New user email
 * @param {string} credentials.password New user password
 * @returns {Promise<object>}  A promise that resolves with the user data on successful register account.
 * @throws {Error} Throws and error message if the register fails
 *
 * @example
 * // Example usage of the register function
 *
 *   try {
 *     const userData = await register({
 *       name: 'bob',
 *       email: 'user@example.com',
 *       password: 'password123'
 *     });
 *     console.log('Register successful:', userData);
 *   } catch (error) {
 *     console.error('Register failed:', error);
 *   }
 */
export async function register({ name, email, password }) {
  try {
    const response = await fetch(API_AUTH_REGISTER, {
      method: 'POST',
      headers: headers(),
      body: JSON.stringify({ name, email, password }),
    });

    if (!response.ok) {
      alert('The account name and/or email already exists. Please try again');
      return;
    } else {
      const data = await response.json();
      alert(`Username: ${name}, Email: ${email} successfully registered`);
      window.location.href = '/auth/login/';
      return data;
    }
  } catch (error) {
    alert('Could not register new user account');
    console.error(error);
  }
}
