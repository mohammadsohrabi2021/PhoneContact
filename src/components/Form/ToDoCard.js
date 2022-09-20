import React from 'react';
import Styles from "./ToDoCard.module.css"
const ToDoCard = ({ todo, todos, setTodos, setFormStatus, setForm }) => {
    const handeleDelete = user => {
        setTodos(todos.filter(todo => todo.user !== user))
    }
    const handelCheck = user => {
        setTodos(todos.map(todo => todo.user === user ? { ...todo, state: !todo.state } : todo))
    }
    const handleUpdate = todo => {
        setFormStatus('upDate')
        setForm(todo)
    }
    return (
        <div class="card" className={Styles.container}>
            <div className={Styles.Card}>
                <div class="card-body" className={Styles.itemCard}>
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
    );
};

export default ToDoCard;