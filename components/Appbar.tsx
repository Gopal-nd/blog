"use client";

import React, { useState } from "react";
import { BadgePlus, Menu, Search, UserRoundPlus, X ,} from "lucide-react";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "./ui/button";
import { motion ,AnimatePresence} from "framer-motion";
import Profile from "./ui/Profile";
const Navbar = () => {
    const session =useSession()
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const navLink = [
    { Label: "Home", Link: "/" },
    { Label: "Product", Link: "#" },
    { Label: "About", Link: "#" },
    { Label: "Contact", Link: "contact" },
  ];

  return (
    // simple nav bar
    <><AnimatePresence>


      <nav className="flex border-b-2 border-slate-600 justify-between px-8 items-center py-4">
        <section className="flex gap-4 items-center">
          <div className="md:hidden">
            <Menu className="text-7xl " onClick={() => setIsOpen(!isOpen)} />
          </div>
          <Link href={"/"} className="pb-2">
            <h1 className="text-3xl font-bold">Blog</h1>
          </Link>
        </section>

        <section className=" hidden md:flex gap-5 items-center">
        <Link href={'/create'} className="hover:font-bold px-2 py-3 shadow-lg rounded-lg flex items-center gap-1 "> <BadgePlus /> Create</Link>
        <Link href={'/search'} className="hover:font-bold px-2 py-3 shadow-lg rounded-lg flex items-center gap-1 "> <Search /> Search</Link>
        <Link href={'/profile'} className="hover:font-bold px-2 py-3 shadow-lg rounded-lg flex items-center gap-1 ">  <UserRoundPlus /> Profile</Link>
        </section>
        {isOpen && (
          <motion.div
         
            className="fixed h-full backdrop-blur-sm top-0 right-0 w-screen md:hidden z-50 bg-black/50  transition-all duration-200 ease-in-out "
            onClick={() => setIsOpen(!isOpen)}
          >
            <motion.section 
             initial={{opacity:0,x:20}}
             animate={{opacity:1,x:0}}
             exit={{opacity:0}}
             transition={{duration:.5}}
             className="text-black bg-white flex-col absolute left-0 top-0 h-screen p-8 gap-4 z-50 flex w-56 transition-all duration-200 ease-in-out">
              <X
                className="mb-10 text-4xl"
                onClick={() => setIsOpen(!isOpen)}
              />
       <Link href={'/create'} className="hover:font-bold px-2 py-3 shadow-lg rounded-lg flex items-center gap-1 "> <BadgePlus /> Create</Link>
       <Link href={'/search'} className="hover:font-bold px-2 py-3 shadow-lg rounded-lg flex items-center gap-1 "> <Search /> Search</Link>
       <Link href={'/profile'} className="hover:font-bold px-2 py-3 shadow-lg rounded-lg flex items-center gap-1 ">  <UserRoundPlus /> Profile</Link>
              <div className="text-2xl font-semibold fixed left-0 bottom-0 px-8 py-4">
        
              </div>
            </motion.section>
          </motion.div>
        )}
        <section className="flex gap-4 items-center justify-end">
        {
session.data?.user?.email ?<Profile/>
:(<Button onClick={()=>signIn()}>Login</Button>)
      }
          <ModeToggle />

        </section>
      </nav>
      </AnimatePresence>
    </>
  );
};

export default Navbar;