import './Intro.css'
import { useState, useRef, useEffect } from 'react'
import { Navbar, Container, Figure } from 'react-bootstrap';
import { init } from 'ityped';

function Intro() {

  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      backDelay: 1500,
      backSpeed: 60,
      strings: [" React Native ", "React.js ", "Node.js "],
      showCursor: false

    });
  }, []);

  return (
    <div className='newIntro' id='intro'>
      <div className="leftintro" id='left'>
        <div className="imgcontainer" id='imgcontainer'>
          <div class="outer circle" id='outer'>
            <img className='img' src="src/assets/Images/personIcon.png" />
          </div>
        </div>
      </div>

      <div className="rightintro">

        <h2 className='saluation'
          style={{ marginTop: "10%", fontSize: 35, height: 'auto', fontWeight: 'bold', }} >Hi! there I'm </h2>
        <h1 className='saluation h1'
          style={{ color: 'crimson', fontSize: 60, fontWeight: 'bold', height: 'auto', padding: 10, margin: 0 }} >PRINCE...</h1>
        <div style={{ color: '#000', display: 'flex', flexDirection: 'row', alignItems: 'flex-start', overflow: 'hidden' }}>
          <h3 style={{ width: 'auto', overflow: 'hidden' }}><span style={{ width: 'auto', height: 'auto', padding: 10,color:'crimson' }} ref={textRef}></span>
            Developer</h3>
        </div>

      </div>
    </div>
  )
}

export default Intro