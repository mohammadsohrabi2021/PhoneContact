import React from 'react';
import Styles from "./Sidebar.module.css"
import styled from 'styled-components';
const Ul =styled.ul`
  
   @media (max-width:800px){
    margin:0;
    flex-direction:column;
    background:gray;
    transition:all 0.5s;
    position:fixed;
    transform:${propse => propse.open ? "translateX(0)" : "translateX(-100%)"};
    top:0;
    left:0;
    height:100vh;
    width:70%;
    padding-top:3.5rem;
    li{
        color:#fff;
    }
   }
`
const Sidebar =({open} ) =>{
        return (
            <Ul open={open} className={Styles.container}>
               <h2>
                   <i class="fa-regular fa-user "></i>
                   <span>Contacts</span>
               </h2>
               <h3> 
                   <i class="fa-solid fa-plus"></i>
                   add user
               </h3>
            <ul className={Styles.list}>
                <li className={Styles.user}>
                   <i class="fa-regular fa-user"></i>
                   <span>User</span>
                </li>
                <li className={Styles.address}>
                    <i class="fa-solid fa-address-book"></i>
                   <span>address</span>
                </li>
                <li>
                   <i class="fa-solid fa-sliders"></i>
                   <span>sliders</span>
                </li>
                <li>
                    <i class="fa-solid fa-video"></i>
                   <span> video</span>
                </li>
                <li>
                   <i class="fa-brands fa-linkedin"></i>
                   <span>linkedin</span>
                </li>
                <li className={Styles.faceBook}>
                   <i class="fa-brands fa-facebook"></i>
                   <span>facebook</span>
                </li>
                <li>
                   <i class="fa-brands fa-twitter"></i>
                   <span>twitter</span>
                </li>
                <li>
                    <i class="fa-solid fa-phone"></i>
                    <span>phone</span>
                </li>
                <li className={Styles.book}>
                    <i class="fa-regular fa-address-book"></i>
                    <span>book</span>
                </li>
                <li>
                   <i class="fa-solid fa-location-arrow"></i>
                  <span> send</span>
                </li>
                <li>
                   <i class="fa-solid fa-map"></i>
                   <span> map</span>
                </li>
                <li>
                   <i class="fa-solid fa-trash"></i>
                  <span>trash</span> 
                </li>
            </ul>
            </Ul>
        );
    }


export default Sidebar;
