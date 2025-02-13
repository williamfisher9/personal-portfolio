import { BiBold, BiItalic, BiAlignLeft, BiAlignMiddle, BiAlignRight, 
    BiCodeAlt, BiCodeCurly, BiImageAlt, BiListOl, BiListUl, 
    BiStrikethrough, BiUnderline, 
    BiHeading} from "react-icons/bi"

import './ToolsBar.css'
import { useContext, useState } from "react"
import { ThemeContext } from "../../../../constants/Constants"
import ToolButton from "./ToolButton/ToolButton"
import { BsTypeH1, BsTypeH2, BsTypeH3 } from "react-icons/bs"
import ImageSelector from "../ImageSelector/ImageSelector"

const ToolsBar = ({editor}) => {
    const theme = useContext(ThemeContext)
    const [showImageSelector, setShowImageSelector] = useState(false)

    const tools = [
        { task: "h1", icon: <BsTypeH1 className="toolbar-icon" /> },
        { task: "h2", icon: <BsTypeH2 className="toolbar-icon" /> },
        { task: "h3", icon: <BsTypeH3 className="toolbar-icon" /> },
      { task: "bold", icon: <BiBold className="toolbar-icon" /> },
      { task: "italic", icon: <BiItalic className="toolbar-icon" /> },
      { task: "strike", icon: <BiStrikethrough className="toolbar-icon" /> },
      { task: "underline", icon: <BiUnderline className="toolbar-icon" /> },
      { task: "codealt", icon: <BiCodeAlt className="toolbar-icon" /> },
      { task: "codecurly", icon: <BiCodeCurly className="toolbar-icon" /> },
      { task: "image", icon: <BiImageAlt className="toolbar-icon" /> },
      { task: "orderedList", icon: <BiListOl className="toolbar-icon" /> },
      { task: "bulletList", icon: <BiListUl className="toolbar-icon" /> },
      { task: "right", icon: <BiAlignRight className="toolbar-icon" /> },
      { task: "center", icon: <BiAlignMiddle className="toolbar-icon" /> },
      { task: "left", icon: <BiAlignLeft className="toolbar-icon" /> },
    ];

    const handleOnClick = (task) => {
      switch (task) {
        case "h1":
          return editor?.chain().focus().toggleHeading({level: 1}).run();
          case "h2":
          return editor?.chain().focus().toggleHeading({level: 2}).run();
          case "h3":
          return editor?.chain().focus().toggleHeading({level: 3}).run();
        case "bold":
          return editor?.chain().focus().toggleBold().run();
        case "italic":
          return editor?.chain().focus().toggleItalic().run();
        case "strike":
          return editor?.chain().focus().toggleStrike().run();
        case "underline":
          return editor?.chain().focus().toggleUnderline().run();
        case "codealt":
          return editor?.chain().focus().toggleCode().run();
        case "codecurly":
          return editor?.chain().focus().toggleCodeBlock().run();
        case "imagealt":
          return editor?.chain().focus().toggleItalic().run();
        case "orderedList":
          return editor.chain().focus().toggleOrderedList().run()
        case "bulletList":
          return editor.chain().focus().toggleBulletList().run()
        case "right":
          return editor?.chain().focus().setTextAlign('right').run();
        case "center":
          return editor?.chain().focus().setTextAlign('center').run();
        case "left":
          return editor?.chain().focus().setTextAlign('left').run();
        case "image":
          setShowImageSelector(true)


          
      }
    };


    const [file, setFile] = useState(null)

    const storeFileHere = (file) => {
      console.log(file)


      const urlFor = window.URL.createObjectURL(file)

      console.log(urlFor)

      editor.commands.setImage({
        src: urlFor,
        alt: 'A boring example image',
        title: 'An example',
      })
    }

    const closeImageSelector = () => {
      setShowImageSelector(false)
    }

    return (
      <>
      <ImageSelector visible={showImageSelector} storeFileHere={storeFileHere} closeImageSelector={closeImageSelector}/>
        
        <div className={`container border rounded-t-md w-full flex py-4 gap-4 px-4 ${theme.theme == 'dark' ? 'border-teal-500' : 'border-indigo-500'}`} >
            {
                tools.map(({task, icon}) => {
                    return <ToolButton key={task} active={editor?.isActive(task) || editor?.isActive({textAlign: task})} onClick={() => handleOnClick(task)}>{icon}</ToolButton>
                })
            }
        </div>
        </>
    )
}

export default ToolsBar