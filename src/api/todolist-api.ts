import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1',
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
    getTodolists() {
        return instance.get<Array<TodoResType>>('/todo-lists',)
    },
    createTodo(title: string) {
        return instance.post<CommonResponseType<{item: TodoResType}>>('/todo-lists', {title})
    },
    deleteTodo(todolistId: string) {
        return instance.delete<CommonResponseType<{}>>(`/todo-lists/${todolistId}`)
    },
    updateTodoTitle(todolistId: string, title: string) {
        return instance.put<CommonResponseType<{}>>(`/todo-lists/${todolistId}`, {title})
    }
}