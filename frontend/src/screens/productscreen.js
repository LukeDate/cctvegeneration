import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import { addToCart } from '../redux/actions/cartActions'
import { detailsProduct } from '../redux/actions/productActions'
import '../styles/productscreen.scss'

const ProductScreen = () => {
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const productDetails = useSelector(state => state.productDetails);
  const [qty, setQty] = useState(1);
  const { product, loading, error } = productDetails;
  
  useEffect(() => {
    dispatch(detailsProduct(id));
  },[dispatch, id]);
  const handleAddToCart = () => {
    dispatch(addToCart(id, qty));
    history.push("/basket/" + id + "?qty=" + qty);
  }

  const renderDropDown = () => {
    return !loading && [...Array(product.product.countInStock).keys()].map(x => <option value={x+1}>{x+1}</option>)  
  }
  console.log(product, loading, error);
  return (
        <div className="product-wrapper">
          {
          loading ? <div>loading......</div> : error ? <div>{error}</div> : 
          <>
            <div className="product-image">
                <img src={product.product.imageUrl && product.product.imageUrl.front} />
            </div>
            <div className="product-details">
                <div>{product.title}</div>
            </div>
            <div className="product-add-to-basket">
                <div>
                    Price: {product.product.price}
                </div>
                <div>
                    Status: {product.product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                </div>
                <div>
                Qty: <select value={qty} onChange={(e) => setQty(e.target.value)}>{renderDropDown()}</select>
                </div>
                {
                  product.product.countInStock > 0 && 
                  <button className="add-basket"
                  onClick={() => handleAddToCart()}
              >Add to basket</button>
                }
            </div>
            </>
}
        </div>
  )
}

export default ProductScreen;
