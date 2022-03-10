import React, { useContext, useState, useEffect } from 'react'
import NotesContext from './context'
import Note from './Note'

function Create() {

  const { notes, setNotes, title, body, date } = useContext(NotesContext)

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
