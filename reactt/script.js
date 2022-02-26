const app = document.getElementById("app")
function Interruttore(props) {
  const { title } = props
  const [isAcceso, setIsAcceso] = React.useState(false) //?
  const statoBottone = isAcceso ? "ACCESO" : "SPENTO"
  function PremiInterruttore() {
    setIsAcceso(!isAcceso)
  }
  return (
    <div>
      <div class="popover popover-right">
        <button class="btn btn-primary">right popover</button>
        <div class="popover-container card">
          <div class="card-body">
            {title}
            <br></br>
            {statoBottone}
          </div>
        </div>
      </div>
      <br></br>
      <button onClick={PremiInterruttore}>ciao</button>
    </div>
  )
}
function For() {
  const arr = []
  for (let i = 0; i < 3; i++) {
    arr.push(<Interruttore title={i} />)
  }
  return (<div>{arr}</div>)
}
ReactDOM.render(
  <For />
  , app
)