import React from 'react';
import{BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from "../pages/Home";
import Alunos from "../pages/Alunos";

export default function Ways(){
    React.useState();
    return(
        <>
        <BrowserRouter>
            <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/alunos' element={<Alunos />} />
            </Routes>
        </BrowserRouter>
        </>
);
}