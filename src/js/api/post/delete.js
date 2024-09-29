import { API_SOCIAL_POSTS } from '../constants';
import { headers } from '../headers';

/**
 *
 * @description
 * Deletes a post by sending a `DELETE` request to the server.
 *
 * This function retrieves the posts ID from URL parameter and sends the `DELETE` request to server to remove the post.
 * If delete is successful, it removes the post and sends the user to home page.
 *
 * @async
 * @function deletePost
 * @returns {Promise<void>} A promise that resolves when post is successfully deleted
 */

export async function deletePost() {
  const id = new URLSearchParams(window.location.search).get('id');
  try {
    const response = await fetch(`${API_SOCIAL_POSTS}/${id}`, {
      method: 'DELETE',
      headers: headers(),
    });

    if (!response.ok) {
      const errorMessage = await response.text();
      console.error('Failed to delete post:', errorMessage);
      return false;
    } else {
      alert('Post successfully deleted! Redirecting you to home page');
      window.location.href = '/';
    }
  } catch (error) {
    console.error('Error deleting post:', error);
    return false;
  }
}
