import { useContext, useRef, useState } from "react";
import { ThemeContext } from "../../../constants/Constants";
import RichTextEditor from "../RichTextEditor/RichTextEditor";
import axios from "axios";
import Cookies from "js-cookie";
import { MdPublish } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { IoCloudUploadOutline } from "react-icons/io5";

const NewPost = () => {
  const theme = useContext(ThemeContext);

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [editorText, setEditorText] = useState("")
  const [errors, setErrors] = useState({titleError: "", descriptionError: "", editorError: ""})
  const [mainImage, setMainImage] = useState(null)

  const onRichTextEditorChange = (val) => {
    setEditorText(val)
  }

  const savePost = () => {
    let hasErrors = false;
    let formErrors = {titleError: "", descriptionError: "", editorError: ""};

    if(title.trim() == ""){
      hasErrors = true;
      formErrors = {...formErrors, titleError: "title should not be null"};
    }

    if(description.trim() == ""){
      hasErrors = true;
      formErrors = {...formErrors, descriptionError: "description should not be null"};
    }

    if(editorText.trim() == ""){
      hasErrors = true;
      formErrors = {...formErrors, editorError: "editor should not be null"};
    }

    console.log(editorText)

    if(hasErrors){
      setErrors(formErrors)
    } else {
      let formData = new FormData()
      formData.append("title", title)
      formData.append("description", description)
      formData.append("post_contents", editorText)
      formData.append("file", mainImage)

      console.log("xxxxx")

      axios.post("http://localhost:9999/api/v1/blog/posts/new", formData, {headers: {"Authorization": `Bearer ${Cookies.get('token')}`}})
        .then((res) => {
          console.log(res)
          if(res.status == 201){
            navigate("/blog")
          }
        })
    }
    
  }

  const navigate = useNavigate()

  const handleMainImageChange = () => {
    setMainImage(event.target.files[0])
  }

  const mainImageRef = useRef()

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
        <label className="text-sm text-red-500">
        {errors.titleError}
        </label>
      </div>

      <div className="flex flex-col gap-2 items-center justify-center w-full">        
                    <label className={`flex flex-col items-center justify-center w-full h-44 border-2 
                         border-dashed rounded-lg cursor-pointer ${
                          theme.theme == "dark" ? "border-teal-500" : "border-indigo-500"
                        }`} onClick={() => mainImageRef.current.click()}>
                            
                            <div className="flex flex-col items-center justify-center gap-3">
                                
                                <div className={`border-2 ${theme.theme == "dark" ? "border-teal-500" : "border-indigo-500"} p-4 rounded-full`}>
                                <IoCloudUploadOutline className="text-4xl" />
                                </div>

                                <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Upload main post image</span></p>
                                <p className="text-xs text-gray-500">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                            </div>
        
                            
                        </label>

                        <input type="file" className="hidden" ref={mainImageRef} onChange={handleMainImageChange}/>
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

<label className="text-sm text-red-500">
{errors.descriptionError}
        </label>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-lg">Post Contents</label>
        <RichTextEditor onRichTextEditorChange={onRichTextEditorChange} />
        


        <label className="text-sm text-red-500">
          {errors.editorError}
        </label>



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
