import { API_SOCIAL_POSTS } from '../constants';
import { headers } from '../headers';

/**
 *
 * @description
 * Creates a new post by sending a `POST` request with the provided details
 *
 * This function attempts to create a new post with the provided title, body, tags and media.
 * If successful, it redirects the user to the newly created post.
 * If create fails, it will display an alert message.
 *
 * @async
 * @function createPost
 * @param {Object} details
 * @param {string} details.title - Title of the post.
 * @param {string} details.body - The content text of the post.
 * @param {string[]} details.tags - An array of tags associated with the post.
 * @param {object|null} details.media - An object containing `url` and `alt` for the post, or null if empty.
 * @param {string} details.media.url - The URL to the media ( image, gif, etc ) for the post.
 * @param {string} details.media.alt - The alt text for the media.
 * @returns {Promise<object>} A promise that resolves with the response data on successful create post.
 *
 * @example
 *
 * // Example usage of the createPost function
 *
 *   try {
 *     const postData = await createPost({
 *       title: 'New Post Title',
 *       body: 'This is the content of the post.',
 *       tags: ['tag1', 'tag2'],
 *       media: {
 *         url: 'https://example.com/image.jpg',
 *         alt: 'An example image'
 *       }
 *     });
 *     console.log('Post created successfully:', postData);
 *   } catch (error) {
 *     console.error('Failed to create post:', error);
 *   }
 */

export async function createPost({ title, body, tags, media }) {
  try {
    const response = await fetch(API_SOCIAL_POSTS, {
      method: 'POST',
      headers: headers(),
      body: JSON.stringify({ title, body, tags, media }),
    });
    if (!response.ok) {
      alert('Failed to create post');
    } else {
      const data = await response.json();
      alert('Successfully created new post, redirecting you to the post');
      window.location.href = `/post/?id=${data.data.id}`;
      return data;
    }
  } catch (error) {
    alert('Failed to create new post');
  }
}
