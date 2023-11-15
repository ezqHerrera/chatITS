const API_URL = 'http://localhost:3000/api/posts';
const ID_URL = 'http://localhost:3000/api/posts/:id';

export async function getPosts() {
    const resp = await fetch(API_URL);
    return resp.json();
}

export async function createPost() {
    const resp = await fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify(data)
    });

    return resp.json();
}

export async function updatePost(id, data) {
    const url = ID_URL.replace(':id', id);
    const resp = await fetch(url, {
        method: 'PUT',
        body: JSON.stringify(data)
    });
    return resp.json();
}

export async function deletePost(id) {
    const url = ID_URL.replace(':id', id);
    const resp = await fetch(url, {
        method: 'DELETE'
    });

    return resp;
}

const USER_ID_URL = 'http://localhost:3000/api/users/:id';

export async function getUserById(id) {
    const url = USER_ID_URL.replace(':id', id);
    const resp = await fetch(url);
    return resp.json();
}

export async function Login() {
    const resp = await fetch('http://localhost:3000/login', {
        method: 'POST',
        body: JSON.stringify(data)
    });
    return resp.json();
}