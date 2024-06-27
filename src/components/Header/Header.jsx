import React, { useState } from 'react'
import styles from './Header.module.css'
import logo from '../../assets/Logo.png'
import pfp from '../../assets/pfp.jpg'


function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.navbar}>
          <img src={logo} className={styles.logo}/>
          <div>
            <ul className={styles.list}>
              <li className='listItem'><a href="/">Home</a></li>
              <li className='listItem'><a href="/Album">Album</a></li>
              <li className='listItem'><a href="/Message">Message</a></li>
            </ul>
          </div>
        </nav>
        <div className={styles.home}>
          <div className={styles.contentContainer}>
            <img src={pfp} alt="" className={styles.pfp}/>
            <div className={styles.item}>
              <h1><strong><em>Happy <span>27th</span> <br /> Birthday <br /> Mahal <span>♥</span></em></strong></h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header