import { useContext, useState } from "react";
import { ThemeContext } from "../../constants/Constants";
import PropTypes from "prop-types";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { IoMdClose } from "react-icons/io";

const Login = ({ closeLoginForm }) => {
  const theme = useContext(ThemeContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLoginBtnClick = () => {
    axios
      .post("http://localhost:9999/api/v1/users/login", { username, password })
      .then((res) => {
        console.log(res.data.message);
        window.localStorage.setItem("token", res.data.message);
        closeLoginForm();
        navigate("/blog");
      });
  };

  return (
    <div
      className={`${theme.theme == "dark" ? "bg-teal-800" : "bg-indigo-800"}
            fixed inset-0 bg-black backdrop-blur-sm bg-opacity-40 flex items-center justify-center z-50`}
    >
      <div
        className={`relative w-[80%] md:w-[500px] overflow-y-auto ${
          theme.theme == "dark" ? "bg-teal-700" : "bg-indigo-700"
        }
                  rounded-md p-8 flex flex-col items-center justift-start gap-10`}
      >
        <div>
          <button
            className="absolute right-4 top-4 p-2 z-50 bg-transparent"
            onClick={() => closeLoginForm()}
          >
            <IoMdClose
              className={`${
                theme.theme == "dark" ? "text-black" : "text-white"
              }`}
            />
          </button>
        </div>

        <div
          className={`relative w-[80%] h-12 border-2 rounded-md text-xl ${
            theme.theme == "dark"
              ? "border-black text-black"
              : "border-white text-white"
          }`}
        >
          <input
            type="text"
            placeholder="USERNAME"
            id="username"
            name="username"
            className="absolute top-0 left-0 w-full
             h-full pl-2 bg-transparent border-none outline-none rounded-md"
            onChange={() => setUsername(event.target.value)}
          />
        </div>

        <div
          className={`relative w-[80%] h-12 border-2 rounded-md text-xl ${
            theme.theme == "dark"
              ? "border-black text-black"
              : "border-white text-white"
          }`}
        >
          <input
            type="password"
            placeholder="PASSWORD"
            id="password"
            name="password"
            className="absolute top-0 left-0 w-full
             h-full pl-2 bg-transparent border-none outline-none rounded-md"
            onChange={() => setPassword(event.target.value)}
          />
        </div>

        <button
          className={`w-20 h-10 px-4 py-2 rounded-md 
            ${
              theme.theme == "dark"
                ? "text-white bg-black hover:bg-[#1e1d1d]"
                : "text-black bg-white  hover:bg-[#f1f1f1]"
            }`}
          onClick={handleLoginBtnClick}
        >
          LOGIN
        </button>
      </div>
    </div>
  );
};

export default Login;

Login.propTypes = {
  closeLoginForm: PropTypes.func.isRequired,
};
