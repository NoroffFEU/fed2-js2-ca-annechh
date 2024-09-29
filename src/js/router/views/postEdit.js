import { authGuard } from '../../utilities/authGuard';
import { setLogoutListener } from '../../ui/global/logout';
import { onUpdatePost } from '../../ui/post/update';
import { readSinglePost } from '../../api/post/read';
import { buildNavBar } from '../../ui/dom/nav';

/**
 * Fetches the data for a single post and populates the form fields with the retrieved information.
 *
 * @async
 * @function viewFormData
 * @returns {Promise<void>} A promise that resolves when the form fields have been populated with the post data.
 *
 * @description
 * This function calls `readSinglePost` to get the details of a specific post.
 * If the post data is successfully retrieved, it populates the form fields for
 * title, body, tags, and media with the respective values from the post object.
 * If any field is missing, it sets the corresponding form field to an empty string.
 */

async function viewFormData() {
  const post = await readSinglePost();

  if (post) {
    document.getElementById('postTitle').value = post.title || '';
    document.getElementById('postText').value = post.body || '';
    document.getElementById('tags').value = post.tags
      ? post.tags.join(', ')
      : '';
    document.getElementById('imageUrl').value = post.media?.url || '';
    document.getElementById('imageAlt').value = post.media?.alt || '';
  }
}

/**
 * Adds event listener to the edit post form to handle form submission.
 * When the form is submitted, it triggers the `onUpdatePost` function.
 *
 * @description
 * Attaches a `submit` event listener to the edit post form, and when the form is submitted,
 * the `onUpdatePost` function handles the post update logic.
 */

const form = document.forms.editPost;
form.addEventListener('submit', onUpdatePost);

buildNavBar();
setLogoutListener();
authGuard();
await viewFormData();
