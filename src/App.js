import React from 'react';
import { Formulario } from './components/Formulario';
import { Header } from './components/Header'


export const App = () => {
    return (
        <>
            <Header titulo="Buscador de noticias" />        
        
            <div className="container white">
                <Formulario />
            </div>
        
        
        </>
    )
} 