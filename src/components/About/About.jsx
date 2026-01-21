// import React from 'react'
// import ReactTypingEffect from 'react-typing-effect';
// import Tilt from 'react-parallax-tilt';
// import profileImage from '../../assets/profileImage.jpg'; // Adjust the path as necessary

// const About = () => {
//   return (
//     <section id='about' className='py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32'>
//       <div className='flex flex-col-reverse md:flex-row justify-between items-center '>
//         {/* left side */}
//         <div className='md:w-1/2 text-center md:text-left mt-8 md:mt-0'>
//           {/* greetings */}
//           <h1 className='text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-2 leading-tight'>
//             Hi, I am
//           </h1>
//           {/* name */}
//           <h2 className='text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight'>
//             Sumit Diwakar
//           </h2>
//           {/* skills heading with typing effect  */}
//           <h3 className='text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight'>
//             <span className='text-white'>I am a </span>
//             <ReactTypingEffect
//               text={[
//                 ' Full Stack Developer',
//                 ' Node.js Developer',
//                 'Tech Enthusiast',
//                 'Web Developer',
//                 'Programmer',
//                 'Coder'
//               ]}
//               speed={100}
//               eraseSpeed={50}
//               typingDelay={500}
//               eraseDelay={2000}
//               cursorRenderer={(cursor) => <span className='text-[#8245ec]'>{cursor}</span>}
//             ></ReactTypingEffect>
//           </h3>
//           {/* About me Paragarph  */}
//           <p className='text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed'>
//             I am a full-stack developer with over 2 years of experience in
//             building scalable web applications. Skilled in both front-end and
//             back-end development, I specialize in the MERN stack and other
//             modern technologies to create seamless user experiences and
//             efficient solutions.
//           </p>
//           {/* Download Resume Button */}
//           <a
//             href="https://drive.google.com/file/d/17-lK1weCjDBcqL8f_-VvBfqQsa1VuOK6/view?usp=sharing"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-block mt-6 px-8 py-3 rounded-full text-white font-bold text-lg bg-[#a855f7] shadow-[0_0_6px_#a855f7] hover:scale-105 transition transform duration-300"
//           >
//             DOWNLOAD CV
//           </a>
//         </div>

//         {/* Right side */}
//         <div className='md:w-1/2 flex justify-center md:justify-end items-center'>
//           <Tilt
//             className='w-72 h-72 sm:w-80 sm:h-80 md:w-[25rem] md:h-[25rem] rounded-full border-4 border-purple-700 shadow-[0_10px_30px_rgba(130,69,236,0.4)] 
//                mt-[-9rem] md:mt-[-6rem]' // Moves circle upward
//             tiltMaxAngleX={15}
//             tiltMaxAngleY={15}
//             perspective={1200}
//             scale={1.05}
//             transitionSpeed={1200}
//             gyroscope={true}
//           >
//             <img
//               src={profileImage}
//               alt='Sumit Diwakar'
//               className="w-full h-full rounded-full object-cover object-[40%_20%]"
//             />
//           </Tilt>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default About


import React from 'react'
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/profileImage.jpg';

const About = () => {
  return (
    <section id='about' className='py-6 px-4 sm:px-6 md:px-8 lg:px-20 font-sans mt-12 md:mt-24 lg:mt-32'>
      <div className='flex flex-col-reverse lg:flex-row justify-between items-center gap-8 lg:gap-12'>
        
        {/* Left side - Content */}
        <div className='w-full lg:w-1/2 text-center lg:text-left mt-6 lg:mt-0'>
          {/* Greetings */}
          <h1 className='text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-1 sm:mb-2 leading-tight'>
            Hi, I am
          </h1>
          
          {/* Name */}
          <h2 className='text-3xl xs:text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 leading-tight'>
            Sumit Diwakar
          </h2>
          
          {/* Skills heading with typing effect */}
          <h3 className='text-lg xs:text-xl sm:text-2xl md:text-2xl lg:text-3xl font-semibold mb-4 sm:mb-6 text-[#8245ec] leading-tight min-h-[1.5em]'>
            <span className='text-white'>I am a </span>
            <ReactTypingEffect
              text={[
                'Full Stack Developer',
                'Node.js Developer',
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
            />
          </h3>
          
          {/* About me Paragraph */}
          <p className='text-sm xs:text-base sm:text-lg md:text-lg text-gray-400 mb-6 sm:mb-8 md:mb-10 mt-4 sm:mt-6 leading-relaxed'>
            I am a full-stack developer with over 2 years of experience in
            building scalable web applications. Skilled in both front-end and
            back-end development, I specialize in the MERN stack and other
            modern technologies to create seamless user experiences and
            efficient solutions.
          </p>
          
          {/* Download Resume Button */}
          <div className='flex justify-center lg:justify-start'>
            <a
              href="https://drive.google.com/file/d/17-lK1weCjDBcqL8f_-VvBfqQsa1VuOK6/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center mt-2 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-white font-semibold sm:font-bold text-base sm:text-lg bg-[#a855f7] hover:bg-[#9333ea] shadow-[0_0_8px_rgba(168,85,247,0.5)] hover:shadow-[0_0_12px_rgba(168,85,247,0.7)] hover:scale-105 active:scale-95 transition-all duration-300 ease-in-out transform"
            >
              DOWNLOAD CV
            </a>
          </div>
        </div>

        {/* Right side - Profile Image */}
        <div className='w-full lg:w-1/2 flex justify-center lg:justify-end items-center'>
          <div className='relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg'>
            <Tilt
              className='w-48 h-48 xs:w-56 xs:h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full border-4 border-purple-700 shadow-[0_10px_30px_rgba(130,69,236,0.4)] hover:shadow-[0_15px_40px_rgba(130,69,236,0.6)] transition-shadow duration-300'
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              perspective={1200}
              scale={1.05}
              transitionSpeed={1200}
              gyroscope={true}
              glareEnable={true}
              glareMaxOpacity={0.3}
              glareColor="#8245ec"
              glarePosition="all"
              glareBorderRadius="9999px"
            >
              <img
                src={profileImage}
                alt='Sumit Diwakar - Full Stack Developer'
                className="w-full h-full rounded-full object-cover"
                style={{ objectPosition: '40% 20%' }}
              />
            </Tilt>
            
            {/* Decorative glow effect */}
            <div className='absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 xs:w-56 xs:h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full bg-gradient-to-r from-purple-900/20 via-purple-700/10 to-pink-900/20 blur-2xl'></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About