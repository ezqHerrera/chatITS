const API_URL = 'http://localhost:3000/api/posts';
const ID_URL = 'http://localhost:3000/api/posts/:id';

export async function getPosts() {
    const resp = await fetch(API_URL);
    return resp.json();
}

export async function createPost() {
    const token = localStorage.getItem('token');
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    };

    const resp = await fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: headers
    });

    return resp.json();
}

export async function updatePost(id, data) {
    const token = localStorage.getItem('token');
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    };

    const url = ID_URL.replace(':id', id);
    const resp = await fetch(url, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: headers
    });
    return resp.json();
}

export async function deletePost(id) {
    const token = localStorage.getItem('token');
    const headers = {
        'Authorization': `Bearer ${token}`
    };

    const url = ID_URL.replace(':id', id);
    const resp = await fetch(url, {
        method: 'DELETE',
        headers: headers
    });

    return resp;
}

const USER_ID_URL = 'http://localhost:3000/api/users/:id';

export async function getUsers() {
    const resp = await fetch('http://localhost:3000/api/users');
    return resp.json();
}

export async function getUserById(id) {
    const url = USER_ID_URL.replace(':id', id);
    const resp = await fetch(url);
    return resp.json();
}

export async function Login(data) {
    const resp = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        body: JSON.stringify(data)
    });
    const respData = await resp.json();
    const token = respData.token;
    localStorage.setItem('token', token);
    const respDataWithToken = {
        ...respData,
        token
    };
    return respDataWithToken;
}

export async function Register(data) {
    const resp = await fetch('http://localhost:3000/auth/register', {
        method: 'POST',
        body: JSON.stringify(data)
    });
    const respData = await resp.json();
    const token = respData.token;
    localStorage.setItem('token', token);
    const respDataWithToken = {
        ...respData,
        token
    };
    return respDataWithToken;
}