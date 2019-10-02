import React from 'react';

const TestListItem = ({numberOperations, operations, result}) => {
    return (
        <div className="customers-list-item">
            <div className="field">
                {numberOperations}
            </div>
            <div className="field">
                {operations}
            </div>
            <div className="field">
                {result}
            </div>
        </div>
    );
};

export default TestListItem;
