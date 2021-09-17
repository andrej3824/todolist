import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1',
    withCredentials: true,
    headers: {
        'API-KEY': '77b5659d-85ac-46a3-88e2-a77e18a50610'
    }
})

type TodoResType = {
    id: string
    addedDate: string
    order: number
    title: string
}

type CreateResponseType = {
    resultCode: number
    messages: Array<string>
    fieldsErrors: Array<string>
    data: {
        item: TodoResType
    }
}

type DeleteAndUpdateResType = {
    resultCode: number
    messages: Array<string>
    fieldsErrors: Array<string>
    data: {}
}

export const todolistApi = {
    getTodolists() {
        return instance.get<Array<TodoResType>>('/todo-lists',)
    },
    createTodo(title: string) {
        return instance.post<CreateResponseType>('/todo-lists', {title})
    },
    deleteTodo(todolistId: string) {
        return instance.delete<DeleteAndUpdateResType>(`/todo-lists/${todolistId}`)
    },
    updateTodoTitle(todolistId: string, title: string) {
        return instance.put<DeleteAndUpdateResType>(`/todo-lists/${todolistId}`, {title})
    }
}