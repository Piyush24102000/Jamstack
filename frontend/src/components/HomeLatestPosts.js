import React, { useEffect,useState } from 'react'
import PostPreview from './PostPreview'

const HomeLatestPosts = ({ posts }) => {
    const [latestPosts, setLatestPosts] = useState([])
   
    useEffect(()=>{
        setLatestPosts(posts.slice(0,5))
    },[posts]);

    function renderPostPreviews(){
        return latestPosts.map((i)=>{
            return <PostPreview post={i} key = {i.id}/>
        }) 
    }
    return (
        <div>
            <h2>Latest Posts</h2>
            {renderPostPreviews()}
        </div>
    )
}

export default HomeLatestPosts