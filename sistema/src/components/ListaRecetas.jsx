import { useContext } from 'react';
import { RecerasContext } from '../contex/RecetasContex';
import Receta from '../components/Receta';

const ListaRecetas = () => {

    const { recetas } = useContext(RecerasContext);
    console.log(recetas);
    return (

        <div div className='row mt-5'>
            {recetas.map(receta => (
                <Receta
                    key={receta.idDrink}
                    receta={receta}
                />
            ))}
        </div>
    );
};

export default ListaRecetas;