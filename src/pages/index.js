import React from 'react'
import { Link } from 'gatsby'
import Earth from 'components/rotatingEarth'
function Home() {
  return (
    <div>
      {/* <Link to='/skills'>skills</Link>
      <Link to='/contacts'>contacts</Link>
      <Link to='/articles'>articles</Link>
      <Link to='/projects'>projects</Link> */}
      <Earth></Earth>
      <img className="threePics"></img>
    </div>
  )
}

export default Home

