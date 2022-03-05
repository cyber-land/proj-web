import React, {useState, useContext} from "react"
import {CategoryCtx} from "../context"

const DeleteEverything = () => {
  const [categoria,setCategoria] = useState("")
  const {AggiornaCategorie} = useContext(CategoryCtx)

  const deleteCategories=()=>{
    console.log(`delete categories`)
    fetch("http://127.0.0.1:3000/categories", {method: "DELETE"})
    .then(r => r.json())
    .then(result => {/*console.log(result);*/ AggiornaCategorie()})
  }
  
  return (
    <>
      <br></br>
      <button placeholder="delete all" onClick={deleteCategories}>delete all</button>
    </>
  )
}

export default DeleteEverything