import React, {useState} from 'react'
import { Signup } from './Signup'


export const Sweeper_login = () => {
    const [username, setusername] = useState();
    const [password, setpassword] = useState();
    const [redirect, setredirect] = useState('');

    function eventHandler(event) {
        const value = event.target.value;
        setusername(value);
    }

    function eventHandler1(event) {
        const value = event.target.value;
        setpassword(value);
    }

    function onSubmit() {
        if (username !== 'sweeper' && !password !== 'sweeper') {
            alert(`invalid user inputs: `)
            setredirect('/sweeper_signup');
        }
        else {
            alert(`Hello ${username} ypu are successfully signed in:`)
            setredirect('/about')
        }
    }
    return (
        <>
            <Signup
                title="Sweeper"
                placeholder1="Your Username"
                button="Sign in"
                redirect={redirect}
                e1={eventHandler}
                e2={eventHandler1}
                onSubmit={onSubmit}
            />
        </>
    )
}
