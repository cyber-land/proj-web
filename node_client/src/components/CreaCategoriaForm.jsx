import React, { useState, useContext } from "react"
import { CategoryCtx } from "../context"

const CreaCategoriaForm = () => {
  const [categoria, setCategoria] = useState("")
  const { AggiornaCategorie } = useContext(CategoryCtx)

  const creaCategoria = () => {
    console.log(`created new category with name "${categoria}"`)
    fetch("http://127.0.0.1:3000/categories", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: categoria
      })
    })
      .then(r => r.json())
      .then(result => {/*console.log(result);*/ AggiornaCategorie() })
  }

  return (
    <>
      <form className="uk-grid-small" uk-grid="true">
        <div className="uk-width-1-2@s">
          <input type="text" className="uk-input" placeholder="nome categoria"
            value={categoria} onChange={e => setCategoria(e.target.value)} />
        </div>
        <div className="uk-width-1-4@s">
          <button className="uk-button uk-button-default" onClick={e => {
            e.preventDefault()
            creaCategoria()
          }}>crea</button>
        </div>
      </form>
    </>
  )
}

export default CreaCategoriaForm