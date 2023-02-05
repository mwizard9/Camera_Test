import React from 'react'

const SelectImage = () => {
    const imagesArray = [
        'image/img-1.jpg',
        'image/img-2.jpg',
        'image/img-3.jpg',
        'image/img-4.jpg',
        'image/pack.jpg',
        'image/veld.jpg',
        'image/blank.jpg',
        'image/daytime.jpeg',
        'image/nighttime.jpeg',
        'image/portait.jpeg',

    ];
    var usedImages = {};
    var usedImagesCount = 0;

    const displayImage=()=> {

        const num = Math.floor(Math.random() * (imagesArray.length));
        const num2 = Math.floor(Math.random() * (imagesArray.length));


        if (!usedImages[num] && num !== num2) {
            document.canvas.src = imagesArray[num];
            document.canva.src = imagesArray[num2];
            usedImages[num] = true;

            usedImagesCount++;
            if (usedImagesCount === imagesArray.length) {
                usedImagesCount = 0;
                usedImages = {};
            }
        } else {
            displayImage();
        }
    }
  return (
  
    <>
    <div>
 



    <form name="imageForm">


        <div class="container mx-3 my-3 d-flex flex-row">
            <div class="mx-3 my-3">
                <img onclick={displayImage} src="image/blank.jpg" alt='canvas' name="canvas"
                    style={{height: '500px',width: '500px'}}/><br/>
                <span class="thumb">thumb_up</span>
            </div>
            <div>
                <img onclick={displayImage} src="image/img-1.jpg" alt='canva' name="canva"
                    style={{height: '500px',width: '500px'}}/><br/>
                <span class="thumb">thumb_up</span>
            </div>
        </div>


    </form>
    
    </div>
    </>
  )
}

export default SelectImage
