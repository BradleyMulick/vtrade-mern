import React from 'react';
import './navStyles.css';
import { Link } from "react-router-dom";

const Nav = (props) => {
  return (
    <div className='nav-container'>
      <span className='nav-logo'>
        <Link to='/'>
          <img src="../vtradelogowhite.png" alt="vtrade logo" className="vtrade-logo" />
        </Link>
      </span>
      <div className='nav-right'>
        <Link className='post-link' to="/post"><h1>Post</h1></Link>

        <span className='dropdown'>
          <h3 className='dropdown-title'>Categories</h3>
          <div className='dropdown-content'>
            <Link to="/camping"><h2>Camping</h2></Link>
            <Link to="/cycling"><h2>Cycling</h2></Link>
            <Link to="/fishing"><h2>Fishing</h2></Link>
            <Link to="/skiing"><h2>Skiing</h2></Link>
          </div>
        </span>
      </div>
    </div>
  )
}
export default Nav;