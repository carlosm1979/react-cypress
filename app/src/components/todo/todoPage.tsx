import axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react'
import { Todo } from '../../models/types'
import { TodoList } from './todoList'
import './todoPage.css'
export const TodoPage = () => {
    const [todoList, setTodoList] = useState<Array<Todo>>([])
    useEffect(() => {
        axios.get('http://www.miapi.com/todos').then(response => {
            console.log(response)
            setTodoList(response.data)
        })
    }, [])

    return (<div>
        <h1 className='header' >Todo's</h1>
        <TodoList items={todoList} /></div>)
}