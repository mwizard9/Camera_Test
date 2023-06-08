// import { Button, Card, List } from "antd";
// import React, { useEffect } from "react";
// import { useState } from "react";
// import { Link, useNavigate, useRoutes } from "react-router-dom";

// const SelectImageSt = () => {
//   const navigate = useNavigate();
//   const [images, setImages] = useState([]);
//   const [clickedImages, setClickedImages] = useState([]);
//   const [imagesArray, setImagesArray] = useState([
//     { id: 1, url: "three.jpeg", win: 0, lose: 0,name:"iphone11"},
//     { id: 2, url: "nighttime.jpeg", win: 0, lose: 0,name:"Samsung M22"},
//     { id: 3, url: "portait.jpeg", win: 0, lose: 0,name:"Relme Note7"},
//     { id: 4, url: "pack.jpg", win: 0, lose: 0,name:"Vivo Y-20"},
//     { id: 5, url: "shiva.jpg", win: 0, lose: 0,name:"Mi"},
//   ]);
//   useEffect(() => {
//     fetch('http://localhost:5000/api/image/fetchallimages')
//       .then((res) => res.json())
//       .then((data) => setImages(data))
//       .catch((error) => {
//         console.error(error);
//       });
//   }, []); useEffect(() => {
//     fetch('http://localhost:5000/api/image/fetchallimages')
//       .then((res) => res.json())
//       .then((data) => setImages(data))
//       .catch((error) => {
//         console.error(error);
//       });
//   }, []);
//   const imageList = images.map((singleData) => {
//     const url = URL.createObjectURL(
//       new Blob([new Uint8Array(singleData.image.data.data)], { type: 'image/png' })
//     );
  
//     return (
//       <List.Item key={singleData._id}>
//         <Card
//           cover={<img src={url} alt={singleData.name} style={{ height: '300px', width: '300px' }} />}
         
//         >
//         </Card>
//       </List.Item>
//     );
//   });
//   console.log(imageList,'this is list of images')
 
   
//   var usedImages = {};
//   var usedImagesCount = 0;
//   useEffect(() => {
//     const user = JSON.parse(localStorage.getItem("usertoken"));
//     if (user===null) {
//       navigate("/login");
//     }
//   }, []);

//   // const user = JSON.parse(localStorage.getItem("usertoken"));
//   // if(user==null){
//   //   return navigate("/login")
//   //  }
//   const handleSubmit = () => {
//     const dataToSend = imagesArray.map(({ id, win, lose,name }) => ({ id, win, lose,name }));
//     setTimeout(() => {
//         navigate("/result", {
//           state: { data: dataToSend },
//         });
//       });
//   }

//   const handleLogout = () => {
//     localStorage.clear();
//     navigate("/login")
//   }

//   const displayImage = () => {
//     if (clickedImages.length === imagesArray.length) {
//       setClickedImages([]);
//       setImagesArray(
//         imagesArray.map((image) => ({ ...image, win: 0, lose: 0 }))
//       );
//     }

//     let num = Math.floor(Math.random() * imagesArray.length);
//     let num2 = Math.floor(Math.random() * imagesArray.length);

//     if (!usedImages[num] && num !== num2) {

//       const selectedImage = imagesArray[num];
//       const nonClickedImage = imagesArray[num2];

//       const updatedImagesArray = imagesArray.map((image, index) => {
//         console.log(image.id,"this is image")
//         console.log(selectedImage.id,"clicked image id")
//         console.log(nonClickedImage.id,'non clicked image')
        
//         if (index === num && image.id === selectedImage.id) {
//           return { ...image, win: image.win + 1 };
//         } else if (index === num2 && image.id ===nonClickedImage.id) {
//           return { ...image, lose: image.lose + 1 };
//         } else {
//           return image;
//         }
//       });
    

//     setImagesArray(updatedImagesArray);
//     setClickedImages([...clickedImages, num]);

//     document.getElementsByName("canvas")[0].src = selectedImage.url;
//     document.getElementsByName("canva")[0].src = nonClickedImage.url;
//   }};
//   const user = JSON.parse(localStorage.getItem("usertoken"));
  
//   // console.log(user.name,'this is user name')

