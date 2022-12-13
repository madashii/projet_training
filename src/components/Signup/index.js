import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth, user} from '../Firebase/firebaseConfig';
import {setDoc} from 'firebase/firestore';
import {Link, useNavigate } from 'react-router-dom';

const Signup = () => {

  const navigate = useNavigate();

  const data = {
    pseudo:'',
    email:'',
    password:'',
    confirmPassword:""

  }

 const [loginData, setLoginData] = useState(data);
 const [error, setError] = useState('');
 
 const handleChange = (e) => {
  setLoginData({...loginData, [e.target.id]: e.target.value})
 }

 const handleSubmit = (e) => {
  e.preventDefault();
  const {email, password, pseudo} = loginData;
  createUserWithEmailAndPassword(auth, email, password)
  .then( authUser => {
    return setDoc(user(authUser.user.uid), {
       pseudo,
       email
    })
  })
  
  .then(user => {
    setLoginData({...data});
    navigate("/welcome");
  })
  .catch(error => {
    setError(error);
    setLoginData({...data});
  })
 }


 const {pseudo, email, password, confirmPassword} = loginData;

 const btn = pseudo === "" || email === '' || password === '' || password !== confirmPassword ?
 <button disabled>Inscription</button> : <button>Inscription</button>

 const errorMsg = error !== '' && <span> {error.message}</span>;

  return (

    <div className='signUpLoginBox'>
        <div className='slContainer'>
            <div className='formBoxLeftSignup'>

            </div>
            <div className='formBoxRightSignup'>
              <div className='formContent'>
                {errorMsg}
              <h2>Inscription</h2>
                <form onSubmit={handleSubmit}>
                  
                  <div className='inputBox'>
                     <input onChange={handleChange} value={pseudo} type='text' id="pseudo" autoComplete='off'   required />
                     <label thmlFor="pseudo">Pseudo</label>
                  </div>

                  <div className='inputBox'>
                     <input onChange={handleChange} value={email}  type='mail' id="email" autoComplete='off'   required />
                     <label thmlFor="email">Email</label>
                  </div>

                  <div className='inputBox'>
                     <input onChange={handleChange} value={password}  type='password' id="password" autoComplete='off'   required />
                     <label thmlFor="password">Password</label>
                  </div>

                  <div className='inputBox'>
                     <input onChange={handleChange} value={confirmPassword}  type='password' id="confirmPassword" autoComplete='off'   required />
                     <label thmlFor="confirmPassword"> Confirm Password</label>
                  </div>

                  {btn}

                </form>
                <div className='linkContainer'>
                  <Link className='simpleLink' to="/login">Déja inscrit ? Connectez-vous</Link>

                </div>
              </div>
            </div>
        </div>

    </div>
  )
}

export default Signup