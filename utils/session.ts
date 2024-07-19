import { getServerSession } from "next-auth"
import { authOptions } from "./auth"


export async function GetUserEmail(){
    const auth:any=authOptions;
const session:any= await getServerSession(auth)
return session?.user?.email
}
export async function GetUserName(){
    const auth:any=authOptions;
const session:any= await getServerSession(auth)
return session?.user?.name
}