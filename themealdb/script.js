const debug = document.getElementById("debug")

function setContent(domId,content) {
  document.getElementById(domId).innerHTML = content 
}

function setVisibile(domId, visible) {
let value = "none"
if (visible === true) {
    value = "block"
}
document.getElementById(domId).style.display = value
}

fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then(r => r.json())
    .then(body => {
      //debug.innerHTML = JSON.stringify(body["meals"][0],null,2)
      const meal = jsontomeal(body["meals"][0])
      setVisibile("spinner", false)
      setVisibile("recipe", true)
      setContent("recipe-name",meal.name)   
      setContent("recipe-area",meal.area) 
      document.getElementById("recipe-name").innerHTML = meal.name
      let tagsHTML = ""
      for(const tag of meal.tags) {
          tagsHTML += `<span class="uk-badge">${tag}</span>`
          // tagsHTML += '<span class="uk-badge">'+tag+'</span>'
      }
      //document.getElementById("tags").innerHTML = tagsHTML
      setVisibile("tags", tagsHTML)
    })
