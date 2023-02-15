import React, { useState } from 'react'
import { Wrapper } from '../styles/common'
import logo from '../assets/logo.svg'
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../auth/firebase-config";

const Signup = () => {
    const navigate = useNavigate();
    const [name, setName] = useState<string>();
    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<number>();

    const handleSubmit = async () => {
        const displayName = name;
        try {
            let user = await createUserWithEmailAndPassword(auth, email, password);
            await updateProfile(auth.currentUser, { displayName: displayName });
            navigate("/");
        } catch (err: any) {
            alert(err.message);
        }
    };
    return (
        <Wrapper className='section'>
            <div className="content">
                <div className="image">
                    <img src={logo} />
                </div>
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" placeholder="username" onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" placeholder="email" onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="text" name="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
                    </div>
                </div>
            </div>
            <div className="footer">
                <button type="button" className="btn" onClick={handleSubmit}>
                    Register
                </button>
            </div>
        </Wrapper>
    )
}

export default Signup
