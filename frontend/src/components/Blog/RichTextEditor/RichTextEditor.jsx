"use client";
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import ToolsBar from './ToolsBar/ToolsBar';
import { useContext } from 'react';
import { ThemeContext } from '../../../constants/Constants';
import Underline from '@tiptap/extension-underline'
import TextAlign from '@tiptap/extension-text-align'
import Placeholder from '@tiptap/extension-placeholder'
import Image from '@tiptap/extension-image';
import axios from 'axios';

const extensions = [
  StarterKit.configure({heading: {levels: [1, 2, 3]}}), 
  Underline,
  TextAlign.configure({types: ['heading', 'paragraph'], alignments: ['left', 'right', 'center'], defaultAlignment: 'left'}), 
  Placeholder.configure({placeholder: "Write something..."}),
  Image.configure({})
]

const RichTextEditor = ({onRichTextEditorChange}) => {
  const theme = useContext(ThemeContext)

  const editor = useEditor({
    extensions,
    editorProps: {
      attributes: {
        class: `prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none rounded-b-md border ${theme.theme == 'dark' ? 'border-teal-500' : 'border-indigo-500'} p-4`,
      },
    },
  })

  const saveBlogPost = () => {
    console.log(editor.getHTML())

    onRichTextEditorChange(editor.getHTML())    
  }

  return <div className={`flex flex-col ${theme.theme == 'dark' ? 'text-teal-500' : 'text-indigo-500'}`}>
    <ToolsBar editor={editor} />
    <EditorContent editor={editor}/>

    

    <button className={`btn flex gap-1 max-md:items-center  max-md:justify-center ${theme.theme == 'dark' ? 'btn-dark-theme' : 'btn-light-theme'}`}
    onClick={saveBlogPost}
    >
        Save{" "}
       <span className="material-symbols-rounded">save</span>
    </button>
  </div>
}

export default RichTextEditor