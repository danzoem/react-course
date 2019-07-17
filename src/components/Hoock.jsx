import React, {useState, useEffect } from 'react';

export default props => {
    let [contador, setContador] = useState(0);
    let [status, setStatus] = useState('Contador ' + contador);

    useEffect(()=>{
        setStatus('Contador ' + contador);
    });

    return (
        <React.Fragment>
            <h1>{contador}</h1>
            <h2>{status}</h2>
            <button
                onClick={() => setContador(contador - 1)}
            >
                Dec
            </button>
            <button
                onClick={() => setContador(contador + 1)}
            >
                Inc
            </button>
        </React.Fragment>
    )
}