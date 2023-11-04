import React from 'react';
import './NavBar.css';

function NavBar() {
  return (
    <div className="navbar">
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#movies">Movies & Shows</a></li>
          <li><a href="#support">Support</a></li>
          <li><a href="#subscription">Subscription</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
