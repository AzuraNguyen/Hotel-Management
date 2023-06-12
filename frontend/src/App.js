//import {BrowserRouter, Routes, Route} from 'react-router-dom'



import './App.css';
import Room from './pages/room/Room';
import Renting from './pages/renting/Renting';
import Login from './pages/login/Login';
import Payment from './pages/payment/Payment';
import Customer from './pages/customer/Customer';
import Report from './pages/report/Report';
import NotFound from './pages/notFound/NotFound';
import Navbar from './components/Navbar';

function App() {
  // if(isLogin){
  //   page = () => (<Room></Room>)
  // }
  return (
    <>
      <Room/>
    </>
  );
}

export default App;
