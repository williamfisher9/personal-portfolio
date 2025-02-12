import axios from "axios"
import { useContext, useEffect } from "react"
import { ThemeContext } from "../../constants/Constants"
import { useNavigate } from "react-router-dom"

const Blog = () => {
    const theme = useContext(ThemeContext)
    const navigate = useNavigate()

    useEffect(() => {
        console.log(window.localStorage.getItem("token"))
        axios.get("http://localhost:9999/api/v1/blog/posts", {headers: {'Authorization': `Bearer ${window.localStorage.getItem("token")}`}})
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
    })

    const handleNewPostRequest = () => {
        navigate('/blog/post/new')
    }

    return <div className={`blog-container border ${theme.theme == 'dark' ? 'border-teal-500' : 'border-indigo-500'} px-2 py-4 rounded-md`}>

        <div className="flex gap-4">
            <a className={`btn flex gap-1 max-md:items-center  max-md:justify-center ${theme.theme == 'dark' ? 'btn-dark-theme' : 'btn-light-theme'}`}
            onClick={handleNewPostRequest}>
                NEW POST{" "}
                <span className="material-symbols-rounded">add</span>
            </a>

            <a className={`btn flex gap-1 max-md:items-center  max-md:justify-center ${theme.theme == 'dark' ? 'btn-dark-theme' : 'btn-light-theme'}`}>
                RELOAD{" "}
                <span className="material-symbols-rounded">refresh</span>
            </a>
        </div>

        <div className="posts-container">

        </div>

    </div>
}

export default Blog