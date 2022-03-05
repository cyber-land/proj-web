import React, { useState } from 'react';
import GetCategories from "./components/GetCategories"
import CreateCategory from "./components/CreateCategory"
import DeleteCategories from "./components/DeleteCategories"
import GetActivities from "./components/GetActivities"
import CreateActivity from "./components/CreateActivity"
import { CategoryCtx, ActivityCtx } from "./context"

function App() {
  const [categorie, setCategorie] = useState([])
  const [activities, setActivities] = useState([])
  const AggiornaCategorie = () => fetch("http://127.0.0.1:3000/categories")
    .then(r => r.json()).then(body => setCategorie(body))
  const UpdateActivities = () => fetch("http://127.0.0.1:3000/activities")
    .then(r => r.json()).then(body => setActivities(body))
  return (
    <main>
      <h1 className="uk-text-center uk-text-bolder uk-text-uppercase">classifier</h1>
      <CategoryCtx.Provider value={{
        categorie,
        setCategorie,
        AggiornaCategorie
      }}>
        <CreateCategory />
        <DeleteCategories />
        <GetCategories /*categorie={categorie} setCategorie={setCategorie}*/ />
      </CategoryCtx.Provider>
      <ActivityCtx.Provider value={{
        activities,
        setActivities,
        UpdateActivities
      }}>
        <CreateActivity />
        {/*<DeleteActivities />*/}
        <GetActivities/>
      </ActivityCtx.Provider>
    </main>
  );
}

export default App;