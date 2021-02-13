import React from 'react'
import {useRouter} from 'next/router'
import Link from 'next/link';
import { server } from '../../../config'
/**
 * 
 * Server side Render #1
 */
// export async function getServerSideProps(context){
//      const res=await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);
//      const data=await res.json();

//      return{
//           props:{
//                article:data
//           }
//      }
// }
 /*@static generedt  #2 */
// export async function getStaticProps(context){
//      const res=await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);
//      const data=await res.json();

//      return{
//           props:{
//                article:data
//           }
//      }
// }

// export async function getStaticPaths(){
//      const res=await fetch(`https://jsonplaceholder.typicode.com/posts/`);
//      const data=await res.json();
//      const ids=data.map(article=>article.id);
//      const paths=ids.map(id=>({params:{id:id.toString()}}))
//      return{
//           paths,
//           fallback:false
//      }
// }
// #3 manual Api
export const getStaticProps = async (context) => {
     const res = await fetch(`${server}/api/articles/${context.params.id}`)
     const data = await res.json()
    
     return {
       props: {
         article :data,
       },
     }
   }
   
   export const getStaticPaths = async () => {
     const res = await fetch(`${server}/api/articles`)
     const data=await res.json();
     const ids=data.map(article=>article.id);
     const paths=ids.map(id=>({params:{id:id.toString()}}))
     return{
          paths,
          fallback:false
     }
   }
function Article({article}) {
     // const router=useRouter();
     // const {id}=router.query;
     console.log(article);
     return (
          <>
              <h1>{article[0].title?article[0].title:article.title}</h1>
              <p>{article[0].body?article[0].body:article.body}</p>
              <Link href="/"><a>Go Back</a></Link>
          </>
     )
} 



export default Article
