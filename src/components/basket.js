import React from 'react';
import { connect } from 'react-redux';
import '../styles/basket.scss';
import { removeItem, addQuantity, subQuantity } from '../redux/actions/cartActions';

const Basket = ({ ...props }) => {
    const handleRemove = (id) => {
        props.removeItem(id);
    }

    const handleAddQuantity = (id) => {
        props.addQuantity(id)
    }

    const handleSubQuantity = (id) => {
        props.subQuantity(id)
    }
    
    const renderItems = () => {
        return props.items.map((item, id) => (
        <div key={id} className="basket-item-wrapper">
            <img className="basket-item" src={item.imageUrl.front} />
            <div>{props.items[id].quantity}</div>
            <button className="button-add" onClick={() => handleAddQuantity(item.id)}>+</button>
            <button className="button-remove" onClick={() => handleSubQuantity(item.id)}>-</button>
            <button className="button-delete" onClick={() => handleRemove(item.id)}>Remove from basket</button>
        </div>
        ))
    }

    return (
        <div className="basket-wrapper">
            {
                renderItems()
            }
        <div>Your total comes to: {props.total} Gazzer Dollars</div>
        </div>
    )
}

const mapStateToProps = (state)=>{
    return{
        items: state.addedItems,
        total: state.total
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeItem: (id) => { dispatch(removeItem(id)) },
        addQuantity: (id) => { dispatch(addQuantity(id)) },
        subQuantity: (id) => { dispatch(subQuantity(id)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Basket);