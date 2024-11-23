import React, {useState} from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'; // Import Link



const NavBar = () => {
    const [activePage, setActivePage] = useState('currently-reading')
    const handleClick = (page) =>{
      setActivePage(page)

    }
  

  

    return (
      <nav className=' w-[1248px] mt-5 p-1 mx-10 border-b border-gray-300'>
              <input type="checkbox" id="menuToggle" className="hidden" />

          <ul className='flex flex-row h-full items-center space-x-6 font-bold text-gray-500' >
            <li onClick={()=>handleClick('currently-reading')} className={`nav-link ${activePage === 'currently-reading' ? 'active' : ''}`}><Link to="/">Home</Link></li>
            <li onClick={()=>handleClick('upcoming-events')} className={`nav-link ${activePage === 'upcoming-events' ? 'active' : ''}`}>  <Link to="/upcoming-events">Next Read</Link></li>
            <li onClick={()=>handleClick('past-events')} className={`nav-link ${activePage === 'past-events' ? 'active' : ''}`}> <Link to="/past-events">Secrets</Link></li>
          </ul>
      </nav>
    )
}

export default NavBar;