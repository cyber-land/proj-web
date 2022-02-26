import React,{useState, useEffect} from 'react'
import NotesContext from './context'
import Primary from './Primary'

function App() {
  //lista delle pagine che fanno parte del diario
  const [notes, setNotes] = useState([])
  
  //recupera le note dal localstorage (eseguito unicamente all'avvio dell'app)
  useEffect(() => {
    const savedNotes = localStorage.getItem("notes")
    if (savedNotes) setNotes(JSON.parse(savedNotes))
  }, [])
  //salva la nota nel local storage (eseguito ad ogni modifica di {notes})
  useEffect(() => {localStorage.setItem("notes", JSON.stringify(notes))}, [notes])
  
  //render globale del diario
  return (
    <NotesContext.Provider value={{notes, setNotes}}>
      <Primary />
    </NotesContext.Provider>
  )
}
export default App
