import React from 'react';

import './CenterWrapper.css'

export default ({width, children}) => (
    <div className="CenterWrapper" style={{ width: width }}>
        {children}
    </div>
);