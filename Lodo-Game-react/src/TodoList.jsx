import { useState } from "react";
import {v4 as uuidv4} from 'uuid';

export default function TodoList() {
    let [todos, setTodos] = useState([{task: "sample task", id: uuidv4()}]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () => {
        // console.log("we have to add new task in todo")
        setTodos((prevTodos) => {
            return [...prevTodos, { task: newTodo, id:uuidv4() }]
        });
        setNewTodo("");
    }

    let updateTodoValue = (event) => {
    // console.log(event.target.value);
    setNewTodo(event.target.value);
    };
     
    //deleting todo
    let deleteTodo = (id) => {
        setTodos ((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id));
    }
    // updating todo
    let upperCaseAll = () => {
        setTodos((prevTodos) => {
            return todos.map((todo) => {
                return {...todo, task: todo.task.toUpperCase()}
            })
        })
    }

    //updating todo
    let upperCaseOne = (id) => {
        setTodos((prevTodos) => 
            prevTodos.map((todo) => {
                if (todo.id == id) {
                    return {...todo, task: todo.task.toUpperCase(),
                    };
                }else {
                    return todo;
                }
            })  
        );
    }
 
    return (
        <div>
            <input placeholder="add a task" value={newTodo} onChange={updateTodoValue}></input>
            <br></br>
            <br></br>
            <button onClick={addNewTask} >Add task</button>
            
            <br></br>
            <br></br>
            <br></br>
            
            <hr/>
           <h4>Task Todo</h4>
           <ul>
            {
                todos.map((todo) => (
                    <li key={todo.id}>
                       <span> {todo.task} </span>
                       &nbsp;&nbsp;&nbsp;
                       <button onClick= { () => deleteTodo(todo.id)}> delete</button>
                       <button onClick= { () => upperCaseOne(todo.id)}> UpperCase One</button>
                    </li>
                ))}       
           </ul>

           <button onClick={upperCaseAll}>UpperCase All</button>
        </div>
    );
}