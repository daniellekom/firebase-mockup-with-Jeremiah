import { useState } from 'react';
import {app} from '../ConnectAuth';
import { getAuth, createUserWithEmailAndPassword,GoogleAuthProvider,signInWithPopup } from "firebase/auth";
import {Link,useNavigate} from 'react-router-dom'


export default function Login({setUser}){
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const navigate=useNavigate()
    const auth=getAuth(app)
    const provider = new GoogleAuthProvider();

    const handleFormSubmit = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth,email,password)
        .then(result => {
            //set user
        setUser(result.user)
            //navigate to home
            navigate('/')
        })
        .catch(alert)
    }
const handleGoogleLogin =()=> {
    signInWithPopup(auth,provider)
    .then(result => {
    setUser(result.user)

    })
}
    return(
        <>
        <h1>Login</h1>
        <hr/>
        <form onSubmit={handleFormSubmit}>
        <label>Email: <input type='email' value={email} 
        onChange={e=>setEmail(e.target.value)}/>
        </label>
        <label>password:
        <input type='password' value={password}
        onChange={e=>setPassword(e.target.value)}/>
         </label>
    <input type='submit' value='Login'/>
        </form>
        <button
        onClick={handleGoogleLogin}>
        Sign in with Google</button>
        <p>Not a user?<Link to='/signup'>Sign up</Link></p>



        </>
    )
}