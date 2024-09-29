import { onCreatePost } from '../../ui/post/create';
import { authGuard } from '../../utilities/authGuard';
import { setLogoutListener } from '../../ui/global/logout';
import { buildNavBar } from '../../ui/dom/nav';

/**
 * Adds event listener to the create post form to handle form submission.
 * When the form is submitted, it triggers the `onCreatePost` function.
 *
 * @description
 * Attaches a `submit` event listener to the create post form, and when the form is submitted,
 * the `onCreatePost` function handles the post creation logic.
 */

const form = document.forms.createPost;
form.addEventListener('submit', onCreatePost);

buildNavBar();
setLogoutListener();
authGuard();
