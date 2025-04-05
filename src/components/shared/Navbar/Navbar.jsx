import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const navOption = <>
    <NavLink><li>Home</li></NavLink>
    <NavLink><li>Medicine</li></NavLink>
    <NavLink><li>Category</li></NavLink>
    <NavLink> <li>About</li></NavLink>
    <NavLink> <li>Service</li></NavLink>
  </>
  return (
    <div className="navbar bg-orange-500 shadow-sm px-14 fixed top-0 z-30 mx-auto ">
      <div className="flex-1">
        <h2 className="text-xl font-bold">Therm<span className='text-xl font-bold text-gray-600'>ix</span></h2>
      </div>
      <div className='flex-1 items-center justify-center'>
        <ul className='flex  gap-6'>
          {navOption}
        </ul>
      </div>
      <div className="flex justify-end">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            <li>
              <NavLink className="justify-between">
                Profile
              </NavLink>
            </li>
            <li><NavLink>Settings</NavLink></li>
            <li><NavLink>Logout</NavLink></li>
          </ul>
        </div>
    
      </div>
    </div>
  );
};

export default Navbar;