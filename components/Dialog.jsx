"use client";
import { useLayoutEffect, useState } from "react";
// import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";

export function DialogComponent() {
  const [isOpen, setIsOpen] = useState(false);

  useLayoutEffect(() => {
    setIsOpen(true);
  }, []);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      {/* <DialogTrigger asChild>
        <Button variant='outline'>Edit Profile</Button>
      </DialogTrigger> */}
      <DialogContent className='sm:max-w-2xl'>
        <DialogHeader className='sr-only'>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <Image
          src={"/public/img/power-night.jpeg"}
          width={1000}
          height={1000}
          className='w-full h-full object-cover bg-no-repeat bg-center bg-cover'
          quality={100}
          alt='Advertisment'
        />
        {/* <div className='grid gap-4 py-4'>
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='name' className='text-right'>
              Name
            </Label>
            <Input
              id='name'
              defaultValue='Pedro Duarte'
              className='col-span-3'
            />
          </div>
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='username' className='text-right'>
              Username
            </Label>
            <Input
              id='username'
              defaultValue='@peduarte'
              className='col-span-3'
            />
          </div>
        </div> */}
        {/* <DialogFooter>
          <Button type='submit'>Save changes</Button>
        </DialogFooter> */}
      </DialogContent>
    </Dialog>
  );
}
