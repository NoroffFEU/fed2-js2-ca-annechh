import { API_AUTH_LOGIN } from '../constants';
import { headers } from '../headers';

/**
 * @description
 * Logs in the user by sending a `POST` request with the provided credentials.
 *
 * The function attempts to log in the user with the provided email and password.
 * If login is successful, it will store the `accessToken` and `userData` in the `localStorage` and redirect user to homepage.
 * If login fails, it will display an alert message
 *
 * @async
 * @function login
 * @param {object} credentials - An object containing user login details.
 * @param {string} credentials.email - Existing user's email
 * @param {string} credentials.password - Existing user's password
 * @returns {Promise<object>}  A promise that resolves with the user data on successful login.
 * @throws {Error} Throws and error message if the login fails
 *
 * @example
 * // Example usage of the Login function
 *
 *   try {
 *     const userData = await Login({
 *       email: 'user@example.com',
 *       password: 'password123'
 *     });
 *     console.log('Login successful:', userData);
 *   } catch (error) {
 *     console.error('Login failed:', error);
 *   }
 */

export async function login({ email, password }) {
  try {
    const response = await fetch(API_AUTH_LOGIN, {
      method: 'POST',
      headers: headers(),
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      alert('Failed to login, wrong email or password');
    } else {
      const data = await response.json();
      const accessToken = data.data.accessToken;
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('userData', JSON.stringify(data.data));
      window.location.href = '/';
      return data;
    }
  } catch (error) {
    alert('Could not log in to user account');
    console.error(error);
  }
}
