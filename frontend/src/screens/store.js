import React, { useEffect } from 'react'
import Tiles from '../components/tiles'
import '../styles/store.scss'
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../redux/actions/productActions'

const Store = () => {
  const productList = useSelector(state => state.productList);
  const { products, loading, error } = productList;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch])
  const RenderTiles = (products) => {
    return loading ? <>loading...</> :  products.map((product) =>
            <Tiles
                key={product._id}
                itemId={product._id}
                title={product.title}
                image={product.imageUrl}
                />
            )
  }

  return (
        <div className="store-wrapper">
            <div className="store-banner">
                <img src="/assets/cctv-assets/shop-image.jpg" alt="Shop" />
            </div>
            {
               loading && products.length === 0 ? <div>loading....</div> : error ?  <div>{error}</div> : RenderTiles(products)
            }
        </div>
  )
}

export default Store;
