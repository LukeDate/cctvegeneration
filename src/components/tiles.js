import React, { useState } from 'react';
import '../styles/tiles.scss';

const Tiles = ({ ...props }) => {
    
    const [toggle, setToggle] = useState(false);

    return (
        <div className="tiles-wrapper" onClick={() => setToggle(!toggle)}>
                <h3 className="tile-title">{props.title}</h3>
                <img className="tile-image" src={toggle ? props.image.back : props.image.front} />
        </div>
    )
}

export default Tiles;