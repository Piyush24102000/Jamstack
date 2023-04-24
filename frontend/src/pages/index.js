import Head from 'next/head'
import axios from 'axios'
import HomeHeader from '@/components/HomeHeader'
import HomeLatestPosts from '@/components/HomeLatestPosts'

export default function Home({data}) {
  return (
    <>
      <Head>
        <title>Blog Site</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <HomeHeader/>
        <HomeLatestPosts posts={data}/>
      </div>
    </>
  )
}
export async function getStaticProps(){
  let result = await axios.get("http://localhost:1337/api/posts")
  return{
    props:{
      data : result.data.data
    }
  }
}
