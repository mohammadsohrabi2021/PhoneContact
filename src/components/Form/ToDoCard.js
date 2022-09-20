import React from 'react';

const ToDoCard = ({ todo, todos, setTodos, setFormStatus, setForm }) => {
    const handeleDelete = user => {
        setTodos(todos.filter(todo => todo.user !== user))
    }
    const handelCheck = user => {
        setTodos(todos.map(todo => todo.user === user? { ...todo, state: !todo.state } : todo))
    }
    const handleUpdate = todo => {
        setFormStatus('upDate')
        setForm(todo)
    }
    return (
        <div class="table-responsive-sm " >
            
                <table class="table my-3 ">
                <thead class="table-dark">
                    <tr>
                        <th>user</th>
                        <th>Name</th>
                        <th>LastName</th>
                        <th>Phone</th>
                        <th>Age</th>
                        <th>Country</th>
                        <th>City</th>
                        <th>Email</th>
                        <th>action</th>
                    </tr>
                </thead>
                <tbody style={{width:'100%'}}>
                   <tr>
                    <td>
                        {todo.user}
                    </td>
                    <td>
                        {todo.name}
                    </td>
                    <td>
                        {todo.lastName}
                    </td>
                    <td>
                        {todo.phone}
                    </td>
                    <td>
                        {todo.age}
                    </td>
                    <td>
                        {todo.Country}
                    </td>
                    <td>
                        {todo.City}
                    </td>
                    <td>
                        {todo.email}
                    </td>
                   </tr>
                </tbody>
            </table>
            
        </div>
    );
};

export default ToDoCard;