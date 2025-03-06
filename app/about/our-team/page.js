import Navbar from "../../../components/Navbar";
import Image from "next/image";
import AboutNav from "@/components/AboutNav";
import Footer from "../../../components/Footer";

export default function OurTeam() {
  return (
    <main className='h-screen w-full'>
      <section className='relative h-[500px] w-full'>
        {/* <Image
          src={"/img/bg1.jpg"}
          width={900}
          height={900}
          className='w-full h-full object-cover'
          quality={90}
          alt='bg'
          priority
        /> */}
        <div className='absolute top-0 left-0 right-0 flex flex-col justify-between bg-overlay/65 text-white h-full w-full'>
          <div className=''>
            <Navbar />
          </div>
          <div className='md:py-24 py-12 px-6 md:px-16 w-full'>
            <div className='flex flex-col gap-y-1 items-start justify-center text-left h-full'>
              <h1 className='text-3xl md:text-5xl font-bold'>Our Team</h1>
            </div>
          </div>
        </div>
      </section>

      <AboutNav />

      <section className=''>
        <div className='py-8 px-4 mx-auto flex bg-slate-50 flex-col items-center w-full max-w-screen-xl text-center lg:py-16 lg:px-6'>
          <div className='mx-auto mb-8 max-w-screen-sm lg:mb-16'>
            <h2 className='mb-4 text-4xl tracking-tight font-extrabold text-yellowShade'>
              Meet Our Team!
            </h2>
          </div>
          {/* <div className='grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3'> */}
          <div className='flex flex-col gap-8 lg:gap-16 px-20'>
            <div className='text-center flex flex-col items-center text-gray-500'>
              <img
                className='mx-auto mb-4 w-36 object-cover h-36 rounded-full'
                src='/img/Head-Pastor.jpeg'
                alt='head-pastor'
              />
              <h3 className='mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-neutral-50'>
                <a href='#'>Rev. Theophilus S.D Alvin</a>
              </h3>
              <p className='dark:text-neutral-300'>General Overseer, Founder</p>
              <div className='profile-section mt-4 text-center'>
                <h4 className='text-xl font-semibold text-gray-600 dark:text-neutral-300'>
                  <a href='#'>Profile</a>
                </h4>
                <p className='text-gray-600 dark:text-neutral-300'>
                  Rev. Theophilus S.D Alvin is a devoted servant of God with
                  over 18 years of impactful ministry experience. As the Head
                  Pastor of Grace Pavilion Chapel, his mission is to lead lives
                  toward spiritual transformation through faith and the power of
                  the Holy Spirit. With a heart for mentoring and community
                  outreach, he is dedicated to nurturing the next generation of
                  leaders and fostering spiritual growth within the
                  congregation. Renowned for his heartfelt sermons,
                  compassionate guidance, and unwavering commitment to service,
                  Pastor Theophilus has become a pillar of inspiration and
                  strength. He has cultivated a warm, faith-filled environment
                  where individuals and families can grow spiritually and
                  connect deeply with God. Beyond his ministry, Pastor
                  Theophilus values family life and embodies his faith in every
                  aspect of his personal and professional life. Married and
                  blessed with children, he prioritizes family as a cornerstone
                  of his life and leadership. Guided by his enduring belief in
                  God's transformative power, he continues to inspire lives and
                  lead Grace Pavilion Chapel with vision, purpose, and a heart
                  for Kingdom impact.
                </p>
              </div>
            </div>
            <div className='text-center flex flex-col items-center text-gray-500'>
              <img
                className='mx-auto mb-4 w-36 h-36 object-cover object-right rounded-full'
                src='/img/pastor2.jpeg'
                alt='Helene Avatar'
              />
              <h3 className='mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-neutral-50'>
                <a href='#'>Ps. Hormenu Wonder Joseph Kwaku</a>
              </h3>
              <p className='dark:text-neutral-300'>Rev. Minister</p>
              <div className='profile-section mt-4 text-center'>
                <h4 className='text-xl font-semibold text-gray-600 dark:text-neutral-300'>
                  Profile
                </h4>
                <p className='text-gray-600 dark:text-neutral-300'>
                  Ps. Hormenu Wonder Joseph Kwaku, affectionately known as
                  Pastor Wonder,born in Accra, and is deeply passionate about
                  reading and research, which fuel his personal and professional
                  growth. He holds a degree in Biology from Kwame Nkrumah
                  University of Science and Technology (KNUST) and works as a
                  Lab Assistant at Link Medical Laboratory, contributing to
                  community health. Wonder has also gained valuable experience
                  at Word Temple Educational Centre. A committed member of Grace
                  Pavilion Chapel since 2013, he serves as a praises leader,
                  youth pastor/president, evangelism head, and prayer warrior
                  leader. His dedication and skills position him to create a
                  lasting impact in both his field and community.
                </p>
              </div>
            </div>

            <div className='text-center flex flex-col items-center text-gray-500'>
              <img
                className='mx-auto mb-4 w-36 h-36 object-cover rounded-full'
                src='/img/Pastor.jpeg'
                alt='Helene Avatar'
              />
              <h3 className='mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-neutral-50'>
                <a href='#'>Ps. Ikechukwu Onwumelu</a>
              </h3>
              <p className='dark:text-neutral-300'>Rev. Minister</p>
              <div className='profile-section mt-4 text-center'>
                <h4 className='text-xl font-semibold text-gray-600 dark:text-neutral-300'>
                  Profile
                </h4>
                <p className='text-gray-600 dark:text-neutral-300'>
                  Ps. Ikechukwu Onwumelu, fondly known as Pastor Ike, born in
                  Lagos, Nigeria, and studied Accountancy at the University of
                  Nigeria Nsukka. Avidly passionate about football, reading, and
                  traveling, he enriches his perspectives through these
                  activities. Since joining Grace Pavilion Chapel in 2018, he
                  has served as a prayer warrior leader, pastor in charge of the
                  choir and special programs, and personal assistant to the
                  pastor. In his professional life, Ikechukwu is a successful
                  businessman with previous roles as an accountant and marketing
                  manager at GB Murphy Ltd. and valuable experience at Nickline
                  Oil and Gas Marketing Company. His dedication to integrity,
                  excellence, and innovation highlights his remarkable journey
                  in both ministry and business.
                </p>
              </div>
            </div>
            <div className='text-center flex flex-col items-center text-gray-500'>
              <img
                className='mx-auto mb-4 w-36 h-36 object-cover rounded-full'
                src='/img/Newton.jpeg'
                alt='Helene Avatar'
              />
              <h3 className='mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-neutral-50'>
                <a href='#'>Newton Dablu</a>
              </h3>
              <p className='dark:text-neutral-300'>Pastor</p>
              <div className='profile-section mt-4 text-center'>
                <h4 className='text-xl font-semibold text-gray-600 dark:text-neutral-300'>
                  Profile
                </h4>
                <p className='text-gray-600 dark:text-neutral-300'>
                  Ps. Newton Dablu, born in Abor, Volta Region, is a motivated
                  professional with a Computer Science degree from Accra
                  Technical University and a Diploma in Management Information
                  Systems from ALISON. He has worked at the University of
                  Professional Studies and Access Bank (Ghana) Plc, excelling in
                  Agency Banking and Sales. A dedicated member of Grace Pavilion
                  Chapel since 2018, Newton serves in various roles, including
                  choir leader and personal aide to the pastor. He combines his
                  passion for music and running with a focus on personal and
                  professional growth. Newton’s commitment to excellence and
                  community involvement marks him as a promising individual in
                  all his endeavors.
                </p>
              </div>
            </div>
            <div className='text-center flex flex-col items-center text-gray-500'>
              <img
                className='mx-auto mb-4 w-36 h-36 object-cover rounded-full'
                src='/img/bg1.jpg'
                alt='Helene Avatar'
              />
              <h3 className='mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-neutral-50'>
                <a href='#'>Sharon Addy</a>
              </h3>
              <p className='dark:text-neutral-300'>Lady Pastor</p>
              <div className='profile-section mt-4 text-center'>
                <h4 className='text-xl font-semibold text-gray-600 dark:text-neutral-300'>
                  Profile
                </h4>
                <p className='text-gray-600 dark:text-neutral-300'>
                  Lady Pastor Sharon Nana Nkrumah Addy, known as Shady, born in
                  Accra, is a driven professional with a Bachelor's degree in
                  Administration (Accounting major) from Central University. She
                  has held leadership roles such as Prayer Director of the
                  Levite Generation and Head of the Pillars of the Temple group,
                  highlighting her commitment to spiritual growth and community
                  impact. With work experience at National Investment Bank,
                  Access Bank, and currently Fidelity Bank as a customer service
                  officer, she blends professionalism with a heart for service.
                  Sharon's faith, creativity, and dedication to uplifting others
                  make her an inspiring force in both her career and community.
                  She balances this with a passion for fostering unity and
                  growth through prayer and artistic pursuits.
                </p>
              </div>
            </div>
            <div className='text-center flex flex-col items-center text-gray-500'>
              <img
                className='mx-auto mb-4 w-36 h-36 object-cover rounded-full'
                src='/img/Baffour_1.JPG'
                alt='Helene Avatar'
              />
              <h3 className='mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-neutral-50'>
                <a href='#'>Nana Baffour Akoto Esq.</a>
              </h3>
              <p className='dark:text-neutral-300'>Pastor</p>
              <div className='profile-section mt-4 text-center'>
                <h4 className='text-xl font-semibold text-gray-600 dark:text-neutral-300'>
                  Profile
                </h4>
                <p className='text-gray-600 dark:text-neutral-300'>
                  Ps. Nana Baffour Akoto, born in Accra, is a dedicated legal
                  practitioner, studied Law at the University of Professional
                  Studies, Accra (UPSA) and gained experience interning at the
                  Attorney General’s Office and Accra High Court. Currently, at
                  Ghartey and Ghartey, he demonstrates a strong passion and
                  commitment to his work. He has been actively involved in this
                  ministry since 2016, serving as Youth President, choir member,
                  Prayer Warrior, and more, showcasing his devotion to faith and
                  community service. Nana also enjoys reading and sports,
                  striking a balance between personal development and
                  relaxation. His determination and hard work position him as a
                  valuable contributor to any environment.
                </p>
              </div>
            </div>
            <div className='text-center flex flex-col items-center text-gray-500'>
              <img
                className='mx-auto mb-4 w-36 h-36 object-cover rounded-full'
                src='/img/Ameyaw.jpg'
                alt='Helene Avatar'
              />
              <h3 className='mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-neutral-50'>
                <a href='#'>Ebenezer Ameyaw</a>
              </h3>
              <p className='dark:text-neutral-300'>Pastor</p>
              <div className='profile-section mt-4 text-center'>
                <h4 className='text-xl font-semibold text-gray-600 dark:text-neutral-300'>
                  Profile
                </h4>
                <p className='text-gray-600 dark:text-neutral-300'>
                  Ps. Ebenezer Ameyaw, fondly called "The Great," born in
                  Bogoso, is a creative individual, he is passionate about
                  singing and football, which have shaped his character and
                  fostered community engagement. Active in Grace Pavilion
                  Chapel, Ebenezer serves as a choir member, sanctuary cleaner,
                  and prayer warrior, reflecting his commitment to faith and
                  service. His journey includes participating in Agyapa TV’s
                  “look alike show” as a singer, showcasing his talents. With
                  his dedication to touching lives through music, sports, and
                  leadership, Ebenezer continues to inspire those around him.
                </p>
              </div>
            </div>
            <div className='text-center flex flex-col items-center text-gray-500'>
              <img
                className='mx-auto mb-4 w-36 h-36 object-cover rounded-full'
                src='/img/bg1.jpg'
                alt='Helene Avatar'
              />
              <h3 className='mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-neutral-50'>
                <a href='#'>Bridget Dodoo</a>
              </h3>
              <p className='dark:text-neutral-300'>Lady Pastor</p>
              <div className='profile-section mt-4 text-center'>
                <h4 className='text-xl font-semibold text-gray-600 dark:text-neutral-300'>
                  Profile
                </h4>
                <p className='text-gray-600 dark:text-neutral-300'>
                  Lady Pastor Bridgette Dodoo, also known as Busy Bee, born in
                  Accra. She holds a Bachelor of Science in Marketing from the
                  University of Cape Coast. She serves as an Assistant Civic
                  Education Officer with the National Commission for Civic
                  Education (NCCE), promoting awareness of civic rights and
                  responsibilities. A dedicated member of Grace Pavilion Chapel,
                  she has served as Prayer Warrior Secretary and is currently
                  the Prayer Warrior Director. Bridgette finds joy in reading,
                  writing, and cooking, reflecting her creativity and passion
                  for growth. Her leadership and commitment position her as a
                  positive force in her community.
                </p>
              </div>
            </div>
            <div className='text-center flex flex-col items-center text-gray-500'>
              <img
                className='mx-auto mb-4 w-36 h-36 object-cover rounded-full'
                src='/img/Rita.jpeg'
                alt='Helene Avatar'
              />
              <h3 className='mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-neutral-50'>
                <a href='#'>Rita Quarshie</a>
              </h3>
              <p className='dark:text-neutral-300'> Lady Pastor</p>
              <div className='profile-section mt-4 text-center'>
                <h4 className='text-xl font-semibold text-gray-600 dark:text-neutral-300'>
                  Profile
                </h4>
                <p className='text-gray-600 dark:text-neutral-300'>
                  Lady Pastor Rita Quarshie, born on October 20 in Nigeria, is a
                  dedicated professional with a degree in Human Resource
                  Management from All Nations University. As the Human Resource
                  Manager at Korle Bu Teaching Hospital, she fosters a
                  productive work environment while enhancing employee welfare.
                  Her diverse experience includes roles at the Road Safety
                  Commission and Glico Life Insurance. A committed member of her
                  ministry, Rita serves faithfully as a prayer warrior,
                  balancing her career with her spiritual devotion. Her passion
                  for positive change and personal growth defines her impactful
                  journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className='pt-20 bg-slate-50'></div>
      <Footer />
    </main>
  );
}
