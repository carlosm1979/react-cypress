import React from 'react';
import {Todo} from '../../models/types';

interface TodoListProps {
    items: Array<Todo>
}

export const TodoList = ({items}: TodoListProps) => {
    return (<>{items.map((i) => <>{i.caption}</>)}</>);
};