import React from 'react';
import "./estilo.css";
import {Link} from 'react-router-dom';

function Listar (){
  let cursos = [
    'Marketing',
    'FullStack',
    'Data Analystis'
  ]; 
  return(
    <ul>
        {cursos.map(cada => <li>{cada}</li>)} 
        {/* seria o mesmo que eu fazer {cursos.map(function (cada){<li>{}cada</li>}) } ... e se eu fosse fazer mais de um return, ou seja, mais coisas a acontecerem, dai no => eu teria que usar RETURN*/}
      </ul>
  );
}


export default function App(){
 
  let nome = "Chiquim";

  return (
    
    <div>
      <h1>Olá mundo</h1>
      <h2 className="red">Digital College</h2>

      <hr/>
      <p>
        Bem vindo {nome}
      </p>

      <Listar/>
      <Listar/>

    </div>)
}
