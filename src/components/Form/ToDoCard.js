import React from 'react';
import { useState, useRef } from "react";
import Styles from "./ToDoCard.module.css";

import Dialog from './Dialog';
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
    return (
        <div class="card my-4" className={Styles.container}>
            <div class="row g-0">
                <div className={Styles.Avatar} >
                  <img src={`https://avatars.dicebear.com/api/avataaars/:${todo.user}.svg`}/>
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <div class="card">
                            <div className={Styles.Card}>
                                <div class='LongHairFroBand' className={Styles.itemCard}>
                                    <h5>user:{todo.user}</h5>
                                </div>
                                <div class="card-body" className={Styles.itemCard}>
                                    <h5>name : {todo.name}</h5>
                                </div>
                                <div class="card-body" className={Styles.itemCard}>
                                    <h5>lastName:{todo.lastName}</h5>
                                </div>
                                <div class="card-body" className={Styles.itemCard}>
                                    <h5> phone:{todo.phone}</h5>
                                </div>
                                <div class="card-body" className={Styles.itemCard} onClick={() => handelCheck(todo.user)} style={{ cursor: 'pointer' }}>
                                    <h5>state:{todo.state ? ' Inactive ' : ' active '}</h5>
                                </div>
                                <div class="card-body" className={Styles.itemCard}>
                                    <h5>age:{todo.age}</h5>
                                </div>
                                <div class="card-body" className={Styles.itemCard}>
                                    <h5> Country:{todo.Country}</h5>
                                </div>
                                <div class="card-body" className={Styles.itemCard}>
                                    <h5>City:{todo.City}</h5>
                                </div>
                                <div class="card-body" className={Styles.itemCard}>
                                    <h5> Email:<br />{todo.email}</h5>
                                </div>
                                <div className={Styles.button}>
                                    <button class=" btn btn-danger my-3" onClick={() => handeleDelete(todo.user)}>
                                        delete
                                    </button>
                                    <button class="btn btn-primary m-3" onClick={() => handleUpdate(todo)}>
                                        upDate
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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