import React from 'react';
import ReactDOM from 'react-dom';
import Hoock from './components/Hoock'

// import Contador from './components/Contador';
// import ComponentClass from './components/ComponentClass';
// import Membro from './components/Membro';
// import Familia from './components/Familia';
// import ComponetsWithFunction from './components/ComponentWithFunction';
// import Parent from './components/Parent';


let element = document.getElementById('root');
let jsx = 
(    
    <Hoock></Hoock>
    // <Contador numeroInicial={5}></Contador>
    // <ComponentClass title="Olá Classe - By Prop"></ComponentClass>
    // <ComponetsWithFunction></ComponetsWithFunction>

    // <Familia sobrenome = "Lima">
    //     <Membro nome="Danilo" sobrenome = "Moura"></Membro>
    //     <Membro nome="Danilo" sobrenome = "Moura"></Membro>
    //     <Membro nome="Danilo" sobrenome = "Moura"></Membro>
    // </Familia>
);

ReactDOM.render(jsx, element);

