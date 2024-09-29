import { onRegister } from '../../ui/auth/register';
import { buildNavBar } from '../../ui/dom/nav';

/**
 * Adds event listener to the register form to handle form submission.
 * When the form is submitted, it triggers the `onRegister` function.
 *
 * @description
 * Attaches a `submit`event listener to the register form, and when the for is submitted,
 * the `onRegister` function handles the register logic
 */

const form = document.forms.register;
form.addEventListener('submit', onRegister);

buildNavBar();
