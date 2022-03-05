import React, { useEffect, useContext } from "react"
import { CategoryCtx } from "../context"

const CancellaCategoria = (id) => {
  console.log(`deleted category with id "${id}"`)
  return fetch(`http://127.0.0.1:3000/categories/${id}`, { method: "DELETE" })
}

const CategoriaElement = ({ element }) => {
  const { AggiornaCategorie } = useContext(CategoryCtx)
  return (
    <tr>
      <td>{element.name}</td>
      <td>{element.id}</td>
      <td>
        <button className="uk-button uk-button-default"
          onClick={() => { CancellaCategoria(element.id).then(() => AggiornaCategorie()); AggiornaCategorie() }}>
          X
        </button>
      </td>
    </tr>
  )
}

const ElencoCategorie = () => {
  const { categorie, AggiornaCategorie } = useContext(CategoryCtx)

  useEffect(() => { AggiornaCategorie() }, []) //eseguito al primo mount del componente
  
  return (
    <div className="uk-text-center">
      <h2>LIST CATEGORIES</h2>
      {/*<button className="uk-button uk-button-default" onClick={AggiornaCategorie}>Reload</button>*/}
      <table className="uk-table uk-table-striped uk-table-middle uk-table-justify">
        <thead className="uk-text-bolder uk-text-uppercase">
          <tr>
            <td>name</td>
            <td>id</td>
            <td>delete</td>
          </tr>
        </thead>
        <tbody>
          {categorie.map((categoria, pos) => <CategoriaElement key={pos} element={categoria} />)}
        </tbody>
      </table>
    </div>
  )
}

export default ElencoCategorie