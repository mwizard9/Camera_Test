import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const SelectImage = () => {
    const [clickedImages, setClickedImages] = useState([]);
    const [imagesArray, setImagesArray] = useState([
        { id: 1, url: 'three.jpeg', win: 0, lose: 0 },
        { id: 2, url: 'nighttime.jpeg', win: 0, lose: 0 },
        { id: 3, url: 'portait.jpeg', win: 0, lose: 0 },
        { id: 4, url: 'pack.jpg', win: 0, lose: 0 },
        { id: 5, url: 'shiva.jpg', win: 0, lose: 0 },
      ]);
    var usedImages = {};
    var usedImagesCount = 0;

    const displayImage = () => {
        if (clickedImages.length === imagesArray.length) {
         
          setClickedImages([]);
          setImagesArray(
            imagesArray.map(image => ({ ...image, win: 0, lose: 0 }))
          );
        }
      
        let num = Math.floor(Math.random() * imagesArray.length);
        let num2 = Math.floor(Math.random() * imagesArray.length);
      
        while (clickedImages.includes(num) || num === num2) {
          num = Math.floor(Math.random() * imagesArray.length);
          num2 = Math.floor(Math.random() * imagesArray.length);
        }
      
        const selectedImage = imagesArray[num];
        const nonClickedImage = imagesArray[num2];
      
        const updatedImagesArray = imagesArray.map((image, index) => {
          if (index === num) {
            return { ...image, win: image.win + 1 };
          } else if (index === num2) {
            return { ...image, lose: image.lose + 1 };
          } else {
            return image;
          }
        });
      
        setImagesArray(updatedImagesArray);
        setClickedImages([...clickedImages, num]);
      
        document.getElementsByName('canvas')[0].src = selectedImage.url;
        document.getElementsByName('canva')[0].src = nonClickedImage.url;
      };

    return (

        <>
        <div className='container'>
          <div className='container mx-3 my-5 d-flex flex-row'>
            <div className='container'>
              <img
                onClick={displayImage}
                src='daytime.jpeg'
                alt='canvas'
                name='canvas'
                style={{ height: '500px', width: '500px' }}
              />
              {imagesArray.map(image => (
                <div className='container' key={image.id}>
                  <p>Win: {image.win}</p>
                  <p>Lose: {image.lose}</p>
                </div>
              ))}
            </div>
  
            <div className='container'>
              <img
                onClick={displayImage}
                src='nighttime.jpeg'
                alt='canva'
                name='canva'
                style={{ height: '500px', width: '500px' }}
              />
              {imagesArray.map(image => (
                <div className='container' key={image.id}>
                    <p>Id: {image.id}</p>
                  <p>Win: {image.win}</p>
                  <p>Lose: {image.lose}</p>
                </div>
              ))}
            </div>
          </div>
          <Link className='button my-2' to='/result'>
            Submit
          </Link>
        </div>
      </>
    )
}

export default SelectImage
