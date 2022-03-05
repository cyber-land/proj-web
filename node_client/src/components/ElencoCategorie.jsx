import React, {useEffect, useContext} from "react"
import {CategoryCtx} from "../context"

const CancellaCategoria = (id) =>{
  console.log(`deleted category with id "${id}"`)
  return fetch(`http://127.0.0.1:3000/categories/${id}`, {
    method: "DELETE",
    headers:{
      "Content-Type": "application/json"
    }
  })
}

const CategoriaElement = ({element}) => {
  const {AggiornaCategorie} = useContext(CategoryCtx)
  return (
    <div>{element.nome} <button onClick={() =>{CancellaCategoria(element.id).then(() => AggiornaCategorie());
       AggiornaCategorie()}}>x</button></div>
  )
}

const ElencoCategorie = () => {
  const {categorie,AggiornaCategorie} = useContext(CategoryCtx)

  // viene eseguito al primo mount del componente
  useEffect(()=>{AggiornaCategorie()}, [])

  //const AggiornaCategorie = () =>fetch("http://127.0.0.1:3000/categories").then(r => r.json()).then(body =>setCategorie(body))
  
  return (
    <>
      <h2>Elenco Categorie</h2>
      <button onClick={AggiornaCategorie}>Reload</button>
      {categorie.map((categoria,pos) => <CategoriaElement key={pos} element={categoria}/>)}
    </>
  )
}

export default ElencoCategorie