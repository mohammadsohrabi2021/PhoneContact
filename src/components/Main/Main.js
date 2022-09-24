import React from 'react';
import Styles from "./Main.module.css";
import Navbar from '../Navbar/Navbar';
import { Toggle } from '../Toggle';
import { useDarkMode } from '../../styles/useDarkMode';
import { GlobalStyles, lightTheme, darkTheme } from '../../styles/globalStyles';
import styled, { ThemeProvider } from 'styled-components';
function Main() {
    const [theme, toggleTheme] = useDarkMode();
    const themeMode = theme === 'light' ? lightTheme : darkTheme;

    return (
        <div className={Styles.container}>
            <ThemeProvider theme={themeMode}>
                <GlobalStyles />
                <Toggle theme={theme} toggleTheme={toggleTheme} />
                <Navbar />
            </ThemeProvider>

        </div>
    );

}

export default Main;