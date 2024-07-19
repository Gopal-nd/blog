/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Tvn0IbhJoG1
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import prisma from "@/utils/prisma"

export default  async function Component() {
  const posts= await prisma.post.findMany({
    
    orderBy:{
      createdAt:'asc'
    },
    include:{
      author:true
    }
  })
  return (
    <section className="grid grid-cols-1 gap-6 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:p-6">
      {
        posts.map((post)=>(
          <div key={post.id} className="group relative overflow-hidden rounded-lg bg-background shadow-sm transition-all hover:shadow-md">
          <Link href={`/post/${post.id}`} className="absolute inset-0 z-10" prefetch={true}>
            <span className="sr-only">View post</span>
          </Link>
          <img
            src={post.image?post.image:'sign.jpg'}
            alt="Blog post cover"
            width={600}
            height={400}
            className="h-48 w-full object-cover transition-all group-hover:scale-105"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-foreground">{post.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground line-clamp-4">
              {post.content}
            </p>
            <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
              <Avatar className="h-6 w-6 border">
                <AvatarImage src={post.author.image??''} />
                <AvatarFallback>{post.author.name?.charAt(0).toUpperCase()}</AvatarFallback>
              </Avatar>
              <span>{post.author.name}</span>
            </div>
          </div>
        </div>
        ))
      }

      <div className="group relative overflow-hidden rounded-lg bg-background shadow-sm transition-all hover:shadow-md">
        <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
          <span className="sr-only">View post</span>
        </Link>
        <img
          src="/placeholder.svg"
          alt="Blog post cover"
          width={600}
          height={400}
          className="h-48 w-full object-cover transition-all group-hover:scale-105"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-foreground">Mastering React Hooks</h3>
          <p className="mt-2 text-sm text-muted-foreground line-clamp-4">
            In this comprehensive guide, we dive deep into the world of React Hooks, exploring the most powerful and
            versatile hooks available in the React ecosystem. From state management to side effects, learn how to
            leverage hooks to write cleaner, more modular, and more testable React components.
          </p>
          <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
            <Avatar className="h-6 w-6 border">
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <span>Jane Doe</span>
          </div>
        </div>
      </div>
      <div className="group relative overflow-hidden rounded-lg bg-background shadow-sm transition-all hover:shadow-md">
        <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
          <span className="sr-only">View post</span>
        </Link>
        <img
          src="/placeholder.svg"
          alt="Blog post cover"
          width={600}
          height={400}
          className="h-48 w-full object-cover transition-all group-hover:scale-105"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-foreground">Optimizing Web Performance</h3>
          <p className="mt-2 text-sm text-muted-foreground line-clamp-4">
            In this article, we explore various techniques and strategies for optimizing the performance of your web
            applications. From leveraging modern web APIs to implementing best practices for asset optimization, learn
            how to deliver a lightning-fast experience for your users.
          </p>
          <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
            <Avatar className="h-6 w-6 border">
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <span>John Smith</span>
          </div>
        </div>
      </div>
      <div className="group relative overflow-hidden rounded-lg bg-background shadow-sm transition-all hover:shadow-md">
        <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
          <span className="sr-only">View post</span>
        </Link>
        <img
          src="/placeholder.svg"
          alt="Blog post cover"
          width={600}
          height={400}
          className="h-48 w-full object-cover transition-all group-hover:scale-105"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-foreground">Building Accessible Web Applications</h3>
          <p className="mt-2 text-sm text-muted-foreground line-clamp-4">
            In this comprehensive guide, we explore the principles and best practices for building accessible web
            applications. From understanding WCAG guidelines to implementing keyboard navigation and screen reader
            support, learn how to create inclusive experiences for users of all abilities.
          </p>
          <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
            <Avatar className="h-6 w-6 border">
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <span>Jane Smith</span>
          </div>
        </div>
      </div>
      <div className="group relative overflow-hidden rounded-lg bg-background shadow-sm transition-all hover:shadow-md">
        <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
          <span className="sr-only">View post</span>
        </Link>
        <img
          src="/placeholder.svg"
          alt="Blog post cover"
          width={600}
          height={400}
          className="h-48 w-full object-cover transition-all group-hover:scale-105"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-foreground">Exploring the Jamstack Revolution</h3>
          <p className="mt-2 text-sm text-muted-foreground line-clamp-4">
            In this article, we dive into the Jamstack architecture, exploring how it is transforming the way we build
            modern web applications. From the benefits of static site generation to the power of serverless functions,
            learn how the Jamstack can help you deliver fast, secure, and scalable web experiences.
          </p>
          <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
            <Avatar className="h-6 w-6 border">
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <span>John Doe</span>
          </div>
        </div>
      </div>
      <div className="group relative overflow-hidden rounded-lg bg-background shadow-sm transition-all hover:shadow-md">
        <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
          <span className="sr-only">View post</span>
        </Link>
        <img
          src="/placeholder.svg"
          alt="Blog post cover"
          width={600}
          height={400}
          className="h-48 w-full object-cover transition-all group-hover:scale-105"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-foreground">Mastering TypeScript for React</h3>
          <p className="mt-2 text-sm text-muted-foreground line-clamp-4">
            In this comprehensive guide, we explore the benefits of using TypeScript with React and dive into the core
            concepts and features of the language. From type annotations to advanced type-level programming, learn how
            to leverage the power of TypeScript to write more robust, maintainable, and scalable React applications.
          </p>
          <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
            <Avatar className="h-6 w-6 border">
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <span>Jane Smith</span>
          </div>
        </div>
      </div>
      <div className="group relative overflow-hidden rounded-lg bg-background shadow-sm transition-all hover:shadow-md">
        <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
          <span className="sr-only">View post</span>
        </Link>
        <img
          src="/placeholder.svg"
          alt="Blog post cover"
          width={600}
          height={400}
          className="h-48 w-full object-cover transition-all group-hover:scale-105"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-foreground">Designing Responsive Layouts</h3>
          <p className="mt-2 text-sm text-muted-foreground line-clamp-4">
            In this article, we explore the principles and best practices for designing responsive layouts that adapt
            seamlessly to different screen sizes and devices. From fluid grids to responsive typography, learn how to
            create web experiences that look great and perform well on any device.
          </p>
          <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
            <Avatar className="h-6 w-6 border">
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <span>John Smith</span>
          </div>
        </div>
      </div>
    </section>
  )
}