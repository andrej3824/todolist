import React, {useEffect, useState} from 'react'
import axios from "axios";

export default {
    title: 'API'
}

const settings = {
    withCredentials: true,
    headers: {
        'API-KEY': '77b5659d-85ac-46a3-88e2-a77e18a50610'
    }
}

export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)

    useEffect(() => {

        let promise = axios.get("https://social-network.samuraijs.com/api/1.1/todo-lists", {
            withCredentials: true
        })
        promise.then((res) => {
            let todos = res.data
            setState(todos)
        })

    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const title = 'REACT'

        let promise = axios.post('https://social-network.samuraijs.com/api/1.1/todo-lists', {title}, {
            withCredentials: true,
            headers: {
                'API-KEY': '77b5659d-85ac-46a3-88e2-a77e18a50610'
            }
        })
        promise.then((res) => {
            setState(res.data)
        })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
