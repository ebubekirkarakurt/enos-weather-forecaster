import React from 'react'
import Navbar from '../../components/Navbar'
import '../../styles/navbar.styles.css'
import '../../styles/no.city.styles.css'
import { ReactComponent as NoCityLogo } from '../../assets/no-city.svg';

export default function NoCity() {
  return (
    <div>
        <nav>
            <Navbar/>
        </nav>
        <div className='body'>
          <NoCityLogo className='no-city-logo'/>
         <div className='container' >
          <input name="myInput" id='input' placeholder='Search a City' />
            <div className="select-city-container">
                <h1 id='header-txt' >Select a City</h1>
                <p id='body-txt' >Search and select a city to see results. Try typing the first letters of the city you want.</p>            
            </div>
          </div>
        </div>
    </div>
  )
}