import React from 'react'
import { Link } from 'react-router-dom'

function Category() {
    return (
        <div>
            <div className="container text-center">
                <div className="row my-5">
                    <div className="col my-2">
                    <h2>Standard Mode</h2>
                        <img style={{ height: '300px', width: '300px' }} src="nighttime.jpeg" alt="nighttime" />
                        <button className='button my-2' type="button" >VOTE</button>
                    </div>
                    
                    <div className="col my-2" >
                    <h2>Selfie Mode</h2>
                        <img style={{ height: '300px', width: '300px' }} src="nighttime.jpeg" alt="nighttime" />
                        <Link className='button my-2' to="/selectImage" >VOTE</Link>
                    </div>
                    
                    <div className="col my-2" >
                    <h2>Standard Mode</h2>
                        <img style={{ height: '300px', width: '300px' }} src="nighttime.jpeg" alt="nighttime" />
                        <button className='button my-2' type="button" >VOTE</button>
                    </div>
                </div>
               
                <div className="row my-5">
                    <div className="col my-2">
                        <h2>Standard Mode</h2>
                        <img style={{ height: '300px', width: '300px' }} src="nighttime.jpeg" alt="nighttime" />
                        <button className='button my-2' type="button" >VOTE</button>
                    </div>
                    
                    <div className="col my-2" >
                    <h2>Standard Mode</h2>
                        <img style={{ height: '300px', width: '300px' }} src="nighttime.jpeg" alt="nighttime" />
                        <button className='button my-2' type="button" >VOTE</button>
                    </div>
                    
                    <div className="col my-2" >
                    <h2>Standard Mode</h2>
                        <img style={{ height: '300px', width: '300px' }} src="nighttime.jpeg" alt="nighttime" />
                        <button className='button my-2' type="button" >VOTE</button>
                    </div>
                </div>
                </div>
        </div>
    )
}

export default Category
