import React from 'react';
import TestListItem from "./TestListItem";

const TestList = ({tests}) => {
    return (
        <div className="customers-list">
            <TestListItem key={'H1'} numberOperations={'Número de Operaciones'} operations={'Operaciones'}
                          result={'Resultado'}/>
            {
                tests.map((customer, index) =>
                    <TestListItem key={index} numberOperations={customer.numberOperations}
                                  operations={customer.operations}
                                  result={customer.result}/>
                )
            }
        </div>
    );
};

export default TestList;
