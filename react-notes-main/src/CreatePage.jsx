import React, { useContext, useState, useEffect } from 'react'
import NotesContext from './context'

function Create() {

  const { notes, setNotes, title, body, date } = useContext(NotesContext)

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
      return new Note(title, body, date)
    }
  }

  //inserisce la nota corrente in coda
  function addNewNote() {
    setNotes([Note.makeAndCorrect(title, body, date), ...notes])
  }

  //TODO: aggiungere una nuova pagina, cancellare il main precedente 
  //ed impostare la currentpage sulla nuova pagina
  return (
    <label className="form-inline">
      <button className="btn" onClick={e => {
        e.preventDefault()
        addNewNote()
      }}>Save</button>
    </label>
  )
}
export default Create
