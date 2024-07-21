import Google from "next-auth/providers/google";

export const authOptions ={
    
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