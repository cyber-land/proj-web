import React, { useEffect, useContext, useState } from "react"
import { ActivityCtx } from "../context"

const DeleteActivity = (id) => {
  return fetch(`http://127.0.0.1:3000/activities/${id}`, { method: "DELETE" })
}

const GetCategoryName = (id, setCategoryName) => {
  fetch(`http://127.0.0.1:3000/categories/${id}`, { method: "GET" }).then(r => r.json())
  .then(result => {
    try {setCategoryName(result[0].name)} catch (err) {
      setCategoryName('Error')
    }
  })
}

const ActivityElement = ({ element }, {category}) => {
  const { UpdateActivities } = useContext(ActivityCtx)
  const [categoryName, setCategoryName] = useState(element.category_id)
  GetCategoryName(element.category_id, setCategoryName)
  return (
    <tr>
      <td>{element.name}</td>
      <td>{element.id}</td>
      <td>{`${categoryName} (${element.category_id})`}</td>
      <td>
        <button className="uk-button uk-button-default"
          onClick={() => { DeleteActivity(element.id).then(r => r.json())
          .then(() => {UpdateActivities(); console.log(`deleted activity with id "${element.id}"`)})}}>
          X
        </button>
      </td>
    </tr>
  )
}

const GetActivities = () => {
  const { activities, UpdateActivities } = useContext(ActivityCtx)
  useEffect(() => { UpdateActivities() }, [])
  return (
    <div>
      <h2>LIST ACTIVITIES</h2>
      <button className="uk-button uk-button-default" onClick={UpdateActivities}>Reload</button>
      <table className="uk-table uk-table-striped uk-table-middle uk-table-justify">
        <thead className="uk-text-bolder uk-text-uppercase">
          <tr>
            <td>name</td>
            <td>id</td>
            <td>category (id)</td>
            <td>delete</td>
          </tr>
        </thead>
        <tbody>
          {activities.map((activity, index) => 
            <ActivityElement key={index} element={activity}/>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default GetActivities