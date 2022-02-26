import React,{useState} from 'react';
import { Routes, Route, Link } from "react-router-dom";

import './App.css';
import {NoteContext} from "./context"

import Test from "./Test"

console.log(NoteContext)


function Me() {
  return (
    <>
      <h2>Me page</h2>
      <p>prova prova</p>
      <Link to="/">Back</Link>
    </>
  )
}

function App() {
  const [notes,setNotes] = useState([{title:"prova"},{title:"pippo"}])

  return (
    <NoteContext.Provider value={{
     notes,
     setNotes,
     prova: () => "pippo pippo"
    }}>
    <h2>Titolo applicazione</h2>
    <main>
    <Test/>
    <Link to="/me">about</Link>
      <Routes>
      <Route path="/" element={<Test />} />
      <Route path="me" element={<Me/>} />
      </Routes>
    </main>
    </NoteContext.Provider>
  );
}

export default App;