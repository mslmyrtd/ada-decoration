import React from 'react'
import { Wrapper } from '../styles/common'
import logo from '../assets/logo.svg'
const LoginPage = () => {
    return (
        <Wrapper className='section'>
            <div className="content">
                <div className="image">
                    <img src={logo} />
                </div>
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" placeholder="email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" placeholder="password" />
                    </div>
                </div>
            </div>
            <div className="footer">
                <button type="button" className="btn">
                    Login
                </button>
            </div>
        </Wrapper>
    )
}

export default LoginPage
