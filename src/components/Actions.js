import React from 'react';

const Actions = ({ children }) => {
    return (
        <div>
            <div className="customers-actions">
                <div>{children}</div>
            </div>
        </div>
    );
};


export default Actions;
