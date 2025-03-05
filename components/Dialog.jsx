"use client";
import { useLayoutEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Image from "next/image";

export function DialogComponent() {
  const [isOpen, setIsOpen] = useState(false);

  useLayoutEffect(() => {
    setIsOpen(true);
  }, []);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className='sm:max-w-2xl p-0 border-none rounded-xl'>
        <DialogHeader className='sr-only'>
          <DialogTitle>Miracle and Testimony Night</DialogTitle>
          <DialogDescription>
            Join us for an unforgettable night of miracles, testimonies, and
            spiritual upliftment hosted by Grace Pavilion Chapel. Featuring
            Pastor Alvin, this special event will be held at Grace City, Agege
            Zone 6, on the 31st of December at 8 PM. The theme for the night is
            'Marvelous God' (Psalms 118:23). Enjoy performances by 'Graceful
            Soundz' and 'Graceful Jama.' Don't miss this opportunity to
            celebrate God's wonders in the year-end fellowship.
          </DialogDescription>
        </DialogHeader>
        <Image
          src={"/img/Cover_P.jpg"}
          width={500}
          height={500}
          className='w-full max-w-full h-auto rounded-lg object-cover bg-no-repeat bg-center'
          quality={100}
          alt='Worship with us'
          priority
        />
      </DialogContent>
    </Dialog>
  );
}
