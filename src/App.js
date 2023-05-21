import "./App.css";
import DetaliiProiect from "./components/DetaliiProiect";
import LineTo from "react-lineto";
import { ToastContainer } from 'react-toastify';
import { useEffect, useState } from "react";
import { generare, setareObstacol } from "./functions/helperFunctions";
import { main } from './functions/doStuff';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [drum, setDrum] = useState([]);
  const [matrice, setMatrice] = useState([]);
  const [dimensiune, setDimensiune] = useState(0)

  const getRowWidth = (nrColoane) => nrColoane * (54);

  const updateDimensiune = (event) => {
    setMatrice([])
    setDimensiune(event.target.value);
  }

  useEffect(() => {
    setLoading(false)
  }, [drum])

  return (
    <div>
        <div className="programatoriii"><b>Programatori</b>: <li>Daczo Cezar</li>
          <li>Dutu Antonia</li> 
          <li>Morus Alexandru</li> 
          <li>Zamfir Irina</li> 
        </div>
        <figure class="hover-rotate">
          <img src="https://i.redd.it/jdmuzf6loqya1.jpg" height="200" width="240"/></figure>
      <div className="App" class="center">
        <div className='containerProiect'>
          <DetaliiProiect />
          <ToastContainer position='top-center' />
          <div className='controlsContainer'>
            <div className='containerDimensiune'>
              <div>Dimensiune: </div>
              <input type='number' min={1} max={100} className='dimensiune' onChange={updateDimensiune}></input>
            </div>
            <button className='button' disabled={!dimensiune} onClick={() => generare(dimensiune, 1, 100, setMatrice, setLoading, setDrum)}>Generare Matrice</button>
            <button className='button' disabled={matrice.length === 0} onClick={() => main(dimensiune, matrice, setLoading, setDrum)}>Cauta drum</button>


          </div>
          <div className='matrice' style={{ flexBasis: `${getRowWidth(dimensiune)}px` }}>
            {matrice.map((rand, i) => (i !== 0 && i !== parseInt(dimensiune) + 1 &&
              <div className="row" key={i}>
                {rand.map((celula, j) => (j !== 0 && j !== parseInt(dimensiune) + 1 &&
                  <div
                    className={`cell ${i + 1}_${j + 1}`}
                    value={celula}
                    key={j}
                    onClick={(event) => setareObstacol(event, dimensiune, matrice, setMatrice, drum, setDrum, setLoading, main)}>{celula}</div>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div>
          {!loading && drum.map((pereche, i) => (
            <LineTo key={i} from={`${pereche[0]}`} to={`${pereche[1]}`} borderColor='#8000ff' borderWidth={2} delay={100} />
          ))}
        </div>
      </div>
    </div>
      
  );
}

export default App;
