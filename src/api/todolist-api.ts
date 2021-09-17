import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1',
    withCredentials: true,
    headers: {
        'API-KEY': '77b5659d-85ac-46a3-88e2-a77e18a50610'
    }
})

type TodoType = {
    id: string
    addedDate: string
    order: number
    title: string
}

type CreateType = {
    id: string
    addedDate: string
    order: number
    title: string
}

export const todolistApi = {
    getTodolists() {
        return instance.get<Array<TodoType>>('/todo-lists',)
    },
    createTodo(title: string) {
        return instance.post<Array<CreateType>>('/todo-lists', {title})
    },
    deleteTodo(todolistId: string) {
        return instance.delete(`/todo-lists/${todolistId}`)
    },
    updateTodoTitle(todolistId: string, title: string) {
        return instance.put(`/todo-lists/${todolistId}`, {title})
    }
}