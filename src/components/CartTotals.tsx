import { useCartContext } from '../context/cart_context'
import { formatPrice } from '../utils/helpers'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useFilterContext } from '../context/filter_context'
import { useUserContext } from '../context/user_context'
import Wrapper from '../assets/wrappers/CartTotalsComp'


const CartTotals = () => {
  const navigate = useNavigate()
  const { total_amount, shipping_fee } = useCartContext()
  const { filters } = useFilterContext()
  const { currentUser } = useUserContext()

  return <Wrapper>
    <div>
      <article>
        <h5>subtotal: <span>{formatPrice(total_amount)}</span> </h5>
        {filters.shipping ? <p>shipping: <span>{formatPrice(0)}</span> </p> : <p>shipping: <span>{formatPrice(shipping_fee)}</span> </p>}

        <hr />
        {filters.shipping ? <h4>order total: <span>{formatPrice(total_amount)}</span>  </h4> : <h4>order total: <span>{formatPrice(total_amount + shipping_fee)}</span>  </h4>}
      </article>
      {currentUser ? <Link to="/checkout" className='btn'>proceed to checkout</Link> : <button type='button' onClick={() => navigate("/login")} className="btn">login</button>}

    </div>
  </Wrapper>
}


export default CartTotals
