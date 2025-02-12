import { useContext } from "react";
import { ThemeContext } from "../../../constants/Constants";
import RichTextEditor from "../RichTextEditor/RichTextEditor";

const NewPost = () => {
  const theme = useContext(ThemeContext);

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
          onChange={null}
        />
      </div>

      <RichTextEditor />
    </div>
  );
};

export default NewPost;
