import React from 'react';
import './NavBarMenuEntry.css';

export default ({url, text}) => (
        <a className="NavBarMenuEntry" href={url}>{text}</a>
);