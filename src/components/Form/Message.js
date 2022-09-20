import React from 'react';

const Message = ({message ,onMassage}) => {
    return (
        <div style={{position:"fixed",
        top:'0',
        left:'0',
        bottom:'0',
        right:'0',
       }}>
            <div style={{
                display:'flex',
                flexDirection:'column',
                alignItems:'center',
                position:'absolute',
                top:'50%',
                left:'50%',
                transform:'translate(-50%,-50%)',
                backgroundColor:'white',
                padding:'50px'
            }}>
                <h3 style={{color:'#111'}}>{message}</h3>
                <div style={{
                display:'flex',alignItems:'center' ,color:'white'}}>
                    <button onClick={()=>onMassage(true)} style={{background:'red',color:'white',padding:'10px',margin:'4px' ,border:'0',cursor:'pointer'}}>yes</button>
                    <button onClick={()=>onMassage(false)} style={{background:'green',color:'white',padding:'10px',margin:'4px' ,border:'0',cursor:'pointer'}}>No</button>
                </div>
            </div>
        </div>
    );
};

export default Message;