import React from 'react'
import SearchBar from '../components/SearchBar.jsx'
import '../styles/Navbar.module.css'
import {Link} from 'react-router-dom'

function Nav({onSearch}){
    return(
        <div>
        <nav>
        <ul>
            <Link to='/'>
            <li>Home</li>
            </Link>

            <Link to='/about'>
            <li>About</li>
            </Link>

            <Link to='/cv'>
            <li>CV</li>
            </Link>
            <SearchBar onSearch={onSearch}/>
        </ul>
        </nav>
        </div>
    )
}

export default Nav;