import React from 'react'

function Home() {
    return (

        <div id="carouselExampleInterval" class="container carousel slide" style={{backgroundColor:'black',justifyContent:'center'}}data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active" style={{}}data-bs-interval="2000">
            <img src="favicon.png" class="d-block w-20" alt="..."/>
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img src="favicon.png" class="d-block w-20" alt="..."/>
          </div>
          <div class="container carousel-item">
            <img src="three.jpeg" style={{height:'520px'}} class="d-block w-20" alt="..."/>
          </div>
        </div>
      </div>
    )
}

export default Home
