import { API_SOCIAL_POSTS } from '../constants';
import { headers } from '../headers';

/**
 *
 * @description
 * Updates a post by sending a `PUT` request with the provided details
 *
 * This function attempts to update a post with the provided title, body, tags and media.
 * If successful, it redirects the user to the newly updated post.
 * If update fails, it will display an alert message.
 *
 * @async
 * @function updatePost
 * @param {number} id - The ID of the post to be updated.
 * @param {Object} details - The details to update the post with.
 * @param {string} details.title - Title of the post.
 * @param {string} details.body - The content text of the post.
 * @param {string[]} details.tags - An array of tags associated with the post.
 * @param {object|null} details.media - An object containing `url` and `alt` for the post, or null if empty.
 * @param {string} details.media.url - The URL to the media ( image, gif, etc ) for the post.
 * @param {string} details.media.alt - The alt text for the media.
 * @returns {Promise<object>} A promise that resolves with the response data on successful update post.
 *
 * @example
 * // Example usage of the updatePost function
 *
 * const postId = '123'; // Replace with the actual post ID
 * try {
 *   const updatedPostData = await updatePost(postId, {
 *     title: 'Updated Post Title',
 *     body: 'This is the updated content of the post.',
 *     tags: ['tag1', 'tag2'],
 *     media: {
 *       url: 'https://example.com/updated-image.jpg',
 *       alt: 'An updated example image'
 *     }
 *   });
 *   console.log('Post updated successfully:', updatedPostData);
 * } catch (error) {
 *   console.error('Failed to update post:', error);
 * }
 */

export async function updatePost(id, { title, body, tags, media }) {
  id = new URLSearchParams(window.location.search).get('id');

  try {
    const response = await fetch(`${API_SOCIAL_POSTS}/${id}`, {
      method: 'PUT',
      headers: headers(),
      body: JSON.stringify({ title, body, tags, media }),
    });

    if (!response.ok) {
      alert('Failed to update post');
    } else {
      alert('Post successfully updated');
      window.location.href = `/post/?id=${id}`;
      const data = await response.json();
      return data;
    }
  } catch (error) {
    console.error('Failed to update the post:', error);
  }
}
