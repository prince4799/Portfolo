import './Portfolio.css'

function Portfolio() {
  return (
    <div className='portfolio'>
      <div className="headingcontainer">
        <h1 className='heading' >Portfolio</h1>
      </div>
      <ul className='lists'>
        <li>Mobile Apps</li>
        <li>Web Apps</li>
        <li>Designing</li>
      </ul>
      <div className="container">
        <div className="item">
          <img src="\src\assets\Images" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Portfolio;

