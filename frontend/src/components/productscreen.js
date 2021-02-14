import React from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addToCart } from '../redux/actions/cartActions'
import '../styles/productscreen.scss'

const ProductScreen = ({ item, ...props }) => {
  const { id } = useParams()

  const renderDropDown = () => {
    const options = []
    for (let i = 1; i < 20; i++) {
      options.push(<option value={i}>{i}</option>)
    }
    return options
  }
  return (
        <div className="product-wrapper">
            <div className="product-image">
                <img src={item[id].imageUrl.front} />
            </div>
            <div className="product-details">
                <div>{item[id].title}</div>
            </div>
            <div className="product-add-to-basket">
                <div>
                    Price: {item[id].price}
                </div>
                <div>
                    Status:
                </div>
                <div>
                    Qty: <select>{renderDropDown()}</select>
                </div>
                <button className="add-basket"
                onClick={() => props.addToCart(id)}
            >Add to basket</button>
            </div>

        </div>
  )
}

const mapStateToProps = (state) => {
  return {
    item: state.items
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => { dispatch(addToCart(id)) }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductScreen)
