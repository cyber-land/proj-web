import { useContext, useState } from "react";
import NotesContext from "./context";
import Create from './CreatePage'
import Note from './Note'

function Primary() {
  //recuperare il riferimento alla lista delle pagine del diario
  const { notes, setNotes, title, setTitle, 
    body, setBody, date, setDate, positionCurrentNote } = useContext(NotesContext)

  //inserisce la nota corrente al posto della nota da sostituire in {notes}
  //TODO: se la posizione non è valida?
  function modifyCurrentNote() {
    setNotes(notes.map((note, index) => {
      if (index !== positionCurrentNote)
        return note
      else
        return Note.makeAndCorrect(title, body, date)
    }))
  }
  
  //TODO: aggiungere tag columns?
  return (
    <>
      <div className="column col-6" id="main">
        <form className="form-horizontal">
          <div className="form-group">
            <label className="form-inline">
              <input className="form-input" type="text" id="title" value={title}
                onChange={e => setTitle(e.target.value)} placeholder="title">
              </input>
            </label>
            <label className="form-inline">
              <input className="form-input" type="date" id="date" value={date}
                onChange={e => { setDate(e.target.value) }} >
              </input>
            </label>
            <label className="form-inline">
              <button className="btn" onClick={e => {
                e.preventDefault()
                modifyCurrentNote()
                setTitle("")
                setBody("")
                setDate("") 
              }}>Modify</button>
            </label>
            <textarea className="form-input" type="text" id="body" value={body}
              onChange={e => setBody(e.target.value)} placeholder="body">
            </textarea>
          </div>
        </form>
      </div>
    </>
  )
}
export default Primary
