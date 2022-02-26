import React, {useState, useEffect} from "react"


const CategoriaElement = ({element}) => {
  return (
    <div>{element.nome}</div>
  )
}

const ElencoCategorie = ({categorie,setCategorie}) => {
  

  // viene eseguito al primo mount del componente
  useEffect(()=>{fetch("http://127.0.0.1:3000/categories").then(r => r.json()).then(body =>setCategorie(body))}, [])

  const AggiornaCategorie = () =>fetch("http://127.0.0.1:3000/categories").then(r => r.json()).then(body =>setCategorie(body))
  
  return (
    <>
      <h2>Elenco Categorie</h2>
      <button onClick={AggiornaCategorie}>Reload</button>
      {categorie.map((categoria,pos) => <CategoriaElement key={pos} element={categoria}/>)}
    </>
  )
}

export default ElencoCategorie