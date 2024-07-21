'use client'
// import { UploadButton } from '@uploadthing/react';
import { UploadButton } from '@/utils/uploadthing';
import Image from 'next/image';
import React from 'react'

const Upload = (post:any) => {
  return (
    <>
     {
                post?.image ? <Image alt='image' width={600} height={300} className='rounded object-cover' src={post?.image} /> :
                    <UploadButton
    
                        endpoint="imageUploader"
                        onClientUploadComplete={(res) => {
                            // Do something with the response
                            console.log("Files: ", res);
                            // setImage(res[0].url)
                            //   alert("Upload Completed");
                        }}
                        onUploadError={(error: Error) => {
                            // Do something with the error.
                            alert(`ERROR! ${error.message}`);
                        }}
                    />
            }</>
  )
}

export default Upload