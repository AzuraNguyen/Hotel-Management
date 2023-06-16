import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Room from './pages/room/Room';
import Renting from './pages/renting/Renting';
import Login from './pages/login/Login';
import Payment from './pages/payment/Payment';
import Customer from './pages/customer/Customer';
import Report from './pages/report/Report';
import NotFound from './pages/notFound/NotFound';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Sidebar/>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Payment/>}/>
          <Route path='/room' element={<Room/>}/>
          <Route path='/report' element={<Report/>}/>
          <Route path='/customer' element={<Customer/>}/>
          <Route path='/renting' element={<Renting/>}/>
          <Route path='/payment' element={<Payment/>}/>
        </Routes>
      </BrowserRouter>
      
      {/* <Login/> */}
    </div>
  );
}

export default App;
