import React from 'react'
import styles from './Album.module.css'

export default function Pictures(props) {
  return (
    <div className={styles.imgCard}>
        <div className={styles.imgContainer}>
          <img src={props.img} alt="" />
        </div>
        <h2>{props.content}</h2>
    </div>
  )
}
