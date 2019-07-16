import React from 'react';
import ReactDOM from 'react-dom';
import Membro from './components/Membro';
import Familia from './components/Familia';
import ComponetsWithFunction from './components/ComponentWithFunction';
import Parent from './components/Parent';

const element = document.getElementById('root');

const jsx = 
(    

    <Parent></Parent>
    // <ComponetsWithFunction></ComponetsWithFunction>

    // <Familia sobrenome = "Lima">
    //     <Membro nome="Danilo" sobrenome = "Moura"></Membro>
    //     <Membro nome="Danilo" sobrenome = "Moura"></Membro>
    //     <Membro nome="Danilo" sobrenome = "Moura"></Membro>
    // </Familia>
);

ReactDOM.render(jsx, element);

