import React from 'react'
import { Link } from 'react-router-dom'

function Category() {
    return (
        <div>
            <div className="container text-center">
                <div className="row my-5">
                    <div className="col my-2">
                    <h2>Standard Mode</h2>
                        <img style={{ height: '400px', width: '400px' }} src="nighttime.jpeg" alt="nighttime" /><br/>
                        <Link className='button my-2' to="/login" >VOTE</Link>
                    </div>
                    
                    <div className="col my-2" >
                    <h2>Selfie Mode</h2>
                        <img style={{ height: '400px', width: '400px' }} src="nighttime.jpeg" alt="nighttime" /><br/>
                        <Link className='button my-2' to="/login" >VOTE</Link>
                    </div>
                    
                  
                    
                </div>
               
                <div className="row my-5">
                    <div className="col my-2">
                        <h2>LowLight Mode</h2>
                        <img style={{ height: '400px', width: '400px' }} src="nighttime.jpeg" alt="nighttime" /><br/>
                        <Link className='button my-2' to="/login" >VOTE</Link>
                    </div>
                    
                    <div className="col my-2" >
                    <h2>Portait Mode</h2>
                        <img style={{ height: '400px', width: '400px' }} src="nighttime.jpeg" alt="nighttime" /><br/>
                        <Link className='button my-2' to="/login" >VOTE</Link>
                    </div>
                    
                   
                </div>
                </div>
        </div>
    )
}

export default Category
