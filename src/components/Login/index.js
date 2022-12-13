import React, {useEffect, useState } from 'react'
import { Link,useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../Firebase/firebaseConfig';

const Login = () => {
  const navigate = useNavigate();

 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');
 const [btn, setBtn] = useState(false);
 const [error, setError] = useState('');

 useEffect(() => {
    if(password.length > 5 && email !== ''){
      setBtn(true)
    } else if (btn) {
       setBtn(false)
    }
 }, [password, email, btn])


 const handleSubmit = (e) => {
  e.preventDefault();
  signInWithEmailAndPassword(auth, email, password)

  .then(user => {
    setEmail("");
    setPassword('');
    navigate("/welcome", {replace: true});
  })
  .catch(error => {
    setError(error);
    setEmail("");
    setPassword('');
  })
 }
  
  return (
 <div className='signUpLoginBox'>
   <div className='slContainer'>

        <div className='formBoxLeftLogin'>
        </div>

     <div className='formBoxRight'>
      <div className='formContent'>
     
     {error !== '' && <span>{error.message}</span>}


     <h2>Connexion</h2>

      <form onSubmit={handleSubmit}>
      
        <div className='inputBox'>
          <input onChange={(e) => setEmail(e.target.value)} value={email}  type='mail' autoComplete='off'  required />
          <label thmlFor="email">Email</label>
        </div>

        <div className='inputBox'>
          <input onChange={(e) => setPassword(e.target.value)} value={password}  type='password' autoComplete='off'   required />
          <label thmlFor="password">Password</label>
        </div>

        {<button disabled={btn ? false : true}>Connexion</button>}
      
      </form>

        <div className='linkContainer'>
          <Link className='simpleLink' to="/signup">Nouveau sur mavel Quizz ? Inscrivez-vous now.</Link>
          < br/>
          <Link className='simpleLink' to="/forgetpassword">Mot de passe oublié? clique ici!</Link>
        </div>

      </div>
     </div>
   </div>
 </div>

  )
}

export default Login