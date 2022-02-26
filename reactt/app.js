const app = document.getElementById("app")
function Section() {
  return (
    <section className="banner style1 orient-left content-align-left image-position-right fullscreen onload-image-fade-in onload-content-fade-right">
      <div className="content">
        <h1>Story</h1>
        <p className="major">A (modular, highly tweakable) responsive one-page template designed by <a href="https://html5up.net">HTML5 UP</a> and released for free under the <a href="https://html5up.net/license">Creative Commons</a>.</p>
        <ul className="actions stacked">
          <li><a href="#first" className="button big wide smooth-scroll-middle">Get Started</a></li>
        </ul>
      </div>
      <div className="image">
        <img src="images/banner.jpg" alt="" />
      </div>
    </section>
  )
}
function Messaggio(props) {
  const { titolo } = props
  // const titolo = props.titolo
  console.log(props)
  return (
    <div>
      <h3>{titolo}</h3>
      <p>a tutti</p>
    </div>
  )
}
function Footer() {
  return (
    <footer class="wrapper style1 align-center">
      <div class="inner">
        <ul class="icons">
          <li><a href="#" class="icon brands style2 fa-twitter"><span class="label">Twitter</span></a></li>

        </ul>
        <p>&copy; Untitled. Design: <a href="https://html5up.net">HTML5 UP</a>.</p>
      </div>
    </footer>
  )
}
/*function App() {
  return (
    <div>
      <h2>prova 2</h2>
      <Section />
      <Section />
      <Messaggio titolo="prova" />
      <Footer />
    </div>
  )
}
ReactDOM.render(<App />, app)
*/