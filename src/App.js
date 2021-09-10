import React, {useState, useEffect} from 'react';
import { Formulario } from './components/Formulario';
import { Header } from './components/Header'


export const App = () => {
    
    const [categoria, guardarCategoria] = useState('general');
    const [noticias, guardarNoticias] = useState([])


    
    useEffect(() => {
        const consultarApi = async () => {
            const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=cc21880c648545229cddd19ebf00fc65`

            const req = await fetch(url)
            const noticias = await req.json();

            guardarNoticias(noticias)
        }

        consultarApi()

    }, [categoria])
    
    return (
        <>
            <Header titulo="Buscador de noticias" />        
        
            <div className="container white">
                <Formulario 
                    guardarCategoria={ guardarCategoria }
                />
            </div>
        
        
        </>
    )
} 