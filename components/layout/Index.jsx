import React from 'react'
import Style from '../../styles/Home.module.css'
import Footer from './Footer'
import Header from './Header'
function Layout({children}) {
     return (
          <>
               <Header />
               <div className={Style.container}>
                    <main className={Style.main}>
                         {children}
                    </main>
               </div>
               <Footer />
          </>
     )
}

export default Layout
