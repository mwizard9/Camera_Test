import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const SelectImage = () => {
  const [clickedImages, setClickedImages] = useState([]);
  const [imagesArray, setImagesArray] = useState([
    { id: 1, url: "three.jpeg", win: 0, lose: 0 },
    { id: 2, url: "nighttime.jpeg", win: 0, lose: 0 },
    { id: 3, url: "portait.jpeg", win: 0, lose: 0 },
    { id: 4, url: "pack.jpg", win: 0, lose: 0 },
    { id: 5, url: "shiva.jpg", win: 0, lose: 0 },
  ]);
  var usedImages = {};
  var usedImagesCount = 0;
  //   const displayImage = () => {
  //     const num = Math.floor(Math.random() * imagesArray.length);
  //     const num2 = Math.floor(Math.random() * imagesArray.length);

  //     if (!usedImages[num] && num !== num2) {
  //         const selectedImage = imagesArray[num];
  //         const updatedImagesArray = imagesArray.map(image => {
  //             if (image.id === selectedImage.id) {
  //                 return { ...image, count: image.count + 1 };
  //             } else {
  //                 return image;
  //             }
  //         });

  //         setImagesArray(updatedImagesArray);
  //         document.canvas.src = selectedImage.url;
  //         document.canva.src = imagesArray[num2].url;
  //         usedImages[num] = true;

  //         usedImagesCount++;
  //         if (usedImagesCount === imagesArray.length) {
  //             usedImagesCount = 0;
  //             usedImages = {};
  //         }
  //     } else {
  //         displayImage();
  //     }
  // };

  const displayImage = () => {
    if (clickedImages.length === imagesArray.length) {
      setClickedImages([]);
      setImagesArray(
        imagesArray.map((image) => ({ ...image, win: 0, lose: 0 }))
      );
    }

    let num = Math.floor(Math.random() * imagesArray.length);
    let num2 = Math.floor(Math.random() * imagesArray.length);

    if (!usedImages[num] && num !== num2) {

      const selectedImage = imagesArray[num];
      const nonClickedImage = imagesArray[num2];

      const updatedImagesArray = imagesArray.map((image, index) => {
        console.log(image.id,"this is image")
        console.log(selectedImage.id,"clicked image id")
        console.log(nonClickedImage.id,'non clicked image')
        
        if (index === num && image.id === selectedImage.id) {
          return { ...image, win: image.win + 1 };
        } else if (index === num2 && image.id ===nonClickedImage.id) {
          return { ...image, lose: image.lose + 1 };
        } else {
          return image;
        }
      });
    

    setImagesArray(updatedImagesArray);
    setClickedImages([...clickedImages, num]);

    document.getElementsByName("canvas")[0].src = selectedImage.url;
    document.getElementsByName("canva")[0].src = nonClickedImage.url;
  }};

  return (
    <>
      <div className="container">
        <div className="container mx-3 my-5 d-flex flex-row">
          <div className="container">
            <img
              onClick={displayImage}
              src="daytime.jpeg"
              alt="canvas"
              name="canvas"
              style={{ height: "500px", width: "500px" }}
            />
            {imagesArray.map((image) => (
              <div className="container" key={image.id}>
                <p>Win: {image.win}</p>
                <p>Lose: {image.lose}</p>
              </div>
            ))}
          </div>

          <div className="container">
            <img
              onClick={displayImage}
              src="nighttime.jpeg"
              alt="canva"
              name="canva"
              style={{ height: "500px", width: "500px" }}
            />
            {imagesArray.map((image) => (
              <div className="container" key={image.id}>
                <p>Id: {image.id}</p>
                <p>Win: {image.win}</p>
                <p>Lose: {image.lose}</p>
              </div>
            ))}
          </div>
        </div>
        <Link className="button my-2" to="/result">
          Submit
        </Link>
      </div>
    </>
  );
};

export default SelectImage;
