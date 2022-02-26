const complimento = document.getElementById("complimento")
const btnComplimento = document.getElementById("btnComplimento")
btnComplimento.onclick = () => {
  console.log("click")
  btnComplimento.disabled = true
  setInterval( () => {
                fetch("https://complimentr.com/api")
                  .then(res => res.json())
                  .then(body => {
                    console.log(body)
                    //const c = body.complimentA
                    const {compliment} = body
                    complimento.innerText = compliment
                  })
              },10000
  )
    
}