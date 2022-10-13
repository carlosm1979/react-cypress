import React from 'react';
import {Todo} from '../../models/types';
import './todoList.css'
interface TodoListProps {
    items: Array<Todo>
}

export const TodoList = ({items}: TodoListProps) => {
    return (<>{items.map((i) => <div className='list-item'>{i.caption}</div>)}</>);
};