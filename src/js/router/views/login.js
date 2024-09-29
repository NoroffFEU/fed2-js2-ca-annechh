import { onLogin } from '../../ui/auth/login';
import { buildNavBar } from '../../ui/dom/nav';

/**
 * Adds event listener to the login form to handle form submission.
 * When the form is submitted, it triggers the `onLogin` function.
 *
 * @description
 * Attaches a `submit`event listener to the login form, and when the for is submitted,
 * the `onLogin` function handles the login logic
 */

const form = document.forms.login;
form.addEventListener('submit', onLogin);

buildNavBar();
