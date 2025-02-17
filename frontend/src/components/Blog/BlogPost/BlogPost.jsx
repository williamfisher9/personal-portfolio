import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Cookies from "js-cookie"
import axios from "axios"

const BlogPost = () => {
    const {id} = useParams()
    const [post, setPost] = useState("")

    useEffect(() => {
        axios.get("http://localhost:9999/api/v1/blog/posts/" + id, {headers: {"Authorization": `Bearer ${Cookies.get('token')}`}})
        .then((res) => {
            setPost(res.data.message)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])

    return <div className="flex flex-col gap-8 mt-8">

        <div className="text-2xl text-center">{post.title}</div>

        <div className="txt-md">{post.description}</div>

        <div dangerouslySetInnerHTML={{ __html: post.post_contents }} />

    </div>
}

export default BlogPost