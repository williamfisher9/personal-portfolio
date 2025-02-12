import { useContext, useState } from "react";
import { ThemeContext } from "../../constants/Constants";
import PropTypes from "prop-types";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = ({closeLoginForm}) => {
    const theme = useContext(ThemeContext)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    const handleLoginBtnClick = () => {
        axios.post("http://localhost:9999/api/v1/users/login", {username, password})
        .then((res) => {
            console.log(res.data.message)
            window.localStorage.setItem("token", res.data.message)
            closeLoginForm()
            navigate('/blog')
        })
    }

    return <div className={`${theme.theme == 'dark' ? 'bg-teal-500/50' : 'bg-indigo-500/50'} backdrop-blur-2xl fixed w-[400px]
            top-[40%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-50 rounded-md
            flex flex-col items-center justify-start gap-10 py-12`}>
        
        <div className="absolute top-2 right-2">
            <span className="material-symbols-rounded  text-white cursor-pointer" onClick={() => closeLoginForm()}>close</span>
        </div>

        <div className={`relative w-[80%] h-12 border-2 rounded-md text-xl ${theme.theme == 'dark' ? 'border-white' : 'border-white text-white'}`}>
            <input type="text" placeholder="USERNAME" id="username" name="username" className="absolute top-0 left-0 w-full
             h-full pl-2 bg-transparent border-none outline-none"
             onChange={() => setUsername(event.target.value)}/>
        </div>

        <div className={`relative w-[80%] h-12 border-2 rounded-md text-xl ${theme.theme == 'dark' ? 'border-white' : 'border-white text-white'}`}>
            <input type="password" placeholder="PASSWORD" id="password" name="password" className="absolute top-0 left-0 w-full
             h-full pl-2 bg-transparent border-none outline-none"
             onChange={() => setPassword(event.target.value)}/>
        </div>

        <button className={`w-20 h-10 px-4 py-2 rounded-md 
            ${theme.theme == 'dark' ? 'text-black bg-white hover:bg-[#f1f1f1]' : 'text-black bg-white  hover:bg-[#f1f1f1]'}`}
            onClick={handleLoginBtnClick}>
            LOGIN
        </button>

    </div>
}

export default Login;

Login.propTypes = {
    closeLoginForm: PropTypes.func.isRequired
}