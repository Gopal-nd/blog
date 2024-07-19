/**
 * v0 by Vercel.
 * @see https://v0.dev/t/6nRpZWit2Xs
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import Link from "next/link"
import { signOut, useSession } from "next-auth/react"

export default function Profile() {
    const session = useSession()
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full">
          <Avatar className="h-8 w-8">
            <AvatarImage src={session.data?.user?.image??''} />
            <AvatarFallback>{session.data?.user?.name?.charAt(0).toUpperCase()}</AvatarFallback>
          </Avatar>
          <span className="sr-only">Toggle user menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <div className="flex items-center gap-2 p-2">
          <Avatar className="h-8 w-8">
          <Avatar className="h-8 w-8">
            <AvatarImage src={session.data?.user?.image??''} />
            <AvatarFallback>{session.data?.user?.name?.charAt(0).toUpperCase()}</AvatarFallback>
          </Avatar>
          </Avatar>
          <div className="grid gap-0.5 leading-none">
            <div className="font-semibold">{session.data?.user?.name}</div>
            <div className="text-sm text-muted-foreground">{session.data?.user?.email}</div>
          </div>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <div className="h-4 w-4" />
            <span>
                <Link href={'/profile'}>Profile</Link></span>
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem>
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <div className="h-4 w-4" />
            <span onClick={()=>signOut()}>Logout</span>
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}