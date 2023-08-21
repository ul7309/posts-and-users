const API_ROOT = 'https://jsonplaceholder.typicode.com/';

const ROUTES = {
  POSTS: 'posts',
  USERS: 'users'
}

const transformUrl = (params) => {
  const query = new URLSearchParams(params);
  return query ? `?${query}` : '';
}

export const fetchUsers = (params = {}) => 
  fetch(`${API_ROOT}${ROUTES.USERS}${transformUrl(params)}`)
    .then(response => response.json())
    .catch(error => console.log(error));

export const fetchPosts = (params = {}) => 
  fetch(`${API_ROOT}${ROUTES.POSTS}${transformUrl(params)}`)
    .then(response => response.json())
    .catch(error => console.log(error));

