import React, { useState } from 'react';
import '../styles/tiles.scss';

const Tiles = ({ ...props }) => {
    
    const [toggle, setToggle] = useState(false);


    return (
        <div className="tiles-wrapper" >
            <h3 className="tile-title">{props.title}</h3>
            <img className="tile-image" 
                src={toggle ? props.image.back : props.image.front} 
                onClick={() => setToggle(!toggle)}/>
            <button className="add-basket"
                onClick={() => props.handleClick(props.itemId)}
            >Add to basket</button>
        </div>
    )
}

export default Tiles;