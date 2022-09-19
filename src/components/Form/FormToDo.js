import react from 'react';
import Styles from "./Form.module.css";
const FormToDo = () => {
   
    return (
        <div>
            <form onSubmit={handleSubmite}>
                <fieldset className={Styles.formLogin}>
                    <legend>login:</legend>
                    <div className={Styles.formItem}>
                        <lable>Name:</lable>
                        <input name='name' />
                    </div>
                    <div  className={Styles.formItem}>
                        <lable>lastName:</lable>
                        <input name='lastName' />
                    </div>
                    <div  className={Styles.formItem}>
                        <lable>Phone:</lable>
                        <input name='phone' />
                    </div>
                    <div className={Styles.formItem}>
                        <lable>age:</lable>
                        <input name='age' />
                    </div>
                    <div className={Styles.formItem}>
                        <lable>Country:</lable>
                        <input name='Country' />
                    </div>
                    <div className={Styles.formItem}>
                        <lable>City:</lable>
                        <input name='City' />
                    </div>
                    <div className={Styles.formItem}>
                        <lable>Email:</lable>
                        <input name='email' />
                    </div>
                    <button className={Styles.formsubmit}> 
                        submit
                    </button>
                </fieldset>
            </form>
        </div>
    );
};

export default FormToDo;