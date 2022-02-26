import { useContext, useState } from "react";
import NotesContext from "./context";

function Primary() {
  //parametri della nota corrente
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")
  const [date, setDate] = useState("")
  //posizione in cui deve venire inserita
  const [positionCurrentNote, setPositionCurrentNote] = useState(null)
  //recuperare il riferimento alla lista delle pagine del diario
  const { notes, setNotes } = useContext(NotesContext)

  function clearForm() {
    setTitle("")
    setDate("")
    setBody("")
  }
  function compileForm(note) {
    setTitle(note.title);
    setBody(note.body);
    setDate(note.date);
  }

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
  //inserisce la nota corrente in coda
  function addNewNote() {
    setNotes([Note.makeAndCorrect(title, body, date), ...notes])
  }
  //elimina la onta in posizione {noteIndex}
  function deleteNote(noteIndex) {
    setNotes(notes.filter((note, index) => index !== noteIndex))
  }

  //struct di una nota
  class Note {
    constructor(title, body, date) {
      this.title = title
      this.body = body
      this.date = date
    }
    static makeAndCorrect(title, body, date) {
      let d = date;
      if (!date) { d = new Date(Date.now()).toISOString().substring(0, 10) }
      //if (!title) t = d
      return new Note(title,body,date)
    }
  }
  
  //ritorna il render di una nuova card nella lista a sinistra
  function Card({ note, onDelete, saveIndex }) {
    return (
      <li className="card" onClick={() => { compileForm(note); saveIndex() }}>
        <div className="card-header note"><h4>{note.date}</h4></div>
        {/*<div className="card-body note">{note.title}</div>*/}
        <div className="card-footer">
          <button className="btn" onClick={onDelete}>delete</button>
        </div>
      </li>
    );
  }
  //TODO: aggiungere tag columns?
  return (
    <>
      <div className="column col-3" id="left">
        <ul className="nav" id="nav-left" style={{ height: 800 + "px", overflow: "auto" }}>
          {notes.map((note, pos) =>
            <Card key={pos} note={note} onDelete={() => {deleteNote(pos); clearForm()}} 
            saveIndex={() => {setPositionCurrentNote(pos)}} />
          )}
        </ul>
      </div>

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
                clearForm()
              }}>Modify</button>
            </label>
            <label className="form-inline">
              <button className="btn" onClick={e => {
                e.preventDefault()
                addNewNote()
                clearForm()
              }}>Save</button>
            </label>
            <textarea className="form-input" type="text" id="body" value={body}
              onChange={e => setBody(e.target.value)} placeholder="body">
            </textarea>
          </div>
        </form>
      </div>

      <div className="column col-3" id="right">
        <header><h3>{notes.length} pages</h3></header>
      </div>
    </>
  )
}
export default Primary
