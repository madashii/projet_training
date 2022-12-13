
import '../../App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ErrorPage from '../ErrorPage';
import Footer from '../Footer';
import Header from '../Header';
import Landing from '../Landing';
import Login from '../Login';
import Signup from '../Signup';
import Welcome from '../Welcome';
import ForgetPassword from '../ForgetPassword';

function App() {
  return (
  <BrowserRouter>

   <Header />


   
     <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgetpassword" element={<ForgetPassword />} />
      <Route path ="*" element={<ErrorPage />} />
     </Routes>

    


   <Footer />
   
    
     
  </ BrowserRouter>

  );
}

export default App;
