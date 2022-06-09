import Blackhole from './components/Blackhole.jsx'
import Planet from './components/planet.jsx'
import './App.css'

function App() {

  function add() {
    const universe = document.querySelector('.universe');
    var p = document.createElement("<Planet>");
    document.body.appendChild(p);
  }

  return (
    <div className="screen">

      <div className="universe" onClick={add}>
        <Blackhole />

      </div>
    </div >
  )
}

export default App
