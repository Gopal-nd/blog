'use client'
import React, { useState, useRef, useMemo } from 'react';
import JoditEditor from 'jodit-react';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { UploadButton } from '@/utils/uploadthing';
import Image from 'next/image';
import {z} from 'zod'
import { title } from 'process';
import toast from 'react-hot-toast';
import { Button } from '@/components/ui/button';
import { CreateData } from '@/actions/create';

const formDataType = z.object({
    title:z.string().min(1,{
        message:'title cannot be empty'
    }),
    content:z.string().min(1,{
        message:'content cannot be empty'
    }),
    image:z.string().optional()
})
const Create = () => {
    const editor = useRef(null);
    const [content, setContent] = useState('');
    const [image, setImage] = useState<string>('')
    const handleForm =async (formdata:FormData)=>{
   
        const zodFormData = formDataType.safeParse({
            title:formdata.get('title'),
            content:formdata.get('content'),
            image:formdata.get('image')
        })

        if(zodFormData.error){
            toast.error('will the field properly')
            return
        }
        console.log(zodFormData.data)
        const v = zodFormData.data
        await CreateData(v.content,v.image,v.title)

    }

    return (
        <motion.div
            transition={{ duration: 1 }}
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            className='flex mx-auto max-w-4xl shadow-sm rounded flex-col gap-y-6 p-5'
        >
            <form action={handleForm} className='flex w-full shadow-sm rounded flex-col gap-y-6 p-5'>
            <div>
                <label htmlFor="title" className=" text-lg font-medium ">
                    Title
                </label>
                <Input
                    id="title"
                    type="text"
                    placeholder="Enter your blog title"
                    name='title'
                />
            </div>
            <div>
                <label htmlFor="title" className=" text-lg font-medium ">
                    Image
                </label>
                {
                    image ? <Image alt='image' width={600} height={300} className='rounded object-cover' src={image} /> :
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
                    value={content}

                    className='text-black dark:bg-black'
                    // tabIndex of textarea
                    // onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                    onChange={newContent => setContent(newContent)}
                />
                <input type="text" name='content' hidden defaultValue={content} />
                <input type="text" name='image' hidden defaultValue={image} />
            </div>
            <Button type='submit'> Publish </Button>
            </form>
        </motion.div>
    );
}

export default Create
