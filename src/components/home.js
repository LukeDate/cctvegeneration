import React, { useEffect, useState } from 'react';
import '../styles/home.scss'

const Home = () => {

    let imageList = [
        'DSC_0163bw.jpg', 
        'DSC_0249bw.jpg',
        'DSC_0263.jpg', 
        'skateboard_bw.jpg'
    ];

    let [currentImage, changeImage] = useState(0);

    const renderImage = (src, id) => (
    <>
    {console.log('id', id)}
    <img id={`image-id-${id}`} className={`splash-image-${id}`} src={`/assets/cctv-assets/${src}`} />
    </>
    )
    
    let setImageIndex = () => {
        if(currentImage === 3) {
            changeImage(currentImage = 0);
        } else {
            changeImage(currentImage += 1);
        }
    }

    useEffect(() => {
        setInterval(() => { setImageIndex() }, 4000)
    }, []);

    return (
        <div className="home-wrapper">
            {
                renderImage(imageList[currentImage], currentImage)
            }
        </div>
    )
}

export default Home;