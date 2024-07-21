
import React, { useState, useRef, useMemo, useEffect } from 'react';
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
import EditPage from '@/components/EditPage';
import prisma from '@/utils/prisma';
import Upload from '@/components/upload';
import Texteditor from '@/components/Texteditor';

// const formDataType = z.object({
//     title:z.string().min(1,{
//         message:'title cannot be empty'
//     }),
//     content:z.string().min(1,{
//         message:'content cannot be empty'
//     }),
//     image:z.string().optional()
// })
const Create = async({params}:{params:{id:string}}) => {
  
 
 

    return (
        <EditPage post={params.id}/>
    //     <div
    //     className='flex mx-auto max-w-4xl shadow-sm rounded flex-col gap-y-6 p-5'
    // >
    //     <form action={EditPage} className='flex w-full shadow-sm rounded flex-col gap-y-6 p-5'>
    //     <div>
    //         <label htmlFor="title" className=" text-lg font-medium ">
    //             Title
    //         </label>
    //         <input type="text" hidden defaultValue={post?.id} name='postId' />
    //         <Input
    //             id="title"
    //             type="text"
    //             placeholder="Enter your blog title"
    //             name='title'
    //             defaultValue={post?.title}
    //         />
    //     </div>
    //     <div>
    //         <label htmlFor="title" className=" text-lg font-medium ">
    //             Image
    //         </label>
    //         <Upload post={post}/>
    //         {/* */}
    //     </div>
    //     <div>
    //         <label htmlFor="title" className=" text-lg font-medium ">
    //             Content
    //         </label>
    //         <Texteditor post={post}/>
    //         {/* */}
    //         <textarea rows={30} name='content' defaultValue={post?.content}  />
    //         <input type="text" name='image' hidden defaultValue={post?.image??''} />
    //     </div>
    //     <Button type='submit'> Update </Button>
    //     </form>
    // </div>
    );
}

export default Create
