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
            <div style={{ border: '1px solid #000', margin: '20px', padding:'10px' }}>
                    <div>
                        user:{todo.user}
                    </div>
                    <div>
                        name : {todo.name}
                    </div>
                    <div>
                    <div>
                        lastName:{todo.lastName}
                    </div>
                      phone:{todo.phone}
                    </div>
                    <div>
                      age:{todo.age}
                    </div>
                    <div>
                      Country:{todo.Country}
                    </div>
                    <div>
                      City:{todo.City}
                    </div>
                    <div>
                      Email:{todo.email}
                    </div>
                    <button onClick={() => handeleDelete(todo.id)}style={{  margin: '20px', padding:'5px',cursor:'pointer' }}>
                        delete
                    </button>
                    <button onClick={() => handleUpdate(todo)}style={{  margin: '20px', padding:'5px',cursor:'pointer'}}>
                        upDate
                    </button>
                </div>
        </div>
    );
};

export default ToDoCard;