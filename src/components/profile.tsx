"use client";
import Image from "next/image";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { AuthProps } from "./navbar";
import { signOut } from "next-auth/react";

const Profile = ({authenticatedUser}: AuthProps) => {
  if(authenticatedUser == null) return
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex h-full items-center outline-none">
      <Image
          src={authenticatedUser?.user?.image || '/defaultimage.png'}
          className="rounded-full border h-8 w-8"
          height={50}
          width={50}
          alt="Profile"
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem onClick={()=> signOut()}>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default Profile