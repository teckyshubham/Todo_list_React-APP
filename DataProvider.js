import React, { useEffect, useState, createContext } from 'react';

export const DataContext = createContext();
export const DataProvider = (props) => {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        localStorage.setItem('todoStorage', JSON.stringify(todos))
    }, [todos])

    useEffect(() => {
        const todoStore = JSON.parse(localStorage.getItem('todoStore'))
        if (todoStore) setTodos(todoStore)
    }, [])

    return ( <
        DataContext.Provider value = {
            [todos, setTodos] } > { props.children } <
        /DataContext.Provider>
    )
};