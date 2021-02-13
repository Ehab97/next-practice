import React from 'react'
import style from '../../styles/Header.module.css'
import Link from 'next/link'
function Header() {
     return (
          <header>
               <nav className={style.nav}>
                    <ul>
                         <li>
                              <Link href="/"><a>Home</a></Link>
                         </li>
                         <li>
                              <Link href="/about"><a>About</a></Link>
                         </li>
                    </ul>
               </nav>
               <div>
                    <h1 className={style.title}>
                         <span>WebDev</span>News
                    </h1>
                    <p className={style.description}>Keep uptodate with latest news</p>
               </div>
          </header>
     )
}

export default Header
