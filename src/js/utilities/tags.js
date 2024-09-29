export function formatTags(tags) {
  if (!tags || tags.length === 0) return '';

  return tags
    .map((tag) => tag.trim().toLowerCase())
    .map((tag) => tag.charAt(0).toUpperCase() + tag.slice(1))
    .join(', ');
}
