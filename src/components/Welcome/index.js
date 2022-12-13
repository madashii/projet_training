import React, {useState, Fragment, useEffect} from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import {getDoc} from 'firebase/firestore';
import {auth, user} from '../Firebase/firebaseConfig';
import Logout from '../Logout';
import Quizz from '../Quiz';



const Welcome = (props) => {
   
  const navigate = useNavigate();

  const [userSession, setUserSession] = useState(null);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const listener = onAuthStateChanged( auth, user => {
      user ? setUserSession(user) : navigate("/")
    
    })

    if (!!userSession) {

      const colRef = user(userSession.uid);

     getDoc(colRef)
      .then( snapshot => {
        if (snapshot.exists()) {
          const docData = snapshot.data();
          setUserData(docData);
        }
      })
      .catch(error => {
         console.log(error);
      })
    }




    return listener ();

  }, [navigate, userSession])

  return userSession === null ? (
    <Fragment>
      <div className='loader'></div>
      <p className='loaderText'> Loading ...</p>
    </Fragment>
  ): (
    <div className='quizz-bg'>
      <div className='container'>
        <Logout />
        <Quizz userData={userData}/>
      </div>
         
    </div>
    
  )

}

export default Welcome