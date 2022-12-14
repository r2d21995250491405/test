import { authorisation } from "./store/AuthUser";
import { filterState } from "./store/TasksList";
import { ITask } from "./store/UserTask"

const HOST = 'http://localhost:3000';


async function authorizedRequest(url: string, method: string, body?: string) {

    const response = await fetch(`${HOST}${url}`, {
        method: method,
        headers: {
            'Content-Type': 'application/json',
            'jwt': `${localStorage.getItem('token')}`
        }, body: body
    })

    if (response.status == 401) {
        authorisation.cancelAuth();
    }
    return response;
}

export const getTasks = async (filter: filterState): Promise<ITask[]> => {
    let val = '';
    switch (filter) {
        case filterState.ALL:
            break;
        case filterState.UNDONE: val = '?done=false'
            break;
        case filterState.DONE: val = '?done=true'
            break;
    }

    const response = await authorizedRequest(`/todos${val}`, 'GET')

    return response.json();
}

export const createTask = async (input: string) => {

    const response = await authorizedRequest('/todos', 'POST', JSON.stringify({ title: input, done: false }))

    return response.json();

}

export const deleteTask = async (id: number) => {

    const response = await authorizedRequest(`/todos/${id}`, 'DELETE')

}


export const updateTask = async (id: number, done: boolean) => {

    const response = await authorizedRequest(`/todos/${id}`, 'PATCH', JSON.stringify({ done: done }))

    return response.json();
}
export const authorize = async (login: string, password: string) => {
    const obj = { login: login, password: password }
    const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },

        body: JSON.stringify(obj)
    })

    const { token } = await response.json()

    if (token) {
        authorisation.setAuth(token);
    } else {
        alert('Неправильно введен логин или пароль, повторите попытку')
    }
}





