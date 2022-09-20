import react from 'react';
import Styles from "./Form.module.css";
const FormToDo = ({ form,  FormStatus,handleSubmit ,handleChange }) => {
   
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <fieldset className={Styles.formLogin}>
                    <legend>login:</legend>
                    <div className={Styles.formItem}>
                        <lable>Name:</lable>
                        <input onChange={handleChange} name={'name'} value={form.name} />
                    </div>
                    <div  className={Styles.formItem}>
                        <lable>lastName:</lable>
                        <input onChange={handleChange} name={'lastName'} value={form.lastName}  />
                    </div>
                    <div  className={Styles.formItem}>
                        <lable>Phone:</lable>
                        <input onChange={handleChange} name={'phone'} value={form.phone}  />
                    </div>
                    <div className={Styles.formItem}>
                        <lable>age:</lable>
                        <input onChange={handleChange} name={'age'} value={form.age} />
                    </div>
                    <div className={Styles.formItem}>
                        <lable>Country:</lable>
                        <input onChange={handleChange} name={'Country'} value={form.Country}  />
                    </div>
                    <div className={Styles.formItem}>
                        <lable>City:</lable>
                        <input  onChange={handleChange} name={'City'} value={form.City} />
                    </div>
                    <div className={Styles.formItem}>
                        <lable>Email:</lable>
                        <input onChange={handleChange} name={'email'} value={form.email}  />
                    </div>
                    <button type={'submit'} className='btn btn-primary px-5 ' style={{width:'46%' ,height:"40px",marginTop:'30px' }}> 
                         {FormStatus === 'add' ? 'submit' : 'update'}
                    </button>
                </fieldset>
            </form>
        </div>
    );
};

export default FormToDo;