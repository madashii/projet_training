import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { sendPasswordResetEmail } from "firebase/auth";
import {auth} from '../Firebase/firebaseConfig';




const ForgetPassword = () => {

    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    const [succes, setSucces] = useState(null);
    const [error, setError] = useState(null);
    

    const handleSubmit = (e) => {
     e.preventDefault();
     sendPasswordResetEmail(auth, email)
  .then(() => {
    setError(null);
    setSucces(`regarde ton mail ${email} bg si tu veux changer ton mdp `)
    setEmail('');
    setTimeout(() => {
     navigate("/login")
    }, 3000)

  })
  .catch((error) => {
   setError(error);
   setEmail('');
   
  });
    }

    const disabled = email === "";

  return (
<div className='signUpLoginBox'>
   <div className='slContainer'>
        <div className='formBoxLeftForget'>
        </div>

     <div className='formBoxRight'>
      <div className='formContent'>

        { succes && <span 
        style= {{
            border: "1px solid green",
            background: "green",
            color: "#ffffff",
        }}>
        {succes}</span>}

        {error && <span>{error.message}</span>}
    


         <h2>Mot de passe oublié?</h2>

      <form onSubmit={handleSubmit}>
      
        <div className='inputBox'>
          <input onChange={(e) => setEmail(e.target.value)} value={email}  type='mail' autoComplete='off'  required />
          <label thmlFor="email">Email</label>
        </div>

        <button disabled={disabled}>Récupérer</button>

      
      </form>

        <div className='linkContainer'>
          <Link className='simpleLink' to="/login">Déja inscrit ? Connectez-vous.</Link>
        </div>

      </div>
     </div>
   </div>
 </div>
  )
}

export default ForgetPassword