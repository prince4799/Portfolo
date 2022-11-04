import './Intro.css'
import {Navbar,Container,Figure} from 'react-bootstrap';


function Intro() {
  return (
    <div className='newIntro' id='intro'>
     <div className="leftintro">
      <div className="imgcontainer">
        <img className='img' src="src/assets/Images/personIcon.png" />
      </div>
     </div>

     <div className="rightintro">
      <h2 style={{fontSize:24,alignSelf:'center', overflow:'hidden'}}>Hi! there I'm <h1 style={{fontSize:32,alignSelf:'center',color:'red'}}>PRINCE...</h1></h2>
     
     </div>
    </div>
  )
}

export default Intro