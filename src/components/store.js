import React from 'react';
import Tiles from './tiles';
import '../styles/store.scss';
import { connect } from 'react-redux';
import { addToCart } from '../redux/actions/cartActions';


const Store = ({ items, ...props }) => {

    console.log(props);
    const RenderTiles = () => {
            return items.map((image, id) => <Tiles key={id} handleClick={props.addToCart} itemId={id} title={image.title} image={image.imageUrl} />) 
    }

    return (
        <div className="store-wrapper">
            {
                RenderTiles()
            }
        </div>
    )
}

const mapStateToProps = (state)=>{
    return {
      items: state.items
    }
  }
const mapDispatchToProps= (dispatch)=>{
    return{
        addToCart: (id)=>{dispatch(addToCart(id))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Store);