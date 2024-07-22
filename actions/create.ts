'use server'

import prisma from "@/utils/prisma"
import { GetUserEmail,GetUserName } from "@/utils/session"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { z } from "zod"

interface CreateData{
    title:string
    content:string
    image?:string
}
export  async function CreateData (content: string, image: string | undefined, title: string, ){
const Email = await GetUserEmail()
const name = await GetUserName()

    const res =await prisma.post.create({
        data:{
            content:content,
            title:title,
            image:image,
            authorEmail:Email
        }
    })
    
    revalidatePath('/')
    redirect(`/post/${res.id}`)
}
export  async function Editpage (content: string, image: string | undefined, title: string,postId:string ){
const Email = await GetUserEmail()
const name = await GetUserName()

    const res =await prisma.post.update({
        where:{
            id:postId
        },
        data:{
            content:content,
            title:title,
            image:image,
            authorEmail:Email
        }
    })

    revalidatePath('/')
    redirect(`/post/${res.id}`)
}


const zodvalidatedDelete = z.string()
export async function deletePost(formdata:FormData) {
    const getId = formdata.get('id')
    const id = zodvalidatedDelete.safeParse(getId)


    const deletePost = await prisma.post.delete({
        where:{
            id:id.data
        }
    })
    revalidatePath('/')
    redirect(`/`)
}


export const handleSearch =async(search:string)=>{


    const res = await prisma.post.findMany({
        where:{
            title:{
                contains:search.toLowerCase()||search.toUpperCase(),
            
            }
            
        },
        include:{
            author:true
        },
        orderBy:{
          createdAt:'desc'
        }
    })
  
    
    return{
        response:res
    }
    }


export const handleComment=async(formdata:FormData)=>{
const comment:string|any = formdata.get('comment')
const postId:string|any = formdata.get('postId')
const Email = await GetUserEmail()

if(!comment||!Email){
    return
}

const response = await prisma.comment.create({
    data:{
        comment:comment,
        postId:postId,
        authorEmail:Email
    }
})
revalidatePath(`/post/${postId}`)
redirect(`/post/${postId}`)
}
export const DeletComment=async(formdata:FormData)=>{
const commentId:string|any = formdata.get('commentid')

const Email = await GetUserEmail()

// ent,postId)
const response = await prisma.comment.delete({
    where:{
    id:commentId
    },include:{
        post:true
    }

})


revalidatePath(`/post/${response.post.id}`)
redirect(`/post/${response.post.id}`)
}