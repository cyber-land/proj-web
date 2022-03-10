import React, { useContext } from "react"
import { CategoryCtx } from "../context"

const deleteCategories = () => {
  return fetch("http://127.0.0.1:2500/categories", { method: "DELETE" })
}

const DeleteEverything = () => {
  const { AggiornaCategorie } = useContext(CategoryCtx)
  return (
    <button className="uk-button uk-button-default" placeholder="delete all" onClick={() => {deleteCategories()
      .then(r => r.json()).then(() => { console.log("delete all categories"); AggiornaCategorie() })}}
    >delete all</button>
  )
}

export default DeleteEverything
