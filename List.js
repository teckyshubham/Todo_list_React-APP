import React, { useContext } from 'react';
import ListItem from './ListItem';
// import ListItem from './ListItem';
import { DataContext } from './DataProvider';;

export default function List() {
    const [todos, setTodos] = useContext(DataContext);
    // console.log(todos)
    const switchComplete = id => {
        const newTodos = [...todos]
        newTodos.forEach((todo, index) => {
            if (index === id) {
                todo.checkComplete = !todo.checkComplete
            }
        })
        setTodos(newTodos);
    }

    const hadleEditTodos = (editvalue, id) => {
        const newTodos = [...todos]
        newTodos.forEach((todo, index) => {
            if (index === id) {
                todo.name = editvalue;
            }
        })
        setTodos(newTodos);
    }
    return <div >
        <
        ul > {
            todos.map((todo, index) => ( <
                ListItem todos = { todo }
                key = { index }
                id = { index }
                checkComplete = { switchComplete }
                hadleEditTodos = { hadleEditTodos }
                />
            ))
        } <
        /ul> <
        /div>;
}