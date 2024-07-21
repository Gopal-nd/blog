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
console.log(Email,name)
    console.log(content,image,title)
    const res =await prisma.post.create({
        data:{
            content:content,
            title:title,
            image:image,
            authorEmail:Email
        }
    })
    console.log(res.id)
    revalidatePath('/')
    redirect(`/post/${res.id}`)
}
export  async function Editpage (content: string, image: string | undefined, title: string,postId:string ){
const Email = await GetUserEmail()
const name = await GetUserName()
console.log(Email,name,image,postId)
    console.log(content,'image is ',(image),title)
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
    console.log(res.id)
    revalidatePath('/')
    redirect(`/post/${res.id}`)
}


const zodvalidatedDelete = z.string()
export async function deletePost(formdata:FormData) {
    const getId = formdata.get('id')
    const id = zodvalidatedDelete.safeParse(getId)
    console.log('id is thw sahhds',id.data) 

    const deletePost = await prisma.post.delete({
        where:{
            id:id.data
        }
    })
    revalidatePath('/')
    redirect(`/`)
}