import React,{useState} from 'react';
//import './App.css';
import ElencoCategorie from "./components/ElencoCategorie"
import CreaCategoriaForm from "./forms/CreaCategoriaForm"

function App() {
  const [categorie,setCategorie] = useState([])
  return (
    <main>
      <CreaCategoriaForm setCategorie={setCategorie}/>
      <ElencoCategorie categorie={categorie} setCategorie={setCategorie}/>
    </main>
  );
}

export default App;