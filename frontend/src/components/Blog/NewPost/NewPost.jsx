import { useContext, useState } from "react";
import { ThemeContext } from "../../../constants/Constants";
import RichTextEditor from "../RichTextEditor/RichTextEditor";
import axios from "axios";
import Cookies from "js-cookie";
import { MdPublish } from "react-icons/md";

const NewPost = () => {
  const theme = useContext(ThemeContext);

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [editorText, setEditorText] = useState("")

  const onRichTextEditorChange = (val) => {
    setEditorText(val)
  }

  const savePost = () => {
    console.log(editorText)
    axios.post("http://localhost:9999/api/v1/blog/posts/new", 
      {title: title, description: description, post_contents: editorText}, {headers: {"Authorization": `Bearer ${Cookies.get('token')}`}})
      .then((res) => {
        console.log(res)
      })
  }

  return (
    <div className="flex flex-col gap-8">
      
      <div className="flex flex-col gap-2">
        <label htmlFor="postTitle" className="text-lg">
          Post Title
        </label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          className={` 
            pl-2 bg-transparent outline-none w-full h-12 border-2 
            rounded-md text-lg ${
              theme.theme == "dark" ? "border-teal-500" : "border-indigo-500"
            }`}
            onChange={() => setTitle(event.target.value)}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="postDescription" className="text-lg">
          Post Description
        </label>
        <textarea
          id="postDescription"
          name="postDescription"
          className={` 
            pl-2 bg-transparent outline-none w-full h-12 border-2 
            rounded-md text-lg ${
              theme.theme == "dark" ? "border-teal-500" : "border-indigo-500"
            }`}
          onChange={() => setDescription(event.target.value)}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-lg">Post Contents</label>
        <RichTextEditor onRichTextEditorChange={onRichTextEditorChange} />
      </div>

      <div className="flex justify-center items-center">
        <button className={`w-[150px] h-[40px] btn flex justify-center items-center gap-1 ${theme.theme == 'dark' ? 'btn-dark-theme' : 'btn-light-theme'}`}
        onClick={savePost}
          >
          PUBLISH{" "}
          <MdPublish className="text-xl" />
        </button>
      </div>
    </div>
  );
};

export default NewPost;
