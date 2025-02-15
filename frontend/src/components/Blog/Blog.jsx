import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { ThemeContext } from "../../constants/Constants"
import { useNavigate } from "react-router-dom"
import Cookies from "js-cookie"

const Blog = () => {
    const theme = useContext(ThemeContext)
    const navigate = useNavigate()

    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get("http://localhost:9999/api/v1/blog/posts")
        .then((res) => {
            console.log(res.data.message)
            setPosts(res.data.message)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])

    const handleNewPostRequest = () => {
        navigate('/blog/post/new')
    }


    const reloadData = () => {
        axios.get("http://localhost:9999/api/v1/blog/posts")
        .then((res) => {
            console.log(res.data.message)
            setPosts(res.data.message)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    return <div className={`blog-container px-4 py-4 rounded-md`}>

        {
            Cookies.get('isAuthenticated') ?
            <div className="flex gap-4">
            <a className={`btn flex gap-1 max-md:items-center  max-md:justify-center ${theme.theme == 'dark' ? 'btn-dark-theme' : 'btn-light-theme'}`}
            onClick={handleNewPostRequest}>
                NEW POST{" "}
                <span className="material-symbols-rounded">add</span>
            </a>

            <a onClick={reloadData} className={`btn flex gap-1 max-md:items-center  max-md:justify-center ${theme.theme == 'dark' ? 'btn-dark-theme' : 'btn-light-theme'}`}>
                RELOAD{" "}
                <span className="material-symbols-rounded">refresh</span>
            </a>
        </div>
        : null
        }

        <div className="posts-container grid grid-cols-[repeat(auto-fill,_minmax(400px,_1fr))]">

            {
                posts.map(({id, title, description, post_contents}) => {
                    return <div key={id} className={`relative m-4 p-4 border ${theme.theme == 'dark' ? 'border-teal-500' : 'border-indigo-500'} rounded-md`}>
                        <div style={{clipPath: "polygon(9% 0, 100% 0%, 91% 100%, 0 100%)"}}
                         className={`absolute top-[-20px] laft-[20px] ${theme.theme == 'dark' ? 'bg-teal-800' : 'bg-indigo-800'} px-10 py-1 border border-teal-500`}>
                        <h1 className={`text-white`}>{title}</h1>
                        </div>

                        <div className="flex items-center justify-center py-4">
                            <img src="images.jpg" className="w-[90%] h-32 object-contain" />
                        </div>

                        <div className="">
                            <p className="mt-2">{description}</p>
                        </div>
                        
                        {//<div dangerouslySetInnerHTML={{ __html: post_contents }} />
                        }

                        <div className="post-btns flex gap-2 mt-4">
                            <button className="bg-teal-800 hover:bg-teal-900 rounded-md px-3 py-1">Read</button>
                            <button className="bg-teal-800 hover:bg-teal-900 rounded-md px-3 py-1">Edit</button>
                            <button className="bg-teal-800 hover:bg-teal-900 rounded-md px-3 py-1">Delete</button>
                        </div>

                    </div>
                })
            }

        </div>

    </div>
}

export default Blog