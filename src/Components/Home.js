import React from 'react'

function Home() {
    return (

        <div id="carouselExampleInterval" class="container carousel slide" style={{backgroundColor:'black'}}data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active" style={{}}data-bs-interval="3000">
            <img src="favicon.png"  alt="..."/>
          </div>
          <div class="carousel-item" data-bs-interval="3000">
            <img src="favicon.png"  alt="..."/>
          </div>
          <div class="container carousel-item" data-bs-interval="3000">
            <img src="three.jpeg" style={{height:'512px'}}  alt="..."/>
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
    )
}

export default Home
