import { createElementParagraph } from '../ui/dom/domElements';

export function renderComments(comments) {
  const commentsContainer = document.getElementById('commentsContainer');

  if (!commentsContainer) {
    console.error('Comments container not found');
    return;
  }

  if (comments && comments.length > 0) {
    comments.forEach((comment) => {
      const commentElement = createElementParagraph({
        textContent: `${comment.author.name}: ${comment.body}`,
      });
      commentsContainer.append(commentElement);
    });
  } else {
    const noComments = createElementParagraph({
      textContent: 'No comments yet',
    });
    commentsContainer.append(noComments);
  }
}
