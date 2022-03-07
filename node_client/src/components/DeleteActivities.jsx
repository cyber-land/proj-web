import React, { useContext } from "react"
import { ActivityCtx } from "../context"

const deleteActivities = () => {
  return fetch("http://127.0.0.1:3000/activities", { method: "DELETE" })
}

const DeleteEverything = () => {
  const { UpdateActivities } = useContext(ActivityCtx)
  return (
    <button className="uk-button uk-button-default" placeholder="delete all" onClick={() => {deleteActivities()
      .then(r => r.json()).then(() => { console.log("delete all activities"); UpdateActivities() })}}
    >delete all</button>
  )
}

export default DeleteEverything
