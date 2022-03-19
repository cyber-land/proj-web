import React, { useContext } from "react"
import { CategoryCtx } from "../context"
import server_addr from '../config'
//eliminazione categoria
const deleteCategories = () => {
  return fetch(`http://${server_addr}/categories`, { method: "DELETE" })
}
//eliminazione di tutte le categorie
const DeleteEverything = () => {
  const { AggiornaCategorie } = useContext(CategoryCtx)
  return (
    <button className="uk-button uk-button-default" placeholder="delete all" onClick={() => {deleteCategories()
      .then(r => r.json()).then(() => { console.log("delete all categories"); AggiornaCategorie() })}}
    >delete all</button>
  )
}

export default DeleteEverything
