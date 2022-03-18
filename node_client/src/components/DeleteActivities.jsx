import React, { useContext } from "react"
import { ActivityCtx } from "../context"
import server_addr from '../config'
//eliminazione singola attività
const deleteActivities = () => {
  return fetch(`http://${server_addr}/activities`, { method: "DELETE" })
}
//eliminazione di tutte le attività
const DeleteEverything = () => {
  const { UpdateActivities } = useContext(ActivityCtx)
  return (
    <button className="uk-button uk-button-default" placeholder="delete all" onClick={() => {deleteActivities()
      .then(r => r.json()).then(() => { console.log("delete all activities"); UpdateActivities() })}}
    >delete all</button>
  )
}

export default DeleteEverything
