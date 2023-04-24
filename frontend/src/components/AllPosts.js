import React from 'react'
import PostPreview from './PostPreview'

const AllPosts = ({ posts }) => {
    function renderAllPost(){
        return posts.map((i)=>{
            return  <PostPreview post = {i} key={i.id}/>
        })
    }
    return (
        <>
            <h2>Posts</h2>
            {renderAllPost()}
        </>
    )
}

export default AllPosts