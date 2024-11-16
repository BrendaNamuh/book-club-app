import React, {useState} from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'; // Import Link



const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false)
  
    const navigateTo = (url) => {
        window.location.href = url; // Navigate to the specified URL
    };
    return (
    <nav className='border-2 border-red-600 h-10 flex flex-row' role="navigation">
      {/* <div className='border-2 border-red-600' id="menuToggle"> */}
        {/* Used as check receiver so you can you select on it */}
        <input type="checkbox" />

        {/* <span></span>
        <span></span>
        <span></span> */}
        
        <ul className='border-2 border-blue-600 'id="menu">
          <li><Link to="/">Currently Reading</Link></li>
          <li> <Link to="/upcoming-events">Upcoming Events</Link></li>
          <li><Link to="/past-events">Past Event</Link></li>
         
        
        </ul>
      {/* </div> */}


</nav>
    )
}

export default NavBar;