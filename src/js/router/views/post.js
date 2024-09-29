import { buildSinglePost } from '../../ui/dom/singlePost';
import { readSinglePost } from '../../api/post/read';
import { setLogoutListener } from '../../ui/global/logout';
import { buildNavBar } from '../../ui/dom/nav';

/**
 *
 * @description
 * Loads a single post and renders it on the page.
 *
 * This function fetches the post data using the `readSinglePost` function
 * and then builds the post's UI by calling the `buildSinglePost` function.
 *
 * @async
 * @function loadSinglePost
 * @returns {Promise<void>} A promise that resolves when the post is loaded and rendered
 *
 */

async function loadSinglePost() {
  const post = await readSinglePost();
  buildSinglePost(post);
}

buildNavBar();
loadSinglePost();
setLogoutListener();
