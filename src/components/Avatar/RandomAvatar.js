import React from 'react';
import Avatar from 'react-avatar';
const RandomAvatar = ({name}) => {
    return (
        <>
            <Avatar className={'avatarStyle'} name={name} />
        </>
    );
};

export default RandomAvatar;