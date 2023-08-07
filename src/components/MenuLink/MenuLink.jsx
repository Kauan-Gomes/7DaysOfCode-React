import React from 'react'
import styles from './MenuLink.module.css'

export default function MenuLink({children}) {
  return (
        <li className={styles.link}>
            <a href="#">{children}</a>
        </li>
  )
}
