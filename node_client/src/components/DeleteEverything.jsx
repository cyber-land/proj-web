import React, { useState, useContext } from "react"
import { CategoryCtx } from "../context"

const deleteCategories = () => {
  console.log(`delete categories`)
  fetch("http://127.0.0.1:3000/categories", { method: "DELETE" })
    .then(r => r.json())
    .then(result => { console.log(result); })
}

const DeleteEverything = () => {
  return (
    <>
      <br></br>
      <button className="uk-button uk-button-default" placeholder="delete all" onClick={deleteCategories}>delete all</button>
    </>
  )
}

export default DeleteEverything