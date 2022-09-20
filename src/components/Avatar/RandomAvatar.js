import React from 'react';
import Avatar from 'react-avatar';
const RandomAvatar = ({ name }) => {
    return (
        <>
            <Avatar githubHandle="sitebase" round="50%" size={'90%'} name={name}  />
           
        </>
    );
};

export default RandomAvatar;