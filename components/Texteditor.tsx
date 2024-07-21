'use client'
import JoditEditor from 'jodit-react'
import React, { useEffect, useRef, useState } from 'react'

const Texteditor = (post:any) => {
    const editor = useRef(null);
    const [content, setContent] = useState('');
    useEffect(()=>{
        setContent(post.content)
    })
  return (
    <>
     <JoditEditor
                ref={editor}
                value={content}
    
                className='text-black dark:bg-black'
                // tabIndex of textarea
                // onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                onChange={newContent => setContent(newContent)}
            /></>
  )
}

export default Texteditor