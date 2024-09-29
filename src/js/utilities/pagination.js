import { readPosts } from '../api/post/read';
import { renderSocialPosts } from '../ui/dom/socialPosts';

let currentPage = getCurrentPage() || 1;
const limit = 12;

const nextButton = document.getElementById('paginationNext');
const backButton = document.getElementById('paginationBack');
const firstPageButton = document.getElementById('paginationFirstPage');
const lastPageButton = document.getElementById('paginationLastPage');

nextButton.addEventListener('click', async () => {
  currentPage++;
  await loadPosts();
});

backButton.addEventListener('click', async () => {
  currentPage--;
  await loadPosts();
});

firstPageButton.addEventListener('click', async () => {
  currentPage = 1;
  await loadPosts();
});

lastPageButton.addEventListener('click', async () => {
  const { meta } = await readPosts(limit, currentPage);
  currentPage = meta.pageCount;
  await loadPosts();
});

export async function loadPosts() {
  try {
    const { posts, meta } = await readPosts(limit, currentPage);

    if (posts && posts.length > 0) {
      renderSocialPosts(posts);
      showPageInfo(meta.currentPage, meta.pageCount, meta.totalCount);

      nextButton.style.display = meta.isLastPage ? 'none' : 'block';
      backButton.style.display = meta.isFirstPage ? 'none' : 'block';
      firstPageButton.style.display = meta.isFirstPage ? 'none' : 'block';
      lastPageButton.style.display = meta.isLastPage ? 'none' : 'block';

      updateUrl();
    } else {
      console.warn('No posts found for the current page');
    }
  } catch (error) {
    console.error('Error loading posts: ', error);
  }
}

function showPageInfo(currentPage, totalPages, totalCount) {
  const pageInfoElement = document.getElementById('pageInfo');
  if (pageInfoElement) {
    pageInfoElement.textContent = `Page ${currentPage} of ${totalPages} - Total Posts: ${totalCount}`;
  } else {
    console.error('No page info element found.');
  }
}

function updateUrl() {
  history.pushState(null, '', `?page=${currentPage}`);
}

function getCurrentPage() {
  const params = new URLSearchParams(window.location.search);
  return parseInt(params.get('page'), 10);
}
