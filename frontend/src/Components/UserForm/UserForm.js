import React, { useState } from 'react';
import "./UserForm.css"
const UserForm = ({clickHandler}) => {
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');


    const onLoginClick = (e) => {
        e.preventDefault();
        fetch('/api/sessions', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        }).then(res => {
            if (res.status === 204) {
                console.log("Successfully registered");
                clickHandler();
            }
        });
    }


    const onSignupClick = (e) => {
        e.preventDefault();
        fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        });

    }

    return (
        <>
            <div className="LoginPage"  style={{textAlign: 'center'}}>
                <div className='content'>
                <form>
                    <input  className='email-input' placeholder="email" name="email" required type="email" onInput={(e) => setemail(e.target.value)} value={email}></input>
                    <input className='password-input' placeholder="password" name="password" required type="password" onInput={(e) => setpassword(e.target.value)} value={password}></input>
                    <div>
                        <input type="submit" className="login" onClick={onLoginClick} value="Login"></input>
                        <input type="submit" className="signup" onClick={onSignupClick} value="Sign up"></input>
                    </div>
                </form>
                </div>
            </div>
        </>
    )

}
export default UserForm;