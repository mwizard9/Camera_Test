import React from 'react'

function Home() {
  return (
<>    <div id="carouselExampleInterval" class="container carousel slide my-5" style={{ backgroundColor: 'black' }} data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="3000">
          <img src="nighttime.jpeg" style={{ height: '400px', width: '400px' }} alt="..." />
        </div>
        <div class="carousel-item" data-bs-interval="3000">
          <img src="daytime.jpeg" style={{ height: '400px', width: '400px' }} alt="..." />
        </div>
        <div class="container carousel-item" data-bs-interval="3000">
          <img src="portait.jpeg" style={{ height: '400px', width: '400px' }} alt="..." />
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <div className="container my-2">
    <a class="button" href="/">Start</a>
    </div>
    </>

  )
}


export default Home
