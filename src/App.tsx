import './App.css'
import Chrome from './browser/chrome/chrome'
import { RBO } from './projects/RBO/RBO'

function App() {
  const browser = new Chrome()
  return (
    <div className="app">
      <RBO browser={browser}/>
    </div>
  )
}

export default App
