
import Google from "next-auth/providers/google"
import { PrismaAdapter } from "@auth/prisma-adapter"


import prisma from "./prisma"

export const authOptions = {
    adapter:PrismaAdapter(prisma),
    providers:[
      Google({
          clientId: process.env.GOOGLE_CLIENT_ID??'',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ??""
  
      })
    ],
    secret:process.env.NEXTAUTH_PASSWORD||'secret',
    pages:{
      signIn:'/signin'
    }
}