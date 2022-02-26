import React, {useState} from "react"

const CreaCategoriaForm = ({setCategorie}) => {
  const [categoria,setCategoria] = useState("")

  const creaCategoria=()=>{
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
    .then(() => {
      setCategorie(
        vecchioStato => {
          return [...vecchioStato,{nome:categoria}]
        }
      )
    })
  }
  
  return (
    <>
      <input type="text" placeholder="nome categoria" value={categoria} onChange={(e) => setCategoria(e.target.value)}/>
      <button onClick={creaCategoria}>crea</button>
    </>
  )
}

export default CreaCategoriaForm