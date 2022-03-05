import React, { useEffect, useContext } from "react"
import { CategoryCtx } from "../context"

const CancellaCategoria = (id) => {
  console.log(`deleted category with id "${id}"`)
  return fetch(`http://127.0.0.1:3000/categories/${id}`, { method: "DELETE" })
}

const CategoriaElement = ({ element }) => {
  const { AggiornaCategorie } = useContext(CategoryCtx)
  return (
    <li>
      {element.name}
      <button className="uk-button uk-button-default"
        onClick={() => { CancellaCategoria(element.id).then(() => AggiornaCategorie()); AggiornaCategorie() }}>
        x
      </button>
    </li>
  )
}

const ElencoCategorie = () => {
  const { categorie, AggiornaCategorie } = useContext(CategoryCtx)

  // viene eseguito al primo mount del componente
  useEffect(() => { AggiornaCategorie() }, [])

  //const AggiornaCategorie = () =>fetch("http://127.0.0.1:3000/categories").then(r => r.json()).then(body =>setCategorie(body))

  return (
    <>
      <h2>Elenco Categorie</h2>
      <button className="uk-button uk-button-default" onClick={AggiornaCategorie}>Reload</button>
      <ul className="uk-list uk-list-striped">
        {categorie.map((categoria, pos) => <CategoriaElement key={pos} element={categoria} />)}
      </ul>
    </>
  )
}

export default ElencoCategorie