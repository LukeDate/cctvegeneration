import React from 'react';
import Tiles from './tiles';
import '../styles/store.scss';

const Store = () => {

    let Images = [
        {
            "title":"T-Shirt",
            "imageUrl": {
                "front": "/assets/cctv-assets/front.jpg",
                "back": "/assets/cctv-assets/back.jpg"
            }

        }
    ]

    const RenderTiles = () => {
        let tiles = [];
        
        for(var i = 0; i <= 24; i++) {
            tiles.push(<Tiles title={Images[0].title} image={Images[0].imageUrl} />)
        }

        return tiles;
        
    }

    return (
        <div className="store-wrapper">
            {
                RenderTiles()
            }
        </div>
    )
}

export default Store;