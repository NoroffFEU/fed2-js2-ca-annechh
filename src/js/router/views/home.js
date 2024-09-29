import { setLogoutListener } from '../../ui/global/logout';
import { authGuard } from '../../utilities/authGuard';
import { buildNavBar } from '../../ui/dom/nav';
import { loadPosts } from '../../utilities/pagination';

/**
 * @description
 * Loads the homepage by verifying user authentication, fetching posts,
 * and setting up the navigation bar and logout listener.
 *
 * This function checks if the user is authenticated through `authGuard()`. If authenticated, it proceeds to
 * load posts, build the navigation bar, and set up a logout listener for user interaction.
 *
 * @async
 * @function loadHomePage
 * @returns {Promise<void>} A promise that resolves when the homepage has been fully loaded.
 *
 */

async function loadHomePage() {
  if (!authGuard()) {
    return;
  }
  await loadPosts();
  buildNavBar();
  setLogoutListener();
}

loadHomePage();
