import Head from 'next/head'
import React from 'react'

function HeadeInfo({title,info,keywords}) {
     return (
          <Head>
               <meta name="viewport" content="width=device-width,intial-scale=1"/>
               <meta name="deescrption" content={info}/>
               <meta name={keywords} content={info}/>
               <meta http-equiv="Content-Type" content="text/html;charset=UTF-8"/>
               <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon"/>
               <title>{title}</title>
          </Head>
     )
}

HeadeInfo.defaultProps={
     title:'Next js app',
     keywords:'FrontEnd Developement',
     info:'Fast,ssd,ssg'
}
export default HeadeInfo
