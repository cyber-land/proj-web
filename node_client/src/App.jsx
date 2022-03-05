import React, { useState } from 'react';
import ElencoCategorie from "./components/ElencoCategorie"
import CreaCategoriaForm from "./components/CreaCategoriaForm"
import DeleteEverything from "./components/DeleteEverything"
import { CategoryCtx } from "./context"

function App() {
  const [categorie, setCategorie] = useState([])
  const AggiornaCategorie = () => fetch("http://127.0.0.1:3000/categories")
    .then(r => r.json()).then(body => setCategorie(body))
  return (
    <main>
      <CategoryCtx.Provider value={{
        categorie,
        setCategorie,
        AggiornaCategorie
      }}>
        <CreaCategoriaForm />
        <DeleteEverything />
        <ElencoCategorie /*categorie={categorie} setCategorie={setCategorie}*/ />
      </CategoryCtx.Provider>
    </main>
  );
}

export default App;