import { cleanup } from '@testing-library/react'
import React from 'react'
import Todo from './components/testfile/Todo'


export default function App_test() {
    const todos = [
        {id:1, title:'wash dishes', completed:false,},
        {id:2, title:'wash cloths', completed:true,},
    ]
    return (
        <div className="App">
            {todos.map((todo) =>{
                return (<Todo todo={todo}/>)
            })}
        </div>
    )
}
