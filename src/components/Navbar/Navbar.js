import React, { Component } from 'react';
import Styles from "./Navbar.module.css";
import User from "../../images/user.jfif";
import Form from '../Form/FormData';
class Navbar extends Component {
    render() {
        return (
            <div className={Styles.container}>
                <div className={Styles.navbarTop}>
                    <div className={Styles.formSearch}>
                        <marquee   className={Styles.marquee}>I'm Mohammad Sohrabi, React developer and programmer</marquee>
                    </div>
                   
                    <div className={Styles.iconNavbar}>
                        {/* <i class="fa-solid fa-circle-half-stroke"></i> */}
                        <i class="fa-solid fa-gear"></i>
                        
                        <a href={'https://github.com/mohammadsohrabi2021'} target={'_blank'}>
                        <i class="fa-brands fa-github"></i>
                        </a>
                    </div>
                    <div>
                        <img className={Styles.image} src={User} alt="user" />
                    </div>
                </div>

                <div className={Styles.navbarBot}>
                    <div>
                       <Form />
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