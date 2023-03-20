import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../auth/firebase-config";
import { Wrapper } from '../styles/common'


const LoginPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const handleSubmit = async () => {
        try {
            let user = await signInWithEmailAndPassword(auth, email, password);
            navigate("/");
        } catch (err: any) {
            alert(err.message);
        }
    };
    return (
        <Wrapper className='section'>
            <div className="content">
                <div >
                    <p> ─── Login ───</p>
                </div>
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" placeholder="email" onChange={(e) => setEmail(e.target.value)} autoFocus />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
                    </div>
                </div>
            </div>
            <div className="footer">
                <button type="button" className="btn" onClick={handleSubmit}>
                    Login
                </button>
                <Link className="btn" to="/signup" >
                    Register
                </Link>

            </div>
        </Wrapper>
    )
}

export default LoginPage
