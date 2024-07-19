'use server'

import prisma from "@/utils/prisma"
import { GetUserEmail,GetUserName } from "@/utils/session"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

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
