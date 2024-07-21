import prisma from "@/utils/prisma";

import { NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest,res:NextResponse){
    console.log(req.url.split('=')[1])
    const ID =req.url.split('=')[1]
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