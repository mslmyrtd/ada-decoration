import React from 'react'
import styled from "styled-components"
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <NavContainer>
            <div className="nav-center">
                <div className="nav-header">
                    <Link to="/">
                        <p>ADA Decoration</p>
                    </Link>
                    <button type='button' className='nav-toggle'><FaBars /></button>
                </div>
            </div>
        </NavContainer>
    )
}
const NavContainer = styled.nav`
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    .nav-center{
        width: 90vw;
        margin:0 auto;
        max-width: var(--max-width);
    }
    .nav-header{
        display: flex;
        align-items: center;
        p{
            width: 175px;
            margin-left: -15px;
        }
    }
    .nav-toggle{
        background-color: transparent;
        border: transparent;
        color: var(--clr-primary-5);
        cursor: pointer;
        svg {
      font-size: 2rem;
    }
    }
    .nav-links{
        display:none
    }
`
export default Navbar
