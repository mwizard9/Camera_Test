import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const SelectImage = () => {
    const [imagesArray, setImagesArray] = useState([
       {id:1,url: 'three.jpeg',count:0},
       {id:2,url: 'nighttime.jpeg',count:0},
       {id:3,url: 'portait.jpeg',count:0},
       {id:4,url: 'pack.jpg',count:0},
       {id:5,url: 'shiva.jpg',count:0},
    ]);
    var usedImages = {};
    var usedImagesCount = 0;

    const displayImage = () => {
        const num = Math.floor(Math.random() * imagesArray.length);
        const num2 = Math.floor(Math.random() * imagesArray.length);
    
        if (!usedImages[num] && num !== num2) {
            const selectedImage = imagesArray[num];
            const updatedImagesArray = imagesArray.map(image => {
                if (image.id === selectedImage.id) {
                    return { ...image, count: image.count + 1 };
                } else {
                    return image;
                }
            });
    
            setImagesArray(updatedImagesArray);
            document.canvas.src = selectedImage.url;
            document.canva.src = imagesArray[num2].url;
            usedImages[num] = true;
    
            usedImagesCount++;
            if (usedImagesCount === imagesArray.length) {
                usedImagesCount = 0;
                usedImages = {};
            }
        } else {
            displayImage();
        }
    };

    return (

        <>
            <div className='container'>

                <div className="container mx-3 my-5 d-flex flex-row">
                    
                    <div className="container">
                        <img onClick={displayImage} src="daytime.jpeg" alt='canvas' name="canvas"
                            style={{ height: '500px', width: '500px' }} /><br />
                            
                           {imagesArray.map((image)=>( 
                            <div className="container" key={image.id}>
                                <p>Count: {image.count}</p>
                           </div>
                            ))}
                        
                    </div>
                   
                    
                    <div className='container'>
                        <img onClick={displayImage} src="nighttime.jpeg" alt='canva' name="canva"
                            style={{ height: '500px', width: '500px' }} /><br />
                            {imagesArray.map((image)=>(
                             <div className="container" key={image.id}>
                                <p>Count: {image.count}</p>
                                </div>
                            ))}
                       
                    </div>
                </div>
                <Link className='button my-2' to="/selectImage" >Submit</Link>

            </div>
        </>
    )
}

export default SelectImage
