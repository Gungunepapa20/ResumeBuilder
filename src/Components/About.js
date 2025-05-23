import React from 'react'
import "./About.css"

function About() {
  return (
    <>
      <div className='about-head'>About</div>
      <div className='about'>
        This is react resume builder made by Arman Kazi for Hack-R-Play Hackathon organized by ReactPlay
        and sponsored by NHost. This project is made by using complete React.js with poppular
        react packages like react-redux, redux-persist, react-hook-form, react-router-dom, react-icons
        and Nhost services like Postgres Database, GraphQl API and Storage has been used.

        <div className={"mt-3"}>
          Special Thanks to all who has made some great effort creating such amazing usefull packages, and also to React Play
          team who has organized this amazing hackathon.
        </div>
        
      </div>
    </>
  )
}

export default About