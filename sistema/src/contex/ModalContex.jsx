import axios from 'axios';
import { createContext, useContext, useState, useEffect } from 'react';





export const ModalContex = createContext();

const ModalProvider = (props) => {

    const [idreceta, guardarIdReceta] = useState(null);
    const [informacion, setreceta] = useState({});

    useEffect(() => {
        const obtenerReceta = async () => {
            if (!idreceta) return;


            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idreceta}`;

            const resultado = await axios.get(url);

            setreceta(resultado.data.drinks[0]);
        };
        obtenerReceta();
    }, [idreceta]);


    return (
        <ModalContex.Provider
            value={{
                informacion,
                guardarIdReceta,
                setreceta
            }}
        >
            {props.children}
        </ModalContex.Provider>
    );
};

export default ModalProvider;