
import prisma from "@/utils/prisma";
import NextAuth from "next-auth/next";
import Google, { GoogleProfile } from "next-auth/providers/google";
import { Prisma, PrismaClient } from "@prisma/client"
import { PrismaAdapter} from '@auth/prisma-adapter'
import { authOptions } from "@/utils/auth";
import { Adapter } from "next-auth/adapters";
import { OAuthConfig } from "next-auth/providers/oauth";


interface authOptions {
  adapter: Adapter;
    providers: OAuthConfig<GoogleProfile>[];
    secret: string | undefined;
    pages: {
        signIn: string;
    };
}
const auth:any = authOptions;
const handler =NextAuth(auth)

export  {handler as GET, handler as POST}