//   return (
//     <>
//       <div className="container">
//         <h1>this is for standard</h1>
//       {/* <Button onClick={handleLogout}>Logout</Button> */}
//         <h3>Welcome <spam style={{color:'red'}}>{user?.name}</spam>, You can vote below by clicking image</h3>
//         <div className="container mx-3 my-5 d-flex flex-row">
//           <div className="container">
//             <img
//               onClick={displayImage}
//               src="daytime.jpeg"
//               alt="canvas"
//               name="canvas"
//               style={{ height: "500px", width: "500px",cursor:"pointer" }}
//             />
//             {imagesArray.map((image) => (
//               <div className="container" key={image.id}>
//                 <p>Win: {image.win}</p>
//                 <p>Lose: {image.lose}</p>
//               </div>
//             ))}
//           </div>

//           <div className="container">
//             <img
//               onClick={displayImage}
//               src="nighttime.jpeg"
//               alt="canva"
//               name="canva"
//               style={{ height: "500px", width: "500px",cursor:"pointer" }}
//             />
//             {imagesArray.map((image) => (
//               <div className="container" key={image.name}>
//                 <p>Id: {image.id}</p>
//                 <p>Name: {image.name}</p>
//                 <p>Win: {image.win}</p>
//                 <p>Lose: {image.lose}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//         <Button onClick={handleSubmit}>Submit</Button>
//       </div>
//     </>
//   );
// };

// export default SelectImageSt
import React, { useEffect, useState } from 'react';
import { Button, Card, List } from 'antd';
import { useNavigate } from 'react-router-dom';

const SelectImageSt = () => {
  const navigate = useNavigate();
  const [clickedImages, setClickedImages] = useState([]);
  const [imagesArray, setImagesArray] = useState([]);

  const fetchAllImages = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/image/fetchallimages');
      const data = await response.json();
      setImagesArray(data);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('usertoken'));
    if (user === null) {
      navigate('/login');
    } else {
      fetchAllImages();
    }
  }, [navigate]);

  const handleSubmit = () => {
    const dataToSend = imagesArray.map(({ id, win, lose, name }) => ({ id, win, lose, name }));
    setTimeout(() => {
      navigate('/result', {
        state: { data: dataToSend },
      });
    });
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  };

  const displayImage = () => {
    if (clickedImages.length === imagesArray.length) {
      setClickedImages([]);
      setImagesArray(
        imagesArray.map((image) => ({
          ...image,
          win: 0,
          lose: 0,
        }))
      );
    }

    let num = Math.floor(Math.random() * imagesArray.length);
    let num2 = Math.floor(Math.random() * imagesArray.length);

    if (!clickedImages.includes(num) && num !== num2) {
      const selectedImage = imagesArray[num];
      const nonClickedImage = imagesArray[num2];

      const updatedImagesArray = imagesArray.map((image, index) => {
        if (index === num && image.id === selectedImage.id) {
          return { ...image, win: image.win + 1 };
        } else if (index === num2 && image.id === nonClickedImage.id) {
          return { ...image, lose: image.lose + 1 };
        } else {
          return image;
        }
      });

      setImagesArray(updatedImagesArray);
      setClickedImages([...clickedImages, num]);
    }
  };

  const user = JSON.parse(localStorage.getItem('usertoken'));

  return (
    <>
    <div className="container">
      <h3>
        Welcome <span style={{ color: 'red' }}>{user?.name}</span>, You can vote below by clicking an image
      </h3>
      <div className="container mx-3 my-5 d-flex flex-row">
        {imagesArray.map((image, index) => (
          <div key={image.id}>
            <img
              onClick={displayImage}
              src={`data:${image.image.contentType};base64,${image.image.data}`}
              alt={`Image ${index}`}
              style={{ height: '500px', width: '500px', cursor: 'pointer' }}
            />
            <div className="container">
              <p>Id: {image.id}</p>
              <p>Name: {image.name}</p>
              <p>Win: {image.win}</p>
              <p>Lose: {image.lose}</p>
            </div>
          </div>
        ))}
      </div>
    
    </div>
    <List
  grid={{ gutter: 16, column: 4 }} // Set the number of columns and gutter space
  dataSource={imagesArray.length > 0 ? [imagesArray[1]] : []} // Check if imagesArray has at least one element
  renderItem={(singleData) => {
    const url = URL.createObjectURL(
      new Blob([new Uint8Array(singleData.image.data.data)], { type: 'image/png' })
    );

    return (
      <List.Item>
        <Card
          cover={<img src={url} alt={singleData.name} style={{ height: '300px', width: '300px' }} />}
        >
          {/* Render additional content if needed */}
        </Card>
      </List.Item>
    );
  }}
/>
    </>
  );
};

export default SelectImageSt;
