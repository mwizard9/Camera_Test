import React from 'react'

const SelectImage = () => {
    const imagesArray = [
        'img-1.jpg',
        'img-2.jpg',
        'img-3.jpg',
        'img-4.jpg',
        'pack.jpg',
        'veld.jpg',
        'blank.jpg',
        'daytime.jpeg',
        'nighttime.jpeg',
        'portait.jpeg',

    ];
    var usedImages = {};
    var usedImagesCount = 0;

    const displayImage = () => {

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
            <div className='container'>

                <div className="container mx-3 my-5 d-flex flex-row">
                    <div className="container">
                        <img onClick={displayImage} src="blank.jpg" alt='canvas' name="canvas"
                            style={{ height: '500px', width: '500px' }} /><br />
                        
                    </div>
                    <div className='container'>
                        <img onClick={displayImage} src="img-1.jpg" alt='canva' name="canva"
                            style={{ height: '500px', width: '500px' }} /><br />
                       
                    </div>
                </div>

            </div>
        </>
    )
}

export default SelectImage
