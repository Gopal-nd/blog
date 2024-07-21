'use client'

import { handleSearch } from "@/actions/create"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import prisma from "@/utils/prisma"

import { Search } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import { z } from "zod"

const searchSchema =  z.object({
    search:z.string().min(1,{
        message:'it should more than one char'
    })
})

const SearchPage =() => {
    const [post,setPost]=useState<any>([])
   const handle =async(formdata:FormData)=>{
    const searchValue ={search:formdata.get('search')}
    const zodvalidated= searchSchema.safeParse(
        searchValue
    )
    console.log(zodvalidated)
    if(!zodvalidated.success){
        console.log(zodvalidated.error.issues)
        toast.error('error '+zodvalidated.error.issues)
        return
    }
    const res = await handleSearch(zodvalidated.data.search);
    console.log('response is: ',res)
    setPost(res.response)
   }
    // const post= await posts()
  return (
    <div className="flex flex-col px-4 py-4 justify-center items-center gap-6 mx-auto">
        <form action={handle} className="flex gap-8">
        <Input type="text" placeholder="me" name="search"  className="px-2 py-2 rounded border-slate-100 boredr-2" />
        <Button type="submit"> search</Button>
        </form>
        <center>
{
post.lenght &&(
<span>Available result:</span>

)
}
        </center>
    
        <section className="grid grid-cols-1 gap-6 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:p-6">
      {
        post.map((post:any)=>(
          <div key={post.id} className="group relative overflow-hidden rounded-lg bg-background shadow-sm transition-all hover:shadow-md">
          <Link href={`/post/${post.id}`} className="absolute inset-0 z-10" prefetch={true}>
            <span className="sr-only">View post</span>
          </Link>
          <img
            src={post.image?post.image:'sign.jpg'}
            alt="Blog post cover"
            width={600}
            height={400}
            className="h-48 w-full object-cover transition-all group-hover:scale-105"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-foreground">{post.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground line-clamp-4">
            <div dangerouslySetInnerHTML={{ __html: post?.content?? ""}} />
            </p>
            <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
              <Avatar className="h-6 w-6 border">
                <AvatarImage src={post.author.image??''} />
                <AvatarFallback>{post.author.name?.charAt(0).toUpperCase()}</AvatarFallback>
              </Avatar>
              <span>{post.author.name}</span>
            </div>
          </div>
        </div>
        ))
      }

    </section></div>
  )
}

export default SearchPage