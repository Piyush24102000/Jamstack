import AllPosts from '@/components/AllPosts'
import React from 'react'
import axios from 'axios'
const posts = ({data}) => {
  return (
    <div>
      <AllPosts posts={data}/>
    </div>
  )
}

export default posts

export async function getStaticProps() {
  let result = await axios.get("http://localhost:1337/api/posts")
  return {
    props: {
      data: result.data.data
    }
  }
}
