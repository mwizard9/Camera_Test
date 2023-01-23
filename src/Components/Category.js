import React from 'react'

function Category() {
    return (
        <div>
            <h1>Choose a Category to Vote</h1>
            <div class="grid-container" >

                <div class="grid-item my-1">
                    <h2 style={{ color: 'white' }}>Standard Mode</h2><br />
                    <img src="daytime.jpeg" alt="gunne" style={{ height: '350px', width: '350px' }} /><br />
                    <button className='button my-2' type="button" >VOTE</button>
                </div>

                <div class="grid-item my-1">
                    <h2 style={{ color: 'white' }}>Night Mode</h2><br />
                    <img src="nighttime.jpeg" alt="gunne" style={{ height: '350px', width: '350px' }} /><br />
                    <button className='button my-2' type="button" >VOTE</button>
                </div>

                <div class="grid-item my-1">
                    <h2 style={{ color: 'white' }}>Portait Mode</h2><br />
                    <img src="portait.jpeg" alt="gunne" style={{ height: '350px', width: '350px' }} /><br />
                    <button className='button my-2' type="button" >VOTE</button>
                </div>

                <div class="grid-item my-1">
                    <h2 style={{ color: 'white' }}>Selfie Mode</h2><br />
                    <img src="three.jpeg" alt="gunne" style={{ height: '350px', width: '350px' }} /><br />
                    <button className='button my-2' type="button" >VOTE</button>
                </div>
            </div>
        </div>
    )
}

export default Category
