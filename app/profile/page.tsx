import prisma from '@/utils/prisma'
import { GetUserEmail } from '@/utils/session'
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import Link from 'next/link'
import React from 'react'

const Profile = async() => {
    const email:string|any =  await GetUserEmail()
    const posts = await prisma.post.findMany({
        where:{
            authorEmail:email
        },
        include:{
            author:true
        }
    })
  return (
    <>
    <h1 className='mt-4 mb-4 text-3xl font-bold'><center>My Posts</center></h1>
     <section className="grid grid-cols-1 gap-6 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:p-6">
      {
        posts.map((post)=>(
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
      </section>
    </>
  )
}

export default Profile