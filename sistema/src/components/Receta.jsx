import { useContext, useState } from 'react';
import { ModalContex } from '../contex/ModalContex';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
//import { ModalConsumer } from '../context/ModalContext';



function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));


const Receta = ({ receta }) => {

    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);



    const { idDrink, strDrink, strDrinkThumb } = receta;

    const { informacion, guardarIdReceta, setreceta } = useContext(ModalContex);


    const classes = useStyles();

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    const mostrarIngredientes = informacion => {
        let ingredientes = [];

        for (let i = 1; i < 16; i++) {
            if (informacion[`strIngredient${i}`]) {
                ingredientes.push(
                    <li>{informacion[`strIngredient${i}`]} {informacion[`strMeasure${i}`]}</li>
                )
            }

        }
        return ingredientes;
    }


    return (
        <div className='col-md-4 mb-3'>
            <div key={idDrink} className='card'>
                <h2 className='card-header'>{strDrink}</h2>
                <img className='card-img-top' src={strDrinkThumb} alt={`Imegen de ${receta.strDrink}`} />
                <div className='card-body' >
                    <button
                        type="button"
                        className='btn btn-block btn-primary'
                        onClick={() => {
                            guardarIdReceta(receta.idDrink)
                            handleOpen()
                        }}
                    >
                        ver Receta
                    </button>
                    <Modal
                        open={open}
                        onClose={() => {
                            guardarIdReceta(null)
                            setreceta({})
                            handleClose()
                        }}
                    >
                        <div style={modalStyle} className={classes.paper}>
                            <h2>{informacion.strDrink}</h2>
                            <h3 className="mt-4">Instrucciones</h3>
                            <p>
                                {informacion.strInstructions}
                            </p>

                            <img className="img-fluid my-4" src={informacion.strDrinkThumb} />


                            <h3>Ingredientes Cantidades</h3>

                            <ul>
                                {mostrarIngredientes(informacion)}
                            </ul>

                        </div>
                    </Modal>
                </div>
            </div>
        </div>
    );
};

export default Receta;