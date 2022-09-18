import React, { Component } from 'react';
import Styles from "./Navbar.module.css";
class Navbar extends Component {
    render() {
        return (
            <div className={Styles.container}>
                <form>
                    <input placeholder='Search...' />
                </form>
            </div>
        );
    }
}

export default Navbar;