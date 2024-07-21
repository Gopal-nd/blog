import prisma from "@/utils/prisma";
// import { useSearchParams } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest,res:NextResponse){
    console.log(req.url.split('=')[1])
    const ID =req.url.split('=')[1]
    // const data = await req.json()\/
    // console.log( 'console.log in this is',req.nextUrl.searchParams.id)
    // const id:string= req.nextUrl.searchParams
    const data = await prisma.post.findUnique({
        where:{
            id:ID
        },
        include:{
            author:true
        }
    })
    return NextResponse.json({
        message:'good',
        post:data
    })
}