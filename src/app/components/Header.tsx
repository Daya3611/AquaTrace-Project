import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"

  
function Header() {
  return (
    <div className='fixed top-0 left-0 w-full bg-white shadow-lg z-50'>
      <div className='flex justify-between py-5 px-[55px]'>
        <div className='flex gap-2'>
        <h1 className='text-3xl font-bold '>AquaTrace</h1>
        {/* <h1 className='text-3xl font-bold border-b-4 border-blue-500  '>AquaTrace</h1> */}
        <div className='flex items-center text-center '>
            <span className='mt-3 '>
                <div className='w-2 h-2 rounded-full bg-blue-600 text-center items-center'>
                    <div className='w-2 h-2 rounded-full bg-blue-600 animate-ping'></div>
                </div>
            </span>
        </div>
        </div>
        
        <div className='pr-5'>
            <Sheet>
                <SheetTrigger><HamburgerMenuIcon className='size-6' /></SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                    <SheetTitle>Are you absolutely sure?</SheetTitle>
                    <SheetDescription>
                        This action cannot be undone. This will permanently delete your account
                        and remove your data from our servers.
                    </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </div>
      </div>
    </div>
  )
}

export default Header
