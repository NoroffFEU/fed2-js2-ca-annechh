// Use Postman, or JavaScript to get your API key
// In Workflow we will learn how to secure this information
export const API_KEY = '7166711d-5e4e-46d3-8962-1865ce75a3e2';

export const API_BASE = 'https://v2.api.noroff.dev';

export const API_AUTH = `${API_BASE}/auth`;

export const API_AUTH_LOGIN = `${API_AUTH}/login`;

export const API_AUTH_REGISTER = `${API_AUTH}/register`;

export const API_AUTH_KEY = `${API_AUTH}/create-api-key`;

export const API_SOCIAL = `${API_BASE}/social`;

export const API_SOCIAL_POSTS = `${API_SOCIAL}/posts`;

export const API_SOCIAL_PROFILES = `${API_SOCIAL}/profiles`;

export const accessToken = localStorage.getItem('accessToken');

export const userData = JSON.parse(localStorage.getItem('userData'));

export const DISPLAY_BLOCK = localStorage.accessToken ? 'block' : 'none';

export const DISPLAY_NONE = localStorage.accessToken ? 'none' : 'block';
