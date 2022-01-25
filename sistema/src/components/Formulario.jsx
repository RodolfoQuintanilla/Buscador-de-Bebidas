import { useContext, useState } from 'react';
import { CategoriasContex } from '../contex/CategoriContex';
import { RecerasContext } from '../contex/RecetasContex';

const Formulario = () => {

    const { categorias } = useContext(CategoriasContex);

    const [busqueda, guardarBusqueda] = useState({
        nombre: '',
        categoria: ''
    });

    const obtenerDatosReceta = (e) => {
        guardarBusqueda({
            ...busqueda, [e.target.name]: e.target.value
        });
    };
    const { buscarRecetas, guardarConsulta } = useContext(RecerasContext);


    return (
        <div>
            <form
                className="col-12"
                onSubmit={e => {
                    e.preventDefault();
                    buscarRecetas(busqueda)
                    guardarConsulta(true);
                }


                }
            >
                <fieldset className="text-center">
                    <legend>Busca bebidas por Categoría o Ingrediente</legend>
                </fieldset>
                <div className="row mt-4">
                    <div className="col-md-4">
                        <input
                            name='nombre'
                            className='form-control'
                            type="text"
                            placeholder='Buscar Ingrediente'
                            onChange={obtenerDatosReceta}
                        />

                    </div>

                    <div className="col-md-4">
                        <select
                            className='form-control'
                            name='categoria'
                            onChange={obtenerDatosReceta}
                        >
                            <option value="">--- Selecciona Categoria ---</option>
                            {categorias.map(categoria => (
                                <option
                                    key={categoria.strCategory}
                                    value={categoria.strCategory}
                                >{categoria.strCategory}</option>
                            ))}

                        </select>

                    </div>

                    <div className="col-md-4">
                        <input
                            type="submit"
                            className="btn btn-block btn-primary"
                            value="Buscar Bebidas"
                        />
                    </div>

                </div>
            </form>
        </div>
    );
};

export default Formulario;