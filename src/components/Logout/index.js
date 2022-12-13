import React, {useEffect, useState } from 'react'
import { signOut } from "firebase/auth";
import {auth} from '../Firebase/firebaseConfig';
import { useNavigate } from 'react-router-dom';

const Logout = () => {

    const navigate = useNavigate();

    const [checked, setChecked] = useState(false);

    useEffect(() => {
        if(checked) {
            signOut(auth).then(() => {
                console.log('vous etes deconnecté')
                setTimeout (() => {
                    navigate("/")

                }, 1000);

            }).catch((error) => {
                console.log('Oups, erreur')
            });
        }

    },[checked,navigate]);


    const handleChange = (e) => {
        setChecked(e.target.checked);
    }


  return (
    <div className='logoutContainer'>
        <label className='switch'>
          <input 
          onChange={handleChange}
          type='checkbox' 
          checked={checked}
          
          />
             <span className='slider round'></span>
          
        </label>
    </div>
  )
}

export default Logout