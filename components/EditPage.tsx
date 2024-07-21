'use client'
import {z} from 'zod'
import {motion} from 'framer-motion'
import JoditEditor from "jodit-react";

import { Input } from '@/components/ui/input';
import { UploadButton } from '@/utils/uploadthing';
import Image from 'next/image';
import axios from 'axios'
import { title } from 'process';
import toast from 'react-hot-toast';
import { Button } from '@/components/ui/button';
import { CreateData, Editpage } from '@/actions/create';
import { useEffect, useRef, useState } from 'react';
const formDataType = z.object({
    title:z.string().min(1,{
        message:'title cannot be empty'
    }),
    content:z.string().min(1,{
        message:'content cannot be empty'
    }),
    image:z.string().optional(),
    postId:z.string()
})

interface Author {
    id: string;
    name: string | null;
    email: string | null;
    emailVerified: Date | null;
    image: string | null;
  }
  
  interface Post {
    author: Author;
    id: string;
    title: string;
    content: string;
    image: string | null;
    authorEmail: string;
    createdAt: Date;
    updatedAt: Date;
  }
const EditPage = (post:any) => {
    const editor = useRef(null);
    const [allData, SetAllData]=useState<any>()
    const [content, setContent] = useState<any>();
    const [image, setImage] = useState<string>('')
    const handleForm =async (formdata:FormData)=>{
   
        const zodFormData = formDataType.safeParse({
            title:formdata.get('title'),
            content:formdata.get('content'),
            image:formdata.get('image'),
            postId:formdata.get('postId')
        })

        if(zodFormData.error){
            toast.error('will the field properly')
            return
        }
        console.log(zodFormData.data)
        const v = zodFormData.data
        console.log('image url is', v.image)
        await Editpage(v.content,v.image,v.title,v.postId)

    }
    useEffect( ()=>{
        const get=async()=>{
            console.log('post from the use effects',post.post);
            
            const uniqePost = await axios.get(`/api/update/?id=${post.post}`)
            console.log(uniqePost.data.post)
            SetAllData(uniqePost.data.post)
            setImage(uniqePost.data.post.image)
            console.log(uniqePost.data.post.image)
        }
        get()
},[])
  return (
    // <><h1></h1></>
    <div 
    className='flex mx-auto max-w-3xl shadow-sm rounded flex-col gap-y-6 p-5'
>
    <form action={handleForm} className='flex w-full shadow-sm rounded flex-col gap-y-6 p-5'>
    <div>
        <label htmlFor="title" className=" text-lg font-medium ">
            Title
        </label>
        <input type="text" hidden defaultValue={allData?.id} name='postId' />
        <Input
            id="title"
            type="text"
            placeholder="Enter your blog title"
            name='title'
            defaultValue={allData?.title}
        />
    </div>
    <div>
        <label htmlFor="title" className=" text-lg font-medium ">
            Image
        </label>
        {
            allData?.image || image ? <Image alt='image' width={600} height={300} className='rounded object-cover' src={image || allData.image} /> :
                <UploadButton

                    endpoint="imageUploader"
                    onClientUploadComplete={(res) => {
                        // Do something with the response
                        console.log("Files: ", res);
                        setImage(res[0].url)
                        //   alert("Upload Completed");
                    }}
                    onUploadError={(error: Error) => {
                        // Do something with the error.
                        alert(`ERROR! ${error.message}`);
                    }}
                />
        }
    </div>
    <div>
        <label htmlFor="title" className=" text-lg font-medium ">
            Content
        </label>
        <JoditEditor
            ref={editor}
            value={allData?.content}

            className='text-black dark:bg-black'
            // tabIndex of textarea
            // onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
            onChange={newContent => setContent(newContent)}
        />
        <input type="text" name='content' hidden defaultValue={content} />
        <input type="text" name='image' hidden defaultValue={image} />
    </div>
    <Button type='submit'> Update </Button>
    </form>
</div>
  )
}

export default EditPage