import React from 'react';
import Articles from '../components/artciles/Articles';
import HeadeInfo from '../components/info/HeadeInfo'
import styles from '../styles/Article.module.css'
import {server} from '../config/'
// export const getStaticProps=async()=>{
//   const res=await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
//   const data=await res.json();

//   return{
//     props:{
//       articles:data
//     }
//   }

// }

export const getStaticProps=async()=>{
  const res=await fetch(`${server}/api/articles`);
  const data=await res.json();

  return{
    props:{
      articles:data
    }
  }

}

export default function Home({articles}) {
  console.log(articles);
  return (
   <>
       <HeadeInfo title="home" info="homepage welcome" /> 

       <Articles articles={articles}/>
        
   </>
  )
}
