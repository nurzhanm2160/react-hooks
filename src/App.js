import React, {useCallback, useState} from 'react';
import useInput from "./hooks/useInput";
import Hover from "./components/Hover";
import List from "./components/List";
import useDebounce from "./hooks/useDebounce";
import axios from "axios";
import useRequest from "./hooks/useRequest";

const App = () => {
    const [todos, isLoading, error] = useRequest(fetchTodos)

    function fetchTodos() {
        return axios.get(`https://jsonplaceholder.typicode.com/todos`)
    }

    if(isLoading) {
        return <h1>Идет загрузка...</h1>
    }

    if(error) {
        return <h1>Произошла ошибка при загрузку данных</h1>
    }

    return (
        <div>
            {todos && todos.map(todo =>
                <div key={todo.id} style={{padding: 30, border: '2px solid black'}}>
                    {todo.id}. {todo.title}
                </div>
            )}
        </div>
    );
};

export default App;