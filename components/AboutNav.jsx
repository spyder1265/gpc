"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AboutNav() {
  const pathname = usePathname();
  const navLinks = [
    { label: "About Us", href: "/about" },
    { label: "Our Team", href: "/about/our-team" },
    { label: "I'm New", href: "/about/im-new" },
    { label: "Our Beliefs", href: "/about/our-beliefs" },
  ];

  return (
    <section className='flex flex-col bg-slate-50 w-full items-center justify-center'>
      <div className='flex h-14 w-full bg-yellowShade/80 justify-center overflow-hidden relative'>
        <div className='flex text-white font-semibold'>
          {navLinks.map((link, index) => (
            <div
              key={index}
              className={`py-4 px-2 ${
                pathname === link.href
                  ? "bg-yellowActive"
                  : "hover:bg-yellowShade"
              }`}
            >
              <Link href={link.href}>{link.label}</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
