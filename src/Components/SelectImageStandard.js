// import { Button } from "antd";
// import React, { useEffect } from "react";
// import { useState } from "react";
// import { Link, useNavigate, useRoutes } from "react-router-dom";

// const SelectImage = () => {
//   const navigate = useNavigate();
//   const [clickCount, setClickCount] = useState(0);
//   const [clickedImages, setClickedImages] = useState([]);
//   const [imagesArray, setImagesArray] = useState([
//     { id: 1, url: "himal_standard.jpg", win: 0, lose: 0,name:"Vivo Y20"},
//     { id: 2, url: "prashant_standard.jpg", win: 0, lose: 0,name:"Redmi Note 7pro"},
//     { id: 3, url: "saku_standard.jpg", win: 0, lose: 0,name:"Samsung Galaxy M21"},
//     { id: 4, url: "Sarup_standard.jpg", win: 0, lose: 0,name:"Redmi Note 11 pro"},
//     { id: 5, url: "sudan_standard.jpg", win: 0, lose: 0,name:"Samsung Galaxy A50"},
//     {
//       id: 6,
//       url: "favicon.png",
//       win: 0,
//       lose: 0,
//       name: "Bibash",
//     },
//   ]);
 
   
//   var usedImages = {};
//   var usedImagesCount = 0;
//   //   const displayImage = () => {
//   //     const num = Math.floor(Math.random() * imagesArray.length);
//   //     const num2 = Math.floor(Math.random() * imagesArray.length);

//   //     if (!usedImages[num] && num !== num2) {
//   //         const selectedImage = imagesArray[num];
//   //         const updatedImagesArray = imagesArray.map(image => {
//   //             if (image.id === selectedImage.id) {
//   //                 return { ...image, count: image.count + 1 };
//   //             } else {
//   //                 return image;
//   //             }
//   //         });

//   //         setImagesArray(updatedImagesArray);
//   //         document.canvas.src = selectedImage.url;
//   //         document.canva.src = imagesArray[num2].url;
//   //         usedImages[num] = true;

//   //         usedImagesCount++;
//   //         if (usedImagesCount === imagesArray.length) {
//   //             usedImagesCount = 0;
//   //             usedImages = {};
//   //         }
//   //     } else {
//   //         displayImage();
//   //     }
//   // };
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

//   const displayImage = async (clickedIndex) => {
//     if (clickCount === imagesArray.length) {
//       setImagesArray(imagesArray.map((image) => ({ ...image, win: 0, lose: 0 })));
//       setClickCount(0);
//     }
  
//     const selectedImageIndex = Math.floor(Math.random() * imagesArray.length);
//     let nonClickedIndex;
//     do {
//       nonClickedIndex = Math.floor(Math.random() * imagesArray.length);
//     } while (nonClickedIndex === selectedImageIndex);
  
//     const selectedImage = imagesArray[selectedImageIndex];
//     const nonClickedImage = imagesArray[nonClickedIndex];
  
//     const updatedImagesArray = imagesArray.map((image, index) => {
//       if (index === nonClickedIndex) {
//         return { ...image, lose: image.lose + 1 };
//       } else if (index === selectedImageIndex) {
//         return { ...image, win: image.win + 1 };
//       } else {
//         return image;
//       }
//     });
  
//     setImagesArray(updatedImagesArray);
//     setClickCount(clickCount + 1);
  
//     document.getElementsByName("canvas")[0].src = selectedImage.url;
//     document.getElementsByName("canva")[0].src = nonClickedImage.url;
//   };

//   const user = JSON.parse(localStorage.getItem("usertoken"));
  
//   // console.log(user.name,'this is user name')

//   return (
//     <>
//       <div className="container">
//       {/* <Button onClick={handleLogout}>Logout</Button> */}
//         <h3>Welcome <spam style={{color:'red'}}>{user?.name}</spam>, You can vote below by clicking image</h3>
//         <div className="container mx-3 my-5 d-flex flex-row">
//         <div className="container">
//             <img
//               onClick={() => displayImage(0)}
//               src={imagesArray[0].url}
//               alt="canvas"
//               name="canvas"
//               style={{ height: "500px", width: "500px", cursor: "pointer" }}
//             />
//             </div>
//             <div className="container">

//             <img
//               onClick={() => displayImage(1)}
//               src={imagesArray[1].url}
//               alt="canva"
//               name="canva"
//               style={{ height: "500px", width: "500px", cursor: "pointer" }}
//             />
//           </div>
//         </div>
//         <Button style={{ marginBottom: "20px" }} onClick={handleSubmit} disabled={clickCount < 10}>
//           Submit
//         </Button>
//       </div>
//     </>
//   );
// };

// export default SelectImage;
import { Button } from "antd";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate, useRoutes } from "react-router-dom";

const SelectImage = () => {
  const navigate = useNavigate();
  const [clickedImages, setClickedImages] = useState([]);
  const [imagesArray, setImagesArray] = useState([
        { id: 1, url: "himal_standard.jpg", win: 0, lose: 0,name:"Vivo Y20"},
        { id: 2, url: "prashant_standard.jpg", win: 0, lose: 0,name:"Redmi Note 7pro"},
        { id: 3, url: "saku_standard.jpg", win: 0, lose: 0,name:"Samsung Galaxy M21"},
        { id: 4, url: "Sarup_standard.jpg", win: 0, lose: 0,name:"Redmi Note 11 pro"},
        { id: 5, url: "sudan_standard.jpg", win: 0, lose: 0,name:"Samsung Galaxy A50"},
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

