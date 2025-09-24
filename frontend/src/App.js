import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './pages/home/home';
import Navbar from './components/navbar/navbar';
import Departments from './pages/departments/departments';
import Testimonials from './pages/testimonials/testimonials';
import Loading from './pages/loading/loading';

function App() {

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
      <Router>
        <div className='App'>
          <Navbar />
          <Routes>
            <Route path='/' element={isLoading? <Loading/>:<Home/>} />
            <Route path='/departments' element={<Departments/>} />
            <Route path='/testimonials' element={<Testimonials/>} />
          </Routes>
          {/* <Footer /> */}
        </div>
      </Router>
  );
}

export default App;
