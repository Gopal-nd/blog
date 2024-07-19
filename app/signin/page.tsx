"use client";
import { signIn, signOut, useSession } from "next-auth/react"
//  * v0 by Vercel.
//  * @see https://v0.dev/t/7VCi5kGoKjh
//  * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
//  */
import { Button } from "@/components/ui/button"
import Router, { useRouter } from "next/navigation";

export default function Component() {
    const session = useSession();
const router = useRouter()

  return (
    <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
      <div className="flex flex-col items-center justify-center bg-primary p-8 text-primary-foreground">
        <div className="space-y-4">
          <div className="flex items-center justify-center">
            <ChromeIcon className="h-8 w-8 mr-2" />
            <h2 className="text-2xl font-bold">Sign in with Google</h2>
          </div>
          <Button onClick={()=>signIn('google')} variant="outline" className="w-full text-black dark:text-white">
            Sign in with Google
          </Button>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center bg-background p-8">
        <img src="/sign.jpg" alt="Blog Website" className="max-w-full rounded-lg shadow-lg" />
        <div className="mt-6 text-center">
          <h2 className="text-2xl font-bold">Welcome to our Blog</h2>
          <p className="mt-2 text-muted-foreground">
            Discover the latest news, insights, and stories from our vibrant community.
          </p>
        </div>
      </div>
    </div>
  )
}

function ChromeIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
      <line x1="21.17" x2="12" y1="8" y2="8" />
      <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
      <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
    </svg>
  )
}


function XIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}