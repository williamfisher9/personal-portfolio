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

const extensions = [
  StarterKit.configure({heading: {levels: [1, 2, 3]}}), 
  Underline,
  TextAlign.configure({types: ['heading', 'paragraph'], alignments: ['left', 'right', 'center', 'justify'], defaultAlignment: 'left'}), 
  Placeholder.configure({placeholder: "Write something..."}),
  Image.configure({})
]

const RichTextEditor = ({onRichTextEditorChange}) => {
  const theme = useContext(ThemeContext)

  const editor = useEditor({
    extensions,
    editorProps: {
      attributes: {
        class: `prose prose-sm sm:prose lg:prose-lg xl:prose-2xl focus:outline-none rounded-b-md border-2 ${theme.theme == 'dark' ? 'border-teal-500' : 'border-indigo-500'} p-4`,
      },
    }
  })

  editor.on('update', ({ editor }) => {
    onRichTextEditorChange(editor.getHTML())
  })

  return <div className={`flex flex-col ${theme.theme == 'dark' ? 'text-teal-500' : 'text-indigo-500'}`}>
    <ToolsBar editor={editor} />
    <EditorContent editor={editor} />
  </div>
}

export default RichTextEditor