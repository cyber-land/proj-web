import { useContext, useState } from "react";
import NotesContext from "./context";
import Create from './CreatePage'

function ListPages() {
  const { notes, setNotes, setPositionCurrentNote, setTitle, setBody, setDate} = useContext(NotesContext)

  //ritorna il render di una nuova card nella lista a sinistra
  function Card({ note, onDelete, saveIndex }) {
    return (
      <li className="card" onClick={() => { 
        setTitle(note.title)
        setBody(note.body)
        setDate(note.date); 
        saveIndex();
      }}>
        <div className="card-header note"><h4>{note.date}</h4></div>
        {/*<div className="card-body note">{note.title}</div>*/}
        <div className="card-footer">
          <button className="btn" onClick={onDelete}>delete</button>
        </div>
      </li>
    );
  }

  //elimina la onta in posizione {noteIndex}
  function deleteNote(noteIndex) {
    setNotes(notes.filter((note, index) => index !== noteIndex))
  }

  return (
    <>
      <div className="column col-3" id="left">
        <ul className="nav" id="nav-left" style={{ height: 800 + "px", overflow: "auto" }}>
          {notes.map((note, pos) =>
            <Card key={pos} note={note} onDelete={() => { 
              deleteNote(pos); 
              setTitle("")
              setBody("")
              setDate("") 
            }} saveIndex={() => { setPositionCurrentNote(pos) }} />
          )}
        </ul>
        <Create />
      </div>
    </>
  )
}
export default ListPages
