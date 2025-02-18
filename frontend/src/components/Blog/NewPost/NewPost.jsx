import { useContext, useRef, useState } from "react";
import { ThemeContext } from "../../../constants/Constants";
import RichTextEditor from "../RichTextEditor/RichTextEditor";
import axios from "axios";
import Cookies from "js-cookie";
import { MdPublish } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { IoCloudUploadOutline } from "react-icons/io5";
import Login from "../../Login/Login";

const NewPost = () => {
  const theme = useContext(ThemeContext);

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [editorText, setEditorText] = useState("")
  const [errors, setErrors] = useState({titleError: "", descriptionError: "", editorError: ""})
  const [mainImage, setMainImage] = useState(null)

  const [isPublishing, setIsPublishing] = useState(false)
  const [showLoginForm, setShowLoginForm] = useState(false)

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
    } else if(Cookies.get('token') == null){
      setShowLoginForm(true)
    } else {
      setIsPublishing(true)
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
            setIsPublishing(false)
            navigate("/blog")
          }
        })
        .catch((err) => {
          if(err.status == 401){
            setIsPublishing(false)
            setShowLoginForm(true)
            console.log("not authorized")
          }
        })
    }
    
  }

  const navigate = useNavigate()

  const [mainImageUrl, setMainImageUrl] = useState("")

  const handleMainImageChange = () => {
    setMainImage(event.target.files[0])
    setMainImageUrl(window.URL.createObjectURL(event.target.files[0]))
  }

  const mainImageRef = useRef()

  const closeLoginForm = () => {
    setShowLoginForm(false);
  };

  return (
    <div className="flex flex-col gap-8">

      {
              showLoginForm ?
              <Login closeLoginForm={closeLoginForm} navigateTo=""/>
              : null
            }
      
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






            <div className="flex items-center justify-center">
            
            
            
            
            
            <div className={`relative rounded-md bg-gray-400/10 min-h-48 min-w-[400px] max-h-[400px] max-w-[400px] p-2
              hover:bg-gray-400/20 cursor-pointer border-dashed border-2
              ${theme.theme == "dark" ? "border-teal-500" : "border-indigo-500"} flex items-center justify-center`} 
              onClick={() => mainImageRef.current.click()}>



              {mainImageUrl != "" ? <img src={mainImageUrl} 
              className="rounded-md object-contain" alt="test" /> : <div className="flex flex-col items-center justify-center gap-3">
                                
              <div className={` border-2 ${theme.theme == "dark" ? "border-teal-500" : "border-indigo-500"} p-4 rounded-full`}>
              <IoCloudUploadOutline className="text-4xl" />
              </div>

              <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Main Post Image</span></p>
          </div>}

              <input type="file" className="hidden" ref={mainImageRef} onChange={handleMainImageChange}/>
            </div>
            </div>
















      

      <div className="flex flex-col gap-2">
        <label htmlFor="postDescription" className="text-lg">
          Post Description
        </label>
        <textarea
          id="postDescription"
          name="postDescription"
          className={` 
            pl-2 py-2 bg-transparent outline-none w-full h-12 border-2 
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

      <div className="flex gap-2 justify-center items-center">
        <button disabled={isPublishing} className={`disabled:bg-gray-400 disabled:cursor-default w-[150px] h-[40px] btn flex justify-center items-center gap-1 ${theme.theme == 'dark' ? 'btn-dark-theme' : 'btn-light-theme'}`}
        onClick={savePost}
          >
          



          {isPublishing ? <><span>PUBLISH</span><MdPublish className="text-xl" /><span className="material-symbols-rounded animate-spin">sync</span></> : <><span>PUBLISH</span><MdPublish className="text-xl" /></>}
        </button>
      </div>
    </div>
  );
};

export default NewPost;
