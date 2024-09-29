import { deletePost } from '../../api/post/delete';

/**
 *
 * @description
 * Handles the deletion of a post asking the user to confirm og cancel deletion.
 *
 * This function displays a confirmation dialog to the user. If the user confirms
 * the deletion, it calls the `deletePost` function with the specified post ID.
 * If the user cancels the action the post will not be deleted.
 *
 * @async
 * @function onDeletePost
 * @param {number} id - The ID of the post to be deleted
 * @returns {Promise<void>} A Promise that resolves when the delete action is confirmed and processed
 */

export async function onDeletePost(id) {
  const confirmDelete = confirm('Are you sure you want to delete this post?');

  if (confirmDelete) {
    await deletePost(id);
  }
}
