import Navigation from './Components/Navigation'
import Hero from './Components/Hero'
import Benefits from './Components/Benefits'
import Articles from './Components/Articles'
import Footer from './Components/Footer'
import './Global.css'

function App() {
  return (
    <div className="App">
      <Navigation imageUrl={'./images/'} />
      <Hero />
      <Benefits imageUrl={'./images/'} />
      <Articles imageUrl={'./images/'} />
      <Footer imageUrl={'./images/'} />
    </div>
  )
}

export default App
