import React from 'react';

export default props =>
(
    <React.Fragment>
        <div>
            { props.nome } <strong> { props.sobrenome }</strong>
        </div>
    </React.Fragment>
)

