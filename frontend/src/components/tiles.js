import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/tiles.scss'

const Tiles = ({ ...props }) => {
  const [toggle, setToggle] = useState(false)
console.log(props);
  return (
        <div className="tiles-wrapper" >
            <h3 className="tile-title">{props.title}</h3>
            <Link to={'/products/' + props.itemId}>
                <img className="tile-image"
                    src={toggle ? props.image.back : props.image.front}
                    onClick={() => setToggle(!toggle)}/>
            </Link>
        </div>
  )
}

export default Tiles
