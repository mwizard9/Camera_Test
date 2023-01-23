import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
<>    <div id="carouselExampleInterval" className="container carousel slide my-5" style={{ backgroundColor: 'black' }} data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="3000">
          <img src="nighttime.jpeg" style={{ height: '400px', width: '400px' }} alt="..." />
        </div>
        <div className="carousel-item" data-bs-interval="3000">
          <img src="daytime.jpeg" style={{ height: '400px', width: '400px' }} alt="..." />
        </div>
        <div className="container carousel-item" data-bs-interval="3000">
          <img src="portait.jpeg" style={{ height: '400px', width: '400px' }} alt="..." />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    <div className="container my-2">
    <Link className="button" to="/category">Lets Go For vote</Link>
    </div>
    </>

  )
}


export default Home
