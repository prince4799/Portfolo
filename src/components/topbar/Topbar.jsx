import './Topbar.css'
// import PersonIcon from '@mui/icons-material'
// import PersonIcon from '@mui/icons-material';
import { useState } from 'react';
// import Container from 'react-bootstrap/Container';
import {Navbar,Container,Figure} from 'react-bootstrap';


import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { Sling as Hamburger } from 'hamburger-react'

function Topbar() {

  const [switchToggle, setToggel] = useState(false)




  return (
    <Navbar bg="light" expand="lg" className='topbar' >
    <Container className='newstyle'>
      <div className='logo'>
          <h1 >♕.☧ℝ༐ℕℂ𝔼...</h1>
      </div>
        <Navbar.Collapse className="contactContainer">
        
       <div className='contact'>
         <PersonIcon 
         color= '#0b0b39df'
         
         style={{fontSize:24, alignSelf: 'center', justifyContent: 'center',}} />
         <a href="tel:555-666-7777"
          className='left'
          style={{backgroundColor:' rgba(11, 11, 57, 1)'}}
        >
          +91 9621205058</a>
      </div>
      <div className='contact'>
        <EmailOutlinedIcon style={{ alignSelf: 'center', justifyContent: 'center', }} />
        <a
          href="mailto: softprince4799@gmail.com"
          style={{backgroundColor:' rgba(11, 11, 57, 1)'}}
          className='left'>
          softprince4799@gmail.com</a>
    </div>
        </Navbar.Collapse>
        <div style={{minWidth:'5%',marginLeft:60,alignItems:'center',justifyContent:'center',display:'flex'}}>
     <Hamburger
       label="Show menu"
   
       size={40}
       rounded
       toggled={switchToggle}
       toggle={() => setToggel(!switchToggle)}
       color='#fff' />

   </div>
      </Container>
    
  </Navbar>
  )

}



export default Topbar

const styles = {
  logo: {
    height: '100%',
    fontWeight:'bold',
    color:"#fff",
  },
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    display: 'flex',
    width: '100%'
  },
}


// <div className='topbar'>
// <div className='newstyle'>
//   <div
//     style={styles.container}>
//     <h1 style={styles.logo}>♕.☧ℝ༐ℕℂ𝔼...</h1>
//     <div className='contactContainer'>
//       <div className='contact'>
//         <PersonIcon style={{ alignSelf: 'center', justifyContent: 'center', backgroundColor: 'rgba(11, 11, 57, 1)' }} />
//         <a href="tel:555-666-7777"
//           className='left'
//         >
//           +91 9621205058</a>
//       </div>
//       <div className='contact'>
//         <EmailIcon style={{ alignSelf: 'center', justifyContent: 'center', backgroundColor: 'rgba(11, 11, 57, 1)' }} />
//         <a
//           href="mailto: softprince4799@gmail.com"
//           className='left'>
//           softprince4799@gmail.com</a>
//       </div>
//     </div>
//     <div  style={{marginLeft:120}}>
//     <Hamburger
//       label="Show menu"
     
//       size={40}
//       rounded
//       toggled={switchToggle}
//       toggle={() => setToggel(!switchToggle)}
//       color='#fff' />

//   </div>
//   </div>

// </div>

// </div>