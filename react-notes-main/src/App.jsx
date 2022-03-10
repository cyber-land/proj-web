import React, { useState, useEffect } from 'react'
import NotesContext from './context'
import ListBooks from './ListBooks'
import ListPages from './ListPages'
import Primary from './Primary'

function App() {
  //lista delle pagine che fanno parte del diario
  const [notes, setNotes] = useState([])
  //parametri della nota corrente
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")
  const [date, setDate] = useState("")
  //posizione in cui deve venire inserita
  const [positionCurrentNote, setPositionCurrentNote] = useState(0)

  //recupera le note dal localstorage (eseguito unicamente all'avvio dell'app)
  useEffect(() => {
    const savedNotes = localStorage.getItem("notes")
    if (savedNotes) setNotes(JSON.parse(savedNotes))
  }, [])
  //salva la nota nel local storage (eseguito ad ogni modifica di {notes})
  useEffect(() => { localStorage.setItem("notes", JSON.stringify(notes)) }, [notes])

  //render globale del diario
  return (
    <NotesContext.Provider value={{
      notes, setNotes,
      title, setTitle,
      body, setBody,
      date, setDate, 
      positionCurrentNote, setPositionCurrentNote
    }}>
      <ListBooks />
      <ListPages />
      <Primary />
      <div className="column col-3" id="right">
        <header><h3>{notes.length} pages</h3></header>
      </div>
    </NotesContext.Provider>
  )
}
export default App
