import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"

import prisma from "./prisma"

export const authOptions = {
    adapter:PrismaAdapter(prisma),
    providers:[
      Google({
          clientId: process.env.GOOGLE_CLIENT_ID||'886971285695-ei30vgf9rfi8f5go04ppjo317l1rnto9.apps.googleusercontent.com',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ||"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"
  
      })
    ],
    secret:process.env.NEXTAUTH_PASSWORD||'secret',
    pages:{
      signIn:'/signin'
    }
}