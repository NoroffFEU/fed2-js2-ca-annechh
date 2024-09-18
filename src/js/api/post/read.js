import { API_SOCIAL_POSTS } from "../constants";
import { renderSocialPosts } from "../../ui/dom/socialPosts";
import { headers } from "../headers";

let currentPage = 1;
const limit = 12;




const nextButton = document.getElementById('paginationNext');
    nextButton.addEventListener('click', async () => {
        console.log('clicked');
        
        currentPage++;
        loadPosts()
    });
    
const backButton = document.getElementById('paginationBack');
    backButton.addEventListener('click', async () => {
        console.log('clicked');
        
        currentPage--;
        loadPosts()
    });

const firstPageButton = document.getElementById('paginationFirstPage');
    firstPageButton.addEventListener('click', async () => {
        console.log('click');
        
    })

const lastPageButton = document.getElementById('paginationLastPage');
    lastPageButton.addEventListener('click', async () => {

    })




async function loadPosts() {
    try {
        const { posts, meta } = await readPosts(limit, currentPage);
        if (posts && posts.length > 0) {
            renderSocialPosts(posts);
            showPageInfo(meta.currentPage, meta.pageCount, meta.totalCount);

            // const nextButton = document.getElementById('paginationNext');
            // const backButton = document.getElementById('paginationBack');
            
            nextButton.style.display = meta.isLastPage ? 'none' : 'block';
            backButton.style.display = meta.isFirstPage ? 'none' : 'block';
            
            firstPageButton.style.display = meta.isFirstPage ? 'none' : 'block';
            lastPageButton.style.display = meta.isLastPage ? 'none' : 'block';
        } 
    } catch (error) {
        console.error('Error loading posts: ', error);
    }
}

loadPosts()


function showPageInfo(currentPage, totalPages, totalCount) {
    const pageInfoElement = document.getElementById('pageInfo');
    if (pageInfoElement) {
        pageInfoElement.textContent = `Page ${currentPage} of ${totalPages} - Total Posts: ${totalCount}`;
    } else {
        console.error('No page info element found.');
    }
}



// export async function readPost(id) {

// }


function buildQueryParams(limit, page, tag) {
    const queryParams = new URLSearchParams({
        limit: limit.toString(),
        page: page.toString(),
    });
    if (tag) {
        queryParams.append('tag', tag)
    }
    return queryParams.toString();
}



export async function readPosts(limit = 12, page = 1, tag) {
    
    try {
        const queryString = buildQueryParams(limit, page, tag)
        
        const response = await fetch(`${API_SOCIAL_POSTS}?${queryString}`, {
            method: 'GET',
            headers: headers(),
        })
        
        if (response.ok) {
            const data = await response.json();
            const posts = data.data;
            const meta = data.meta;

            console.log('POSTS: ', posts);
            console.log('META: ',meta);
            

            return {posts, meta};
        }
    
    } catch (error) {
        alert('Error loading social posts')
    }
}

export async function readPostsByUser(username, limit = 12, page = 1, tag) {}
