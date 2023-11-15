import React from 'react';
import'./style.css';
const Navigationbar = () => {
  return (
    <div>
        <h1>M<span className='span'>oo</span>vie</h1>
    <nav>
      <ul>
        <li>
          <a href="/login">Home</a>
        </li>
        <li>
          <a href="/product">My List</a>
        </li>
        <button>Sign in</button>
      </ul>
    </nav>
    
    </div>
  );
};
export default Navigationbar;