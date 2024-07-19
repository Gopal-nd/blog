import React from 'react'

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Sxf0cAGXzhc
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import prisma from '@/utils/prisma'
import Image from 'next/image'
import {motion} from 'framer-motion'
const Blog = async({params}:{params:{id:string}}) => {
  
const post = await prisma.post.findUnique({
    where:{
        id:params.id
    },include:{
        author:true
    }
})
  return (
    <div>
      <section className="w-full pt-12 md:pt-24 lg:pt-32 border-b">
        <div className="container space-y-10 xl:space-y-16">
          <div className="grid gap-4 px-4 md:grid-cols-2 md:gap-16">
            <div>
              <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                {post?.title}
              </h1>
            </div>
            <div className="flex flex-col items-start space-y-4">
              <Image
             src={post?.image?(post?.image):'/sign.jpg'}       width={800}
                height={450}
                alt="Blog Post Image"
                className="aspect-[16/9] overflow-hidden rounded-lg object-cover"
              />
            </div>
          </div>
          <div className="prose prose-gray max-w-3xl mx-auto dark:prose-invert px-4">
           
           <div dangerouslySetInnerHTML={{ __html: post?.content?? ""}} />
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex items-center space-x-4">
            <Avatar className="h-12 w-12 border-2 border-primary">
            
                <AvatarImage src={post?.image??''} />
                <AvatarFallback>N</AvatarFallback>
              
            </Avatar>
            <div>
              <h3 className="text-lg font-medium">{post?.author.name}</h3>
              <p className="text-sm text-muted-foreground">{post?.createdAt.toDateString()}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-6">
            <h2 className="text-3xl font-bold">Comments</h2>
            <form className="grid gap-4">
              <Textarea
                placeholder="Write your comment..."
                className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm transition-colors focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
              />
              <Button type="submit" className="w-full">
                Submit Comment
              </Button>
            </form>
            <div className="space-y-6">
              <div className="grid gap-4">
                <div className="flex items-start space-x-4">
                  <Avatar className="h-10 w-10 border-2 border-primary">
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>AC</AvatarFallback>
                  </Avatar>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <h4 className="font-medium">Jane Doe</h4>
                      <p className="text-sm text-muted-foreground">2 days ago</p>
                    </div>
                    <p>
                      This is such a funny and clever story! I can't believe the king actually tried to tax jokes.
                      Jokester sounds like a real hero.
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid gap-4">
                <div className="flex items-start space-x-4">
                  <Avatar className="h-10 w-10 border-2 border-primary">
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>AC</AvatarFallback>
                  </Avatar>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <h4 className="font-medium">Bob Smith</h4>
                      <p className="text-sm text-muted-foreground">1 week ago</p>
                    </div>
                    <p>
                      I can't wait to read more about the Joke Tax Chronicles! This is such a creative and entertaining
                      story. The king sounds like a real tyrant, but Jokester seems like a delightful character.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
  

export default Blog