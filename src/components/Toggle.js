import React from 'react';
import styled from 'styled-components';

let Sun, Moon;

Sun = Moon = styled.svg`
  position: absolute;

  transition: all .5s linear;
  cursor: pointer;
  @media (max-width:1440px){
    top:1.2rem;
  right: 10rem;
  } 
  @media (max-width:1320px){
    top:1.2rem;
  right: 9rem;
  } 
  @media (max-width:1200px){
    top:1.2rem;
  right: 8.5rem;
  }
  @media (max-width:1100px){
    top:1.2rem;
  right: 7.2rem;
  }
  @media (max-width:1024px){
    top:1.2rem;
  right: 7rem;
  } 
  @media (max-width:768px){
    top: 1.1rem;
    right: 1rem;
  } 
  @media (max-width:425px){
    top: 1.1rem;
    right:-1.8rem;
  } 
  @media (max-width:320px){
    top: 1.2rem;
    right: -4rem;
  } 
`;

export const Toggle = ({ theme, toggleTheme }) => {
  console.log(theme);
  return (
    <div onClick={toggleTheme}>
      { theme === 'light' ? <Moon xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 26 26" fill="none" stroke="#212121" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></Moon>
      : 
      <Sun xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 26 26" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-sun"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></Sun> }
    </div>
  )
}
