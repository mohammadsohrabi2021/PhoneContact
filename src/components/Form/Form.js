import React, { useState } from 'react';
import FormToDo from './FormToDo';
const Form = () => {
    const [todo,setTodo]=useState([
        {id:Math.floor(Math.random()*1000),name:"mohammad" ,lastName:"sohrabi",phone:"09186333667",age:21,Country:"iran",City:"hamedan",email:"mohammadsohrabi141@gmail.com"},
        {id:Math.floor(Math.random()*1000),name:"ali" ,lastName:"sohrabi",phone:"09186333667",age:21,Country:"iran",City:"hamedan",email:"mohammadsohrabi141@gmail.com"},
        {id:Math.floor(Math.random()*1000),name:"reza" ,lastName:"sohrabi",phone:"09186333667",age:21,Country:"iran",City:"hamedan",email:"mohammadsohrabi141@gmail.com"},
        {id:Math.floor(Math.random()*1000),name:"milad" ,lastName:"sohrabi",phone:"09186333667",age:21,Country:"iran",City:"hamedan",email:"mohammadsohrabi141@gmail.com"},
        {id:Math.floor(Math.random()*1000),name:"mohammad" ,lastName:"sohrabi",phone:"09186333667",age:21,Country:"iran",City:"hamedan",email:"mohammadsohrabi141@gmail.com"},
    ])
    return (
        <div>
            <FormToDo />
        </div>
    );
};

export default Form;