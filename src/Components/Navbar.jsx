import React, { useContext, useState } from 'react'
import { Navbar as HeroNavbar, NavbarBrand, NavbarContent, NavbarItem, } from "@heroui/react";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';


export default function Navbar() {

  const { isLoggedIn, setisLoggedIn } = useContext(AuthContext)



  const navigate = useNavigate()
  function logout() {
    localStorage.removeItem("token");
    setisLoggedIn(false);
    // navigate('/login'); 
  }

  return <>

    <HeroNavbar>
      <NavbarBrand>

        <Link to={'/'} className="font-bold text-inherit">
          ACME
        </Link>
      </NavbarBrand>


      <NavbarContent className="hidden sm:flex gap-4" justify="center">

        {isLoggedIn ?
          <>
            <NavbarItem>
              <Link color="foreground" to={'/profile'}>
                profile
              </Link>
            </NavbarItem>



            <NavbarItem onClick={logout}>
              <span color="foreground" className='cursor-pointer'>
                logout
              </span>
            </NavbarItem>
          </> :
          <>
            <NavbarItem>
              <Link color="foreground" to={'/register-page'}>
                register
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" to={'/login'}>
                login
              </Link>
            </NavbarItem>
          </>
        }




      </NavbarContent>





    </HeroNavbar>

  </>


}
