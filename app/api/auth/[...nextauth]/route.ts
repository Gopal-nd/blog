

import NextAuth from "next-auth/next";

import { authOptions } from "@/utils/auth";

const auth:any = authOptions;
const handler =NextAuth(auth)

export  {handler as GET, handler as POST}

