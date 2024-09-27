import { API_SOCIAL_POSTS } from "../constants";
import { headers } from "../headers";




export async function deletePost() {
    const id = new URLSearchParams(window.location.search).get('id');
    try {
        const response = await fetch(`${API_SOCIAL_POSTS}/${id}`, {
            method: 'DELETE',
            headers: headers()
        });

        if (!response.ok) {
            const errorMessage = await response.text();
            console.error('Failed to delete post:', errorMessage);
            return false;
        } else {
            alert('Post successfully deleted! Redirecting you to home page');
            window.location.href = '/'
        }
    } catch (error) {
        console.error('Error deleting post:', error);
        return false;
    }
}


