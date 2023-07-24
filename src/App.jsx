
import './App.css'
import Navbar from './component/navbar/navbar'
import Introdaction from './component/introdaction/Introdoction'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css'
import Apply from './component/Applyintro/Apply'
import Cards from './component/Applyintro/cardsapi'
function App() {
  return (
    <>
      <Navbar />
      <Introdaction />
      <Apply/>
      <Cards/>
    </>
  )
}

export default App
