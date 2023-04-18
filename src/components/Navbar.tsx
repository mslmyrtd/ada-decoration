import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { links } from '../utils/constants'
import logoNo from '../assets/logoNo.svg'
import CartButtons from './CartButtons'
import { useProductsContext } from '../context/products_context'
import { useUserContext } from '../context/user_context'
import NavContainer from '../assets/wrappers/Navbar'



const Navbar = () => {
  const { openSidebar } = useProductsContext()
  const { currentUser } = useUserContext()
  return (

    <NavContainer>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logoNo} alt="ada decoration" />
          </Link>
          <button type='button' className='nav-toggle' onClick={openSidebar}><FaBars /></button>
        </div>
        <ul className="nav-links">
          {links.map((link): any => {
            const { id, text, url } = link
            return <li key={id}>
              <Link to={url}>{text}</Link>
            </li>
          })}
          {
            currentUser && <li>
              <Link to="/checkout">checkout</Link>
            </li>
          }
        </ul>
        <CartButtons />
      </div>

    </NavContainer>
  )
}


export default Navbar
