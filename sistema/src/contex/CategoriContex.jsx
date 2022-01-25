import axios from 'axios';
import Reactn, { createContext, useState, useEffect } from 'react';

//Crear Contex
export const CategoriasContex = createContext();

//Provider
//2 de donde salen datos y funciones

const CategoriasProvider = (props) => {


    //Crear state del contex
    const [categorias, guardarCategorias] = useState([]);

    //ejecutar el llamado api
    useEffect(() => {
        const optenerCategorias = async () => {
            const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'

            const categorias = await axios.get(url);


            guardarCategorias(categorias.data.drinks);
        }
        optenerCategorias();
    }, []);


    return (
        <CategoriasContex.Provider
            value={{
                categorias
            }}
        >
            {props.children}
        </CategoriasContex.Provider>
    )
}

export default CategoriasProvider;