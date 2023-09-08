import React from 'react'
import '../styles/navbar.css'

function Navbar() {
  return (
    <div id="container">
      <nav>
        <input id="nav-toggle" type="checkbox" />
        <div class="logo">StudyTube</div>
        <ul class="links">
          <li><a href="#home">About</a></li>
          <li><a href="#about">Creators</a></li>
          <li><a href="#about">Contact</a></li>
          <li><a href="#about">Log In</a></li>
          {/* <img src="moon.png" onclick="mode()" id="icon" /> */}
        </ul>
        <label for="nav-toggle" class="icon-burger">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </label>
      </nav>
    </div>
  )
}

export default Navbar
