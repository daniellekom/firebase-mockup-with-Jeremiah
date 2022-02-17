import { useState } from 'react';
import {app} from '../ConnectAuth';
import { getAuth, createUserWithEmailAndPassword,GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Link,useNavigate } from 'react-router-dom';


export default function Signup({setUser}){
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const navigate=useNavigate()
    const auth= getAuth(app)
    const provider= new GoogleAuthProvider()

    const handleFormSubmit = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth,email,password)
        .then(result => {
            //set user
            setUser(result.user)
            navigate('/')
            .catch(alert)
        })
    }
    const handleGoogleLogIn = ()=>{
        signInWithPopup(auth,provider)
        .then(result =>{
            setUser(result.user)
            navigate('/')
        })
        .catch(alert)
    }

    return(
        <>
        <h1>Signup</h1>
        <hr/>
        <form onSubmit={handleFormSubmit}>
        <label>Email: <input type='email' value={email} 
        onChange={e=>setEmail(e.target.value)}/>
        </label>
        <label>password:
        <input type='password' value={password}
        onChange={e=>setPassword(e.target.value)}/>
         </label>
    <input type='submit' value='Sign up'/>
        </form>
       
        <button 
        onClick={handleGoogleLogIn}>Sign in with google</button>
        <p>Already a User?<Link to ='/login'>Login</Link></p>
        </>
    )
}