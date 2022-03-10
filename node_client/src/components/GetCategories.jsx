import React, { useEffect, useState, useContext } from "react"
import { CategoryCtx } from "../context"

const CancellaCategoria = (id) => {
  return fetch(`http://127.0.0.1:2500/categories/${id}`, { method: "DELETE" })
}

const updateCategory = (id, newName) => {
  //TODO: controllare se il nome è valido
  return fetch(`http://127.0.0.1:2500/categories/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: newName
      })
    })
}

const CategoriaElement = ({ element }) => {
  const { AggiornaCategorie } = useContext(CategoryCtx)
  //visto da tutti i form anche se dovrebbe essere individuale per ognuno
  const [newCategoryName, setnewCategoryName] = useState("")
  return (
    <tr>
      <td>{element.name}</td>
      <td>{element.id}</td>
      <td>
        {/*<button className="uk-button uk-button-default uk-margin-small-right" type="button"
          uk-toggle="target: #modal-close-default">
          update
        </button>
        <div id="modal-close-default" uk-modal="true">
  <div className="uk-modal-dialog uk-modal-body">
            <button className="uk-modal-close-default" type="button" uk-close="true"></button>
            <h2 className="uk-modal-title">Modify element</h2>*/}
                <form>
                <input type="text" className="uk-input" placeholder="Insert category name"
                  value={newCategoryName} onChange={e => setnewCategoryName(e.target.value)} />
                <button className="uk-button uk-button-default" onClick={e => {
                  e.preventDefault();
                  updateCategory(element.id, newCategoryName).then(r => r.json())
                  .then(() => {console.log(`modified category with id ${element.id}`); AggiornaCategorie() })
                }}>send</button>
                </form>
          {/*</div>
        </div>*/}
      </td>
      <td>
        <button className="uk-button uk-button-default"
          onClick={() => {
            CancellaCategoria(element.id).then(r => r.json()).then(() => {
              AggiornaCategorie();
              console.log(`deleted category with id "${element.id}"`);
              UIkit.notification({ message: `deleted category with id ${element.id}` }, { pos: 'top-center' });
            })
          }}>
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
    <div>
      <h2>LIST CATEGORIES</h2>
      <button className="uk-button uk-button-default" onClick={AggiornaCategorie}>Reload</button>
      <table className="uk-table uk-table-striped uk-table-middle uk-table-justify">
        <thead className="uk-text-bolder uk-text-uppercase">
          <tr>
            <td>name</td>
            <td>id</td>
            <td>update</td>
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