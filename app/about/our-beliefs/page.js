import Navbar from '@/components/Navbar';
import Image from "next/image";
import Footer from '@/components/Footer';

export default function About() {
  return (
    <main className='h-screen w-full'>
      <section className='relative h-[500px] w-full'>
        <Image
          src={"/img/trialbg.jpeg"}
          width={900}
          height={900}
          className='w-full h-full object-cover'
          quality={90}
          alt='bg'
        />
        <div className='absolute top-0 left-0 right-0 flex flex-col justify-between bg-overlay/65 text-white h-full w-full'>
          <div className=''>
            <Navbar />
          </div>
          <div className='md:py-24 py-12 px-6 md:px-16 w-full'>
            <div className='flex flex-col gap-y-1 items-start justify-center text-left h-full'>
              <h1 className='text-3xl md:text-5xl font-bold'>
                Our Beliefs
              </h1>
            </div>
          </div>
        </div>
      </section>
      
      <section className='flex flex-col w-full items-center justify-center'>
        <div className='flex h-14 w-full bg-yellowShade/80 justify-center items-center overflow-hidden relative'>
          <div className='flex text-white font-semibold'>
            <div className='hover:bg-yellowShade py-4 px-2 active:bg-yellowActive'>
              <a href='/about'>
              About Us
              </a>
            </div>
            <div className='hover:bg-yellowShade py-4 px-2 active:bg-yellowActive'>
              <a href='/about/our-team'>
              Our Team
              </a>
            </div>
            <div className='hover:bg-yellowShade py-4 px-2 active:bg-yellowActive'>
              <a href='/about/im-new'>
              I'm New
              </a>
            </div>
            <div className='hover:bg-yellowShade py-4 px-2 active:bg-yellowActive'>
              <a href='/about/our-beliefs'>
              Our Beliefs
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className='flex flex-col w-full items-center justify-center'>
        <div className='flex flex-col h-full basis-4/6'>
          <div className='flex pb-16 justify-center text-center md:pt-24 space-y-1 text-yellowShade'>
            <p className='flex justify-center font-bold text-4xl leading-[46.8px] mb tracking-normal'>
              Our Beliefs
            </p>
          </div>
          <div className='flex flex-col text-left mx-80 gap-5 text-lg'>
            <p>
              The Bible is God's Word, perfect (Prov. 30:5), loving (John 3:16) and truthful (John 17:17). It is absolutely unique (Heb 4:12/ 2 Tim. 3:16-17).
            </p>
            <p>
              There is one God (Deut. 6:4/Mark 12:29), besides Him there is no other (2 Sam 7:22). He is eternal (1 Tim 1:17) and His life is expressed in three equal, unified persons: Father, Son, and Holy Spirit (Matt. 28:19).
            </p>
            <p>
              Jesus is God in the flesh (John 1:1-2, 14/Col. 1:15-22/Col. 2:9). He lived a perfect, sinless life (Heb 4:15) and sacrified that life on the Cross that we might live free (John 8:36) and forgiven (Rom 8:1/John 10:10).
            </p>
            <p>
              It is by grace meaning an unmerited gift, that we are saved through faith in Jesus Christ (Acts 4:12/Eph 2:8,9). And with salvation comes a new life (2 Cor 5:17), a new heart (Ezek. 36:36, 37) and a new mind (Rom. 12:1, 2/1 Cor 2:16).
            </p>
            <p>
              The greatest thing in the Kingdom of our Lord and Savior is relationship, first with God and then with one another (Matt. 22:36-40). The Church is the Body of Christ (1 Cor. 12:27) where we learn how to live out the love of God (Rom. 12:9-10) and extend it to the world (Matt. 28:18-20).
            </p>
          </div>
        </div>
      </section>
      <div className='mt-20'>
        <Footer />
      </div>
    </main>
  );
}