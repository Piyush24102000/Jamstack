import React from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import MarkdownIt from 'markdown-it'

const PostPage = ({post}) => {
    const router = useRouter()
    const { id } = router.query
    const md = new MarkdownIt()
    const htmlContent = md.render(post.attributes.content)

    return (
        <div>
           <article>
            <header>
                <h1>{post.attributes.title}</h1>
                <h2>{post.attributes.description}</h2>
            </header>
            <section dangerouslySetInnerHTML={{__html:htmlContent}}></section>
           </article>
        </div>
    )
}

export default PostPage

export async function getStaticProps({ params }) {
    const getPage = await axios.get(`http://localhost:1337/api/posts/${params.id}`)
    return{
        props:{
            post:getPage.data.data
        }
    }
}

export async function getStaticPaths() {
    const result = await axios.get('http://localhost:1337/api/posts')
    const paths = result.data.data.map((i) => {
        return { params: { id: i.id.toString() } }
    })
    return {
        paths,
        fallback: false
    }
}