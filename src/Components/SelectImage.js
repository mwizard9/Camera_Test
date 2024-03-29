import { Button } from "antd";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate, useRoutes } from "react-router-dom";

const SelectImage = () => {
  const navigate = useNavigate();
  const [clickedImages, setClickedImages] = useState([]);
  const [imagesArray, setImagesArray] = useState([
    { id: 1, url: "himal_portait.jpg", win: 0, lose: 0, name: "Vivo Y20" },
    {
      id: 2,
      url: "prashant_portait.jpg",
      win: 0,
      lose: 0,
      name: "Redmi Note 7pro",
    },
    {
      id: 3,
      url: "saku_portait.jpg",
      win: 0,
      lose: 0,
      name: "Samsung Galaxy M21",
    },
    {
      id: 4,
      url: "sarup_portait.jpg",
      win: 0,
      lose: 0,
      name: "Redmi Note 11 pro",
    },
    {
      id: 5,
      url: "sudan_portait.jpg",
      win: 0,
      lose: 0,
      name: "Samsung Galaxy A50",
    },
   
  ]);

  var usedImages = {};
  var usedImagesCount = 0;
  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("usertoken"));
    if (user === null) {
      navigate("/login");
    }
  }, []);

  const handleSubmit = () => {
    const dataToSend = imagesArray.map(({ id, win, lose, name }) => ({
      id,
      win,
      lose,
      name,
    }));
    setTimeout(() => {
      navigate("/result", {
        state: { data: dataToSend },
      });
    });
  };

  const displayImage = async (clickedIndex) => {
    if (clickCount === imagesArray.length) {
      setImagesArray(imagesArray.map((image) => ({ ...image, win: 0, lose: 0 })));
      setClickCount(0);
    }
  
    const selectedImageIndex = Math.floor(Math.random() * imagesArray.length);
    let nonClickedIndex;
    do {
      nonClickedIndex = Math.floor(Math.random() * imagesArray.length);
    } while (nonClickedIndex === selectedImageIndex);
  
    const selectedImage = imagesArray[selectedImageIndex];
    const nonClickedImage = imagesArray[nonClickedIndex];
  
    const updatedImagesArray = imagesArray.map((image, index) => {
      if (index === nonClickedIndex) {
        return { ...image, lose: image.lose + 1 };
      } else if (index === selectedImageIndex) {
        return { ...image, win: image.win + 1 };
      } else {
        return image;
      }
    });
  
    setImagesArray(updatedImagesArray);
    setClickCount(clickCount + 1);
  
    document.getElementsByName("canvas")[0].src = selectedImage.url;
    document.getElementsByName("canva")[0].src = nonClickedImage.url;
  };

  const user = JSON.parse(localStorage.getItem("usertoken"));

  return (
    <>
      <div className="container">
        <h3>
          Welcome <span style={{ color: "red" }}>{user?.name}</span>, You can
          vote below by clicking image
        </h3>
        <div className="container mx-3 my-5 d-flex flex-row">
          <div className="container">
            <img
              onClick={() => displayImage(0)}
              src={imagesArray[0].url}
              alt="canvas"
              name="canvas"
              style={{ height: "500px", width: "500px", cursor: "pointer" }}
            />
            </div>
            <div className="container">

            <img
              onClick={() => displayImage(1)}
              src={imagesArray[1].url}
              alt="canva"
              name="canva"
              style={{ height: "500px", width: "500px", cursor: "pointer" }}
            />
          </div>
        </div>
        <Button
          style={{ marginBottom: "20px" }}
          onClick={handleSubmit}
          disabled={clickCount < 10}
        >
          Submit
        </Button>
      </div>
    </>
  );
};

export default SelectImage;
