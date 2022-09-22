import React from "react";
import Styles from "./Form.module.css";
const FormToDo = ({ form,  FormStatus,handleSubmit ,handleChange }) => {
   
    return (
        <div className={Styles.container}>
            <form onSubmit={handleSubmit}>
                <fieldset className={Styles.formLogin}>
                    <legend>login:</legend>
                    <div className={Styles.formItem}>
                        <lable htmlFor={'name'}>Name:</lable>
                        <input onChange={handleChange} name={'name'} value={form.name} />
                    </div>
                    <div  className={Styles.formItem}>
                        <lable htmlFor={'lastName'}>lastName:</lable>
                        <input onChange={handleChange} name={'lastName'} value={form.lastName}  />
                    </div>
                    <div  className={Styles.formItem}>
                        <lable htmlFor={'phone'}>Phone:</lable>
                        <input onChange={handleChange} name={'phone'}  value={form.phone}  />
                    </div>
                    <div className={Styles.formItem}>
                        <lable  htmlFor={'age'}>age:</lable>
                        <input onChange={handleChange} name={'age'} value={form.age} />
                    </div>
                    <div className={Styles.formItem}>
                        <lable  htmlFor={'Country'}>Country:</lable>
                        <input onChange={handleChange} name={'Country'} value={form.Country}  />
                    </div>
                    <div className={Styles.formItem}>
                        <lable  htmlFor={'City'}>City:</lable>
                        <input  onChange={handleChange} name={'City'} value={form.City} />
                    </div>
                    <div className={Styles.formItem}>
                        <lable  htmlFor={'email'}>Email:</lable>
                        <input onChange={handleChange} name={'email'} value={form.email}  />
                    </div>
                    <button type={'submit'} className='btn btn-primary px-4 ' style={{width:'46%' ,height:"38px",marginTop:'34px' }}> 
                         {FormStatus === 'add' ?   'update':'submit'}
                    </button>
                </fieldset>
            </form>
        </div>
    );
};

export default FormToDo;