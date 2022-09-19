import React, { Component } from 'react';
import Styles from "./Navbar.module.css";
import User from "../../images/user.jfif";
import FormToDo from "../Form/FormToDo"
class Navbar extends Component {
    render() {
        return (
            <div className={Styles.container}>
                <div className={Styles.navbarTop}>
                    <form className={Styles.formSearch}>
                        <span className={Styles.location} >
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </span>
                        <input className={Styles.input} placeholder='Search...' />
                    </form>
                    <div className={Styles.iconNavbar}>
                        <i class="fa-solid fa-circle-half-stroke"></i>
                        <i class="fa-solid fa-gear"></i>
                        <i class="fa-brands fa-github"></i>
                    </div>
                    <div>
                        <img className={Styles.image} src={User} alt="user" />
                    </div>
                </div>

                <div className={Styles.navbarBot}>
                    <div>
                       <FormToDo />
                    </div>
                    <div className={Styles.menu}>
                        <i class="fa-solid fa-ellipsis-vertical"></i>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navbar;