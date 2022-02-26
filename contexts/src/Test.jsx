import React,{useContext} from "react"
import {NoteContext} from "./context"

export default function Test() {
  const {notes,setNotes,prova} = useContext(NoteContext)


  return (
    <div>
      test { notes.map((note,pos)=> {
        return (
          <div key={pos}>
            <h3>{note.title}</h3>
          </div>
        )
      })}
    </div>
  )
}