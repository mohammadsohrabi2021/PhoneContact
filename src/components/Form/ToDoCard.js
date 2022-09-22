import React from 'react';
import { useState, useRef } from "react";
import Styles from "./ToDoCard.module.css";
import Dialog from './Dialog';
import Search from '../Search/Search';
import Card from './Card';
const ToDoCard = ({ todo, todos, setTodos, setFormStatus, setForm }) => {
    const [dialog, setDialog] = useState({
        message: "",
        isLoading: false,
        //Update
        nameProduct: ""
    });
    const idProductRef = useRef();
    const handleDialog = (message, isLoading, nameProduct) => {
        setDialog({
            message,
            isLoading,
            //Update
            nameProduct
        });
    };



    const handeleDelete = user => {
      
        const index = todos.findIndex((todo) => todo.user === user);
        handleDialog("Are you sure you want to delete?", true, todos[index].name);
        idProductRef.current = user;
    }
    const areUSureDelete = (choose) => {
        if (choose) {
               setTodos(todos.filter(todo => todo.user !== idProductRef.current))
            handleDialog("", false);
        } else {
            handleDialog("", false);
        }
    };

    const handelCheck = user => {
        setTodos(todos.map(todo => todo.user === user ? { ...todo, state: !todo.state } : todo))
    }
    const handleUpdate = todo => {
        setFormStatus('upDate')
        setForm(todo)
    }
    // -------------
    const[search , setSearch]=useState('')
     const handleSearch = e =>{
        setSearch(e.target.value)
     }
    return (
        <div class="card my-4" className={Styles.container}>
           <Search handleSearch={handleSearch} search={search}/>
            {todos.filter(todo => todo.name.toUpperCase().includes(search.toUpperCase())) .map(todo => (
            <Card todo={todo} Styles={Styles} handelCheck={handelCheck} handeleDelete={handeleDelete} handleUpdate={handleUpdate}/>
        ))} 
            {dialog.isLoading && (
                <Dialog
                    //Update
                    nameProduct={dialog.nameProduct}
                    onDialog={areUSureDelete}
                    message={dialog.message}
                />
            )}
        </div>
    );
};

export default ToDoCard;