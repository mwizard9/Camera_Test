import { Button } from 'antd'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Category() {
    const userToken = localStorage.getItem("usertoken");
    const navigate = useNavigate()
    const handleSTM = () => {
        if (userToken) {
            navigate('/selectImageSt')
        }
        else{
            navigate("/login", {
                state: { stm: "STMdata" },
              })
        }
        
    }
    const handleSM = () => {
        if (userToken) {
            navigate('/selectImage')
        }
        else{
        navigate("/login", {
            state: { sm: "SMdata" },
          })
        }
   }
    return (
        <div>
            <div className="container text-center">
                <div className="row my-5">
                    <div className="col my-2">
                    <h2>Standard Mode</h2>
                        <img style={{ height: '400px', width: '400px' }} src="Sarup_standard.jpg" alt="nighttime" /><br/>
                        <Button className='button my-2' onClick={handleSTM}>Vote</Button>
                        
                    </div>
                    
                    <div className="col my-2" >
                    <h2>Portrait Mode</h2>
                        <img style={{ height: '400px', width: '400px' }} src="prashant_portait.jpg" alt="nighttime" /><br/>
                        <Button className='button my-2' onClick={handleSM}>Vote</Button>
                       
                    </div>
                    
                  
                    
                </div>
               
                {/* <div className="row my-5">
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
                    
                   
                </div> */}
                </div>
        </div>
    )
}

export default Category
