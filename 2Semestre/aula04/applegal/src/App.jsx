import Fruta from "./Fruta"
import Verdura from "./Verdura"
import Emoji from "./Emoji"
import "./estilos.css"

function App() {

  return (
    <>
      <h1 className="caixinhalegal">Oi gente</h1>
      <Fruta nome="Pera" emoji="Pera"/>
      <Verdura nome="Alface" emoji="Alface"/>
      <Fruta nome="Maçã" emoji="Maçã"/>
      <Fruta nome="Morango" emoji="Morango"/>
    </>
  )
}

export default App
