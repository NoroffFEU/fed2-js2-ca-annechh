import { hideLoader, showLoader } from '../../utilities/loader';
import { API_SOCIAL_POSTS } from '../constants';
import { headers } from '../headers';

/**
 * @description
 * Fetches a single post by sending a `GET` request to get single post based on its ID
 *
 * Retrieves the post ID from the URL parameters, sends a request to fetch the
 * post details, and includes author and comments in the response. If the
 * request fails, it alerts the user.
 *
 * @async
 * @function readSinglePost
 * @returns {Promise<object|null>}
 *
 * @example
 * * // Example usage of the readSinglePost function
 * const post = await readSinglePost();
 * if (post) {
 *   console.log('Post loaded:', post);
 * } else {
 *   console.log('Post not found.');
 * }
 */

export async function readSinglePost() {
  const id = new URLSearchParams(window.location.search).get('id');

  showLoader();
  try {
    const response = await fetch(
      `${API_SOCIAL_POSTS}/${id}?_author=true&_comments=true`,
      {
        method: 'GET',
        headers: headers(),
      }
    );

    if (response.ok) {
      const data = await response.json();
      const post = data.data;
      return post;
    }
  } catch (error) {
    alert('failed to load single post');
  } finally {
    hideLoader();
  }
}

/**
 *
 * @description
 * Constructs the query parameters for fetching social posts based on limit, page, tag, and author.
 *
 * This function builds a query string to be appended to the API request URL, using the provided
 * parameters such as limit, page number, and optional tag. The function ensures that the query
 * parameters are formatted correctly for the API call.
 *
 * @function buildQueryParams
 * @param {number} [limit=12] - The number of posts to retrieve per page (default is 12).
 * @param {number} [page=1] - The page number to retrieve (default is 1).
 * @param {string} [tag] - Optional tag filter for posts.
 * @param {boolean} [_author=true] - Whether to include author information in the response.
 * @returns {string} A string of URL query parameters for the API request.
 *
 * @example
 * // Example usage
 * const query = buildQueryParams(10, 2, 'tech', true);
 * console.log(query); // "limit=10&page=2&_author=true&tag=tech"
 */

function buildQueryParams(limit = 12, page = 1, tag, _author) {
  const queryParams = new URLSearchParams({
    limit: limit.toString(),
    page: page.toString(),
    _author: true,
  });
  if (tag) {
    queryParams.append('tag', tag);
  }
  return queryParams.toString();
}

/**
 *
 * @description
 * Fetches social posts from the API with optional query parameters such as limit, page, tag, and author.
 *
 * This function retrieves a paginated list of social posts from the server, including optional filters for tags
 * and author information. It returns the posts and associated metadata if successful.
 *
 * @async
 * @function readPosts
 * @param {number} limit - The number of posts to retrieve per page.
 * @param {number} page - The page number to retrieve.
 * @param {string} [tag] - Optional tag filter to retrieve posts associated with a specific tag.
 * @param {boolean} [_author=true] - Whether to include author information in the response (default is true).
 * @returns {Promise<object>} A promise that resolves with the posts and metadata.
 *
 * @example
 * // Example usage of readPosts function
 * const { posts, meta } = await readPosts(10, 2, 'tech', true);
 * console.log(posts); // Array of social post objects
 * console.log(meta);  // Pagination metadata
 */

export async function readPosts(limit, page, tag, _author) {
  showLoader();
  try {
    const queryParam = buildQueryParams(limit, page, tag, _author);

    const response = await fetch(`${API_SOCIAL_POSTS}?${queryParam}`, {
      method: 'GET',
      headers: headers(),
    });

    if (!response.ok) {
      alert('Could not get social posts');
    } else {
      const data = await response.json();
      const posts = data.data;
      const meta = data.meta;

      return { posts, meta };
    }
  } catch (error) {
    alert('Error loading social posts');
  } finally {
    hideLoader();
  }
}

export async function readPostsByUser(username, limit = 12, page = 1, tag) {}
