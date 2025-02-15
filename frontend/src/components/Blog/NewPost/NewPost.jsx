import { useContext, useState } from "react";
import { ThemeContext } from "../../../constants/Constants";
import RichTextEditor from "../RichTextEditor/RichTextEditor";
import axios from "axios";
import Cookies from "js-cookie";

const NewPost = () => {
  const theme = useContext(ThemeContext);

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [setEditorText] = useState("")

  const onRichTextEditorChange = (val) => {
    setEditorText(val)
    console.log(val)

    axios.post("http://localhost:9999/api/v1/blog/posts/new", 
    {title: title, description: description, post_contents: val}, {headers: {"Authorization": `Bearer ${Cookies.get('token')}`}})
    .then((res) => {
      console.log(res)
    })
  }

  return (
    <div className="px-[20%] pt-8 flex flex-col gap-10">
      <div className="form-field flex flex-col gap-2">
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

      <div className="form-field flex flex-col gap-2">
        <label htmlFor="postTitle" className="text-lg">
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

      <RichTextEditor onRichTextEditorChange={onRichTextEditorChange} />
    </div>
  );
};

export default NewPost;
