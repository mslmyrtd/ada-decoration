import { useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { useProductsContext } from '../context/products_context'
import { single_product_url as url } from '../utils/constants'
import {
  Loading,
  Error,
  PageHero,
  ProductImages,
  Stars,
  AddToCart,
} from '../components'
import { formatPrice } from '../utils/helpers'
import { IProduct } from '../types/globaltypes.types'
import Wrapper from '../assets/wrappers/SingleProductPage'


const SingleProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate()

  const { fetchSingleProduct, single_product_loading: loading, single_product_error: error, single_product: product, products } = useProductsContext()
  useEffect(() => {
    fetchSingleProduct(`${url}${id}`)
  }, [id])
  useEffect(() => {
    if (error) {
      setTimeout(() => {
        navigate("/")
      }, 3000);
    }
  }, [error])

  const { name, price, description, stock, stars, reviews, id: sku, company, images }: IProduct = product!
  if (loading) {
    return <Loading />
  }
  if (error) {
    return <Error />
  }

  return <Wrapper>
    <PageHero title={name} productName=" " />
    <div className="section section-center page">
      <Link to="/products" className='btn'>back to products</Link>
      <div className="product-center">
        <ProductImages images={images!} />
        <section className='content'>
          <h2>{name}</h2>
          <Stars stars={stars} reviews={reviews} />
          <h5 className='price'>{formatPrice(price)}</h5>
          <p className='desc'>{description}</p>
          <p className="info">
            <span>Available: </span>
            {stock > 0 ? "In stock" : "out of stock"}
          </p>
          <p className="info">
            <span>SKU: </span>
            {sku}
          </p>
          <p className="info">
            <span>Brand: </span>
            {company}
          </p>
          <hr />
          {stock > 0 && <AddToCart product={product} />}
        </section>
      </div>
    </div>
  </Wrapper>
}



export default SingleProductPage
