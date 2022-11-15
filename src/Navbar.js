import React, { useState } from 'react'
import {Link} from 'react-router-dom'


const Navbar = () => {

  return (
    <div class='nav'>
        <ul>
            <Link to="/home">
            <li>Home</li>
            </Link>
            <Link to="/contact">
            <li>Contact</li>
            </Link>
            <Link to="/Add">
            <li>Add new movie</li>
            </Link>
        </ul>
      <div class="search-box">
        <button  class="btn-search"><i class="fas fa-search"></i></button>
        <input type="text" class="input-search" placeholder="Type to Search..."/>
      </div>
      
    </div>
  )
}

export default Navbar
