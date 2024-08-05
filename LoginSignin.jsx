import React, { useState } from 'react'
import './LoginSignin.css'

import user_icon from '../../Assets/person.png'
import email_icon from '../../Assets/email.png'
import password_icon from '../../Assets/password.png'

const LoginSignin = () => {

    const [action, setAction] = useState("Log in");
    return (
        <div className='container'>
            <div className='header'>
                <div className='text'>{action}</div>
                <div className='underline'></div>
            </div>
            <div className="inputs">
                {action === "Log in" ? <div></div> : <div className="input">
                    <img src={user_icon} alt="" />
                    <input placeholder='Name' type="text" />
                </div>}

                <div className="input">
                    <img src={email_icon} alt="" />
                    <input type="email" placeholder='Email' />
                </div>
                <div className="input">
                    <img src={password_icon} alt="" />
                    <input type="password" placeholder='Password' />
                </div>
            </div>
            {action === "Sign in" ? <div></div> : <div className="forget-password">lost Password? <span>Click here</span></div>}

            <div className="submit-container">
                <div className={action === "Log in" ? "submit gray" : "submit"} onClick={() => { setAction("Log in") }}>Login in</div>
                <div className={action === "Sign in" ? "submit gray" : "submit"} onClick={() => { setAction("Sign in") }}>Sign in</div>
            </div>
        </div>
    )
}

export default LoginSignin