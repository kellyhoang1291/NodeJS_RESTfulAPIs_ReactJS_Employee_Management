import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';
import AddEdit from './pages/AddEdit';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Home from './pages/Home';
import View from './pages/View';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      
        <ToastContainer position="top-center" />
        <Routes>
          <Route exact path="/" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/employees" element={<Home/>} />
          <Route path="/employees/add" element={<AddEdit/>} />
          <Route path="/employees/update/:eid" element={<AddEdit/>} />
          <Route path="/employees/view/:eid" element={<View/>} />
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
