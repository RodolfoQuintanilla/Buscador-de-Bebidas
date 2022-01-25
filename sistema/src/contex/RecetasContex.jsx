import axios from 'axios';
import { createContext, useState, useEffect } from 'react';




export const RecerasContext = createContext();

const RecetasProvider = (props) => {

    const [recetas, guardarRecetas] = useState([]);

    const [busqueda, buscarRecetas] = useState({
        nombre: '',
        categoria: ''
    });

    const [consultar, guardarConsulta] = useState(false);

    const { nombre, categoria } = busqueda;

    useEffect(() => {

        if (consultar) {
            const obtebnerRecetas = async () => {
                const url = ` https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&c=${categoria}`;

                const resultado = await axios.get(url);

                guardarRecetas(resultado.data.drinks);
            }
            obtebnerRecetas();
        }
    }, [busqueda]);



    return (
        <RecerasContext.Provider
            value={{
                recetas,
                buscarRecetas,
                guardarConsulta
            }}

        >
            {props.children}
        </RecerasContext.Provider>
    );
}

export default RecetasProvider;