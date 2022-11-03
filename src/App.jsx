
import './App.css'
import Topbar from './components/topbar/Topbar'
import Testimonials from './components/testimonials/Testimonials'
import Portfolio from './components/portfolio/Portfolio'
import Works from './components/works/Works'
import Intro from './components/intro/Intro'
import Contact from './components/contact/Contact'

function App() {

  return (
    <div className="app">
    <Topbar style={{backgroundColor:'red'}}/>
      <div className="sections">
    <Intro/>
    <Portfolio/>
    <Works/>
    <Testimonials/>
    <Contact/>
      </div>
    </div>
  )
}

export default App
