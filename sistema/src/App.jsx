import Formulario from './components/Formulario';
import Header from './components/Header';
import ListaRecetas from './components/ListaRecetas';

import CategoriasProvider from './contex/CategoriContex';
import RecetasProvider from './contex/RecetasContex';
import ModalContex from './contex/ModalContex';
import ModalProvider from './contex/ModalContex';
;


function App() {


  return (
    <CategoriasProvider>
      <RecetasProvider>
        <ModalProvider>
          <Header />

          <div className="container mt-5">
            <div className="row">
              <Formulario />
            </div>

            <ListaRecetas />
          </div>

        </ModalProvider>
      </RecetasProvider>
    </CategoriasProvider >
  )
}

export default App
