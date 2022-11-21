import Navigation from './Components/Navigation'
import Hero from './Components/Hero'
import Benefits from './Components/Benefits'
import Articles from './Components/Articles'
import Footer from './Components/Footer'
import './Styles/Global.css'

// TODO:: INTERSECTION OBSERVER, ADD ANIMATION ON SCROLL

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
