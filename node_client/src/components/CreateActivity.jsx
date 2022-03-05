import React, { useState, useContext } from "react"
import { ActivityCtx } from "../context"

const CreateActivity = () => {
  const [activity, setActivity] = useState("")
  const [categoryId, setCategoryId] = useState("")
  const { UpdateActivities } = useContext(ActivityCtx)

  const createActivity = () => {
    console.log(`created new activity with name "${activity}"`)
    fetch("http://127.0.0.1:3000/activities", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: activity,
        categoryId: categoryId
      })
    })
      .then(r => r.json())
      .then(UpdateActivities)
  }

  return (
    <>
      <form className="uk-grid-small" uk-grid="true">
        <div className="uk-width-1-3@s">
          <input type="text" className="uk-input" placeholder="Insert activity name"
            value={activity} onChange={e => setActivity(e.target.value)} />
        </div>
        <div className="uk-width-1-3@s">
          <input type="text" className="uk-input" placeholder="Insert category ID"
            value={categoryId} onChange={e => setCategoryId(e.target.value)} />
        </div>
        <div className="uk-width-1-3@s">
          <button className="uk-button uk-button-default" onClick={e => {
            e.preventDefault()
            createActivity()
          }}>create</button>
        </div>
      </form>
    </>
  )
}

export default CreateActivity
