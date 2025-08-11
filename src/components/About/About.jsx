import React from 'react'
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/profileImage.jpg'; // Adjust the path as necessary

const About = () => {
  return (
    <section id='about' className='py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32'>
      <div className='flex flex-col-reverse md:flex-row justify-between items-center '>
        {/* left side */}
        <div className='md:w-1/2 text-center md:text-left mt-8 md:mt-0'>
          {/* greetings */}
          <h1 className='text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-2 leading-tight'>
            Hi, I am
          </h1>
          {/* name */}
          <h2 className='text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight'>
            Sumit Diwakar
          </h2>
          {/* skills heading with typing effect  */}
          <h3 className='text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight'>
            <span className='text-white'>I am a </span>
            <ReactTypingEffect
              text={[
                ' Full Stack Developer',
                ' Node.js Developer',
                'Tech Enthusiast',
                'Web Developer',
                'Programmer',
                'Coder'
              ]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => <span className='text-[#8245ec]'>{cursor}</span>}
            ></ReactTypingEffect>
          </h3>
          {/* About me Paragarph  */}
          <p className='text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed'>
            I am a full-stack developer with over 2 years of experience in
            building scalable web applications. Skilled in both front-end and
            back-end development, I specialize in the MERN stack and other
            modern technologies to create seamless user experiences and
            efficient solutions.
          </p>
          {/* Download Resume Button */}
          <a
            href="https://drive.google.com/file/d/1rKgI_VplMhQWgr8NiicoC0IHgi2nD1jk/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 px-8 py-3 rounded-full text-white font-bold text-lg bg-[#a855f7] shadow-[0_0_6px_#a855f7] hover:scale-105 transition transform duration-300"
          >
            DOWNLOAD CV
          </a>
        </div>

        {/* Right side */}
        <div className='md:w-1/2 flex justify-center md:justify-end items-center'>
          <Tilt
            className='w-72 h-72 sm:w-80 sm:h-80 md:w-[25rem] md:h-[25rem] rounded-full border-4 border-purple-700 shadow-[0_10px_30px_rgba(130,69,236,0.4)] 
               mt-[-9rem] md:mt-[-6rem]' // Moves circle upward
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            perspective={1200}
            scale={1.05}
            transitionSpeed={1200}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt='Sumit Diwakar'
              className="w-full h-full rounded-full object-cover object-[40%_20%]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  )
}

export default About
