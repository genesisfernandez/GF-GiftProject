import React from 'react'
import './Home.css'
import pfp from '../../assets/pfp.jpg'

function Home() {
  return (
    <div className="homeContainer">
      <div className="homeSection">
        <div className="item-container">
          <div className="second">
            <img src={pfp} alt="" className="pfp" />
            <h1>Happy Birthday <span>27th</span><br /> Birthday Mahal <span>♥</span></h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home