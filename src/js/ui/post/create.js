import { createPost } from '../../api/post/create';

/**
 *
 * @description
 * This function captures the form data (title, body, tags, and media) from the event target, processes it,
 * and submits it using the `createPost` function to create a new post. If successful, the post will be created;
 * otherwise, it logs and alerts the error.
 *
 * @async
 * @function onCreatePost
 * @param {Event} event
 * @returns {Promise<object>} A promise that on successful create post resolves form data.
 *
 * @example
 * const form = document.forms.createPost;
 * form.addEventListener("submit", onCreatePost);
 */

export async function onCreatePost(event) {
  event.preventDefault();

  const form = new FormData(event.target);

  const imageUrl = form.get('image');
  const altText = form.get('alt');

  const getForms = {
    title: form.get('postTitle'),
    body: form.get('postText'),
    tags: form.get('tags')
      ? form
          .get('tags')
          .split(', ')
          .map((tag) => tag.trim())
      : [],
    media: imageUrl || altText ? { url: imageUrl, alt: altText } : null,
  };

  try {
    await createPost(getForms);
  } catch (error) {
    console.error('Failed to create post:', error);
    alert('There was an error creating your post. Please try again.');
  }
}
