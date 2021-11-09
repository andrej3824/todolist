import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    headers: {
        'API-KEY': '77b5659d-85ac-46a3-88e2-a77e18a50610'
    }
})

type CommonResponseType<T> = {
    resultCode: number
    messages: Array<string>
    fieldsErrors: Array<string>
    data: T
}

type TodoResType = {
    id: string
    addedDate: string
    order: number
    title: string
}

export const todolistApi = {
    getTodo() {
        return instance.get("todo-lists")
    },
    createTodo(title: string) {
        return instance.post('todo-lists', {title})
    },
    deleteTodo(todolistId: string) {
        return instance.delete(`todo-lists/${todolistId}`)
    },
    updateTodoTitle(todolistId: string, title: string) {
        return instance.put(`todo-lists/${todolistId}`, {title})
    }
}






















