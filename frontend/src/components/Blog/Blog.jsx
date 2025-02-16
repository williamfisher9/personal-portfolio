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
            setPosts(res.data.message)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])

    const handleNewPostRequest = () => {
        navigate('/blog/post/new')
    }

    const handleSearchBarChange = () => {
        axios.get(`http://localhost:9999/api/v1/blog/posts/search/${event.target.value == "" ? "-" : event.target.value}`)
        .then((res) => {
            setPosts(res.data.message)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    return <div className={`blog-container px-4 rounded-md`}>
        <div className="flex gap-4 mb-14 items-center justify-center">
            


        <div
          className={`relative h-12 border-2 rounded-md text-lg  w-[80%] md:w-[700px] ${
            theme.theme == "dark"
              ? "border-teal-700 bg-teal-500/20 text-white"
              : "border-indigo-700 bg-indigo-500/20 text-black"
          }`}
        >
          <input
            type="text"
            placeholder="Search Blog"
            id="searchBarVal"
            name="searchBarVal"
            className="absolute top-0 left-0 w-full
             h-full pl-2 bg-transparent border-none outline-none rounded-md"
            onChange={handleSearchBarChange}
          />
        </div>




                {
                    Cookies.get('isAuthenticated') ?
                    <a className={`btn flex  gap-1 items-center h-12 justify-center ${theme.theme == 'dark' ? 'btn-dark-theme' : 'btn-light-theme'}`}
                    onClick={handleNewPostRequest}>
                        NEW POST{" "}
                        <span className="material-symbols-rounded">add</span>
                    </a>
                : null
                }
        </div>

        <div className="posts-container grid gap-10 grid-cols-[repeat(auto-fill,_minmax(400px,_1fr))]">

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
                            <button className={`${theme.theme == 'dark' ? 'bg-teal-500 hover:bg-teal-600 text-black' : 'bg-indigo-500 hover:bg-indigo-600 text-white'} rounded-md px-3 py-1`}>Read</button>
                            
                            {
                                Cookies.get('isAuthenticated') ?
                                <>
                                    <button className={`${theme.theme == 'dark' ? 'bg-teal-500 hover:bg-teal-600 text-black' : 'bg-indigo-500 hover:bg-indigo-600 text-white'} rounded-md px-3 py-1`}>Edit</button>
                                    <button className={`${theme.theme == 'dark' ? 'bg-teal-500 hover:bg-teal-600 text-black' : 'bg-indigo-500 hover:bg-indigo-600 text-white'} rounded-md px-3 py-1`}>Delete</button>
                                </>
                                : null
                            }
                            
                        </div>

                    </div>
                })
            }

        </div>

    </div>
}

export default Blog