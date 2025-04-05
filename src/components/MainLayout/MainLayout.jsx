import React from 'react';
import Navbar from '../../components/shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../shared/Footer/Footer';


const MainLayout = () => {
  return (
    <div>
      <nav>
        <Navbar/>
      </nav>

      <main>
      <Outlet></Outlet>
      </main>
      
      <footer>
        <Footer/>
      </footer>
    </div>
  );
};

export default MainLayout;