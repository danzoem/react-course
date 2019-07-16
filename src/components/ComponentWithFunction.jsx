import React from 'react';


export default props => {

    const contacts = ['Maria', 'Silva', 'Ana'];

    const makeItens = itens => {
        return itens.map(item => <li>{item}</li>);
    };

    return (
        <ul>
            { makeItens(contacts) }
        </ul>
    );
}