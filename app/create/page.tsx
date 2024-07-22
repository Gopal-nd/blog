'use client';

import React, { useState, useRef } from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { UploadButton } from '@/utils/uploadthing';
import Image from 'next/image';
import { z } from 'zod';
import toast from 'react-hot-toast';
import { Button } from '@/components/ui/button';
import { CreateData } from '@/actions/create';

// Dynamically import JoditEditor to ensure it only runs on the client-side
const JoditEditor = dynamic(() => import('jodit-react').then(mod => mod.default), { ssr: false });

const formDataType = z.object({
    title: z.string().min(1, {
        message: 'Title cannot be empty'
    }),
    content: z.string().min(1, {
        message: 'Content cannot be empty'
    }),
    image: z.string().optional()
});

const CreatePostPage = () => {
    const editor = useRef(null);
    const [content, setContent] = useState('');
    const [image, setImage] = useState<string>('');

    const handleForm = async (formdata: FormData) => {
        const zodFormData = formDataType.safeParse({
            title: formdata.get('title'),
            content: formdata.get('content'),
            image: formdata.get('image')
        });

        if (zodFormData.error) {
            toast.error('Fill the fields properly');
            return;
        }
        console.log(zodFormData.data);
        const v = zodFormData.data;
        await CreateData(v.content, v.image, v.title);
    };

    return (
        <motion.div
            transition={{ duration: 1 }}
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            className='flex mx-auto max-w-4xl shadow-sm rounded flex-col gap-y-6 p-5'
        >
            <form action={handleForm} className='flex w-full shadow-sm rounded flex-col gap-y-6 p-5'>
                <div>
                    <label htmlFor="title" className="text-lg font-medium">Title</label>
                    <Input
                        id="title"
                        type="text"
                        placeholder="Enter your blog title"
                        name='title'
                    />
                </div>
                <div>
                    <label htmlFor="image" className="text-lg font-medium">Image</label>
                    {image ? (
                        <Image alt='image' width={600} height={300} className='rounded object-cover' src={image} />
                    ) : (
                        <UploadButton
                            endpoint="imageUploader"
                            onClientUploadComplete={(res) => {
                                console.log("Files: ", res);
                                setImage(res[0].url);
                            }}
                            onUploadError={(error: Error) => {
                                console.log(error)
                                alert(`ERROR! ${error.message}`);
                            }}
                        />
                    )}
                </div>
                <div>
                    <label htmlFor="content" className="text-lg font-medium">Content</label>
                    <JoditEditor
                        ref={editor}
                        value={content}
                        className='text-black dark:bg-black'
                        onChange={newContent => setContent(newContent)}
                    />
                    <input type="text" name='content' hidden defaultValue={content} />
                    <input type="text" name='image' hidden defaultValue={image} />
                </div>
                <Button type='submit'>Publish</Button>
            </form>
        </motion.div>
    );
};

export default CreatePostPage;
