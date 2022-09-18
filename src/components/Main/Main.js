import React, { Component } from 'react';
import Styles from "./Main.module.css";
import Navbar from '../Navbar/Navbar';
class Main extends Component {
    render() {
        return (
            <div className={Styles.container}>
                <Navbar />
            </div>
        );
    }
}

export default Main;