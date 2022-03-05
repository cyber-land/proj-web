import React, {useState, useContext} from "react"
import {CategoryCtx} from "../context"

const CreaCategoriaForm = () => {
  const [categoria,setCategoria] = useState("")
  const {AggiornaCategorie} = useContext(CategoryCtx)

  const creaCategoria=()=>{
    console.log(`created new category with name "${categoria}"`)
    fetch("http://127.0.0.1:3000/categories", {
      method: "POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        nome: categoria
      })
    })
    .then(r => r.json())
    .then(result => {/*console.log(result);*/ AggiornaCategorie()})
  }
  
  return (
    <>
      <input type="text" placeholder="nome categoria" value={categoria} onChange={(e) => setCategoria(e.target.value)}/>
      <button onClick={creaCategoria}>crea</button>
    </>
  )
}

export default CreaCategoriaForm