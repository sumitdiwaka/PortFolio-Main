// import React from "react";
// import { education } from "../../constants"; // Import the education data

// const Education = () => {
//   return (
//     <section
//       id="education"
//       className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
//     >
//       {/* Section Title */}
//       <div className="text-center mb-16">
//         <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
//         <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
//         <p className="text-gray-400 mt-4 text-lg font-semibold">
//           My education has been a journey of learning and development. Here are the details of my academic background
//         </p>
//       </div>

//       {/* Education Timeline */}
//       <div className="relative">
//         {/* Vertical line */}
//         <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-white h-full"></div>

//         {/* Education Entries */}
//         {education.map((edu, index) => (
//           <div
//             key={edu.id}
//             className={`flex flex-col sm:flex-row items-center mb-16 ${
//               index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
//             }`}
//           >
//             {/* Timeline Circle */}
//             <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10">
//               <img
//                 src={edu.img}
//                 alt={edu.school}
//                 className="w-full h-full object-cover rounded-full"
//               />
//             </div>

//             {/* Content Section */}
//             <div
//               className={`w-full sm:max-w-md p-4 sm:p-8 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] ${
//                 index % 2 === 0 ? "sm:ml-0" : "sm:mr-0"
//               } sm:ml-44 sm:mr-44 ml-1 transform transition-transform duration-300 hover:scale-105`}
//             >
//               {/* Flex container for image and text */}
//               <div className="flex items-center space-x-6">
//                 {/* School Logo/Image */}
//                 <div className="w-24 h-16 bg-white rounded-md overflow-hidden">
//                   <img
//                     src={edu.img}
//                     alt={edu.school}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>

//                 {/* Degree, School Name, and Date */}
//                 <div className="flex flex-col justify-between">
//                   <div>
//                     <h3 className="text-xl sm:text-xl font-semibold text-white">
//                       {edu.degree}
//                     </h3>
//                     <h4 className="text-md sm:text-sm text-gray-300">
//                       {edu.school}
//                     </h4>
//                   </div>
//                   {/* Date at the bottom */}
//                   <p className="text-sm text-gray-500 mt-2">{edu.date}</p>
//                 </div>
//               </div>

//               <p className="mt-4 text-gray-400 font-bold">Grade: {edu.grade}</p>
//               <p className="mt-4 text-gray-400">{edu.desc}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Education;


// import React from "react";
// import { education } from "../../constants"; // Import the education data

// const Education = () => {
//   return (
//     <section
//       id="education"
//       className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
//     >
//       {/* Section Title */}
//       <div className="text-center mb-16">
//         <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
//         <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
//         <p className="text-gray-400 mt-4 text-lg font-semibold">
//           My education has been a journey of learning and development. Here are the details of my academic background
//         </p>
//       </div>

//       {/* Education Timeline */}
//       <div className="relative">
//         {/* Vertical line */}
//         <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-white h-full"></div>

//         {/* Education Entries */}
//         {education.map((edu, index) => (
//           <div
//             key={edu.id}
//             className={`relative flex mb-16 items-center ${index % 2 === 0 ? "justify-end" : "justify-start"}`}
//           >
//             {/* Timeline Circle */}
//             <div className="absolute left-1/2 transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10">
//               <img
//                 src={edu.img}
//                 alt={edu.school}
//                 className="w-full h-full object-cover rounded-full"
//               />
//             </div>

//             {/* Content Section */}
//             <div
//               className={`w-full sm:w-5/12 p-4 sm:p-8 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] transform transition-transform duration-300 hover:scale-105 ${
//                 index % 2 === 0 ? "mr-10 sm:mr-20" : "ml-10 sm:ml-20"
//               }`}
//             >
//               {/* Flex container for image and text */}
//               <div className="flex items-center space-x-6">
//                 {/* School Logo/Image */}
//                 <div className="w-24 h-16 bg-white rounded-md overflow-hidden">
//                   <img
//                     src={edu.img}
//                     alt={edu.school}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>

//                 {/* Degree, School Name, and Date */}
//                 <div className="flex flex-col justify-between">
//                   <div>
//                     <h3 className="text-xl sm:text-xl font-semibold text-white">
//                       {edu.degree}
//                     </h3>
//                     <h4 className="text-md sm:text-sm text-gray-300">
//                       {edu.school}
//                     </h4>
//                   </div>
//                   {/* Date at the bottom */}
//                   <p className="text-sm text-gray-500 mt-2">{edu.date}</p>
//                 </div>
//               </div>

//               <p className="mt-4 text-gray-400 font-bold">Grade: {edu.grade}</p>
//               <p className="mt-4 text-gray-400">{edu.desc}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Education;

import React from "react";
import { education } from "../../constants";

const Education = () => {
  return (
    <section
      id="education"
      className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24 font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-10 md:mb-12 lg:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
          EDUCATION
        </h2>
        <div className="w-24 sm:w-32 md:w-40 h-1 bg-purple-500 mx-auto mt-3 md:mt-4"></div>
        <p className="text-gray-300 mt-4 md:mt-6 text-base sm:text-lg md:text-xl max-w-3xl mx-auto px-4">
          My education has been a journey of learning and development. Here are the details of my academic background
        </p>
      </div>

      {/* Education Timeline - Mobile First Approach */}
      <div className="relative">
        {/* Vertical Timeline Line - Only on Desktop */}
        <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-transparent via-purple-500 to-transparent h-full"></div>

        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`relative mb-12 md:mb-16 lg:mb-20 ${
              // Mobile: Full width, Desktop: Alternating sides
              "lg:flex lg:items-center"
            } ${
              index % 2 === 0 
                ? "lg:justify-start lg:pr-[50%]" 
                : "lg:justify-end lg:pl-[50%]"
            }`}
          >
            {/* Timeline Dot - Visible on all screens */}
            <div className={`
              absolute left-0 lg:left-1/2 
              ${index % 2 === 0 ? 'lg:-translate-x-1/2' : 'lg:-translate-x-1/2'}
              w-6 h-6 md:w-8 md:h-8 rounded-full 
              bg-gray-900 border-4 border-[#8245ec]
              -translate-x-1/2 lg:translate-x-0
              z-10
              ${index === 0 ? 'top-6' : 'top-8'}
            `}>
              <img
                src={edu.img}
                alt={edu.school}
                className="w-full h-full object-cover rounded-full p-0.5"
              />
            </div>

            {/* Mobile Timeline Line */}
            <div className="absolute left-0 w-0.5 h-full bg-white/20 -z-10 lg:hidden"></div>

            {/* Education Card */}
            <div className={`
              ml-8 lg:ml-0
              w-[calc(100%-2rem)] lg:w-5/12
              p-5 sm:p-6 md:p-7 lg:p-8
              rounded-xl lg:rounded-2xl
              bg-gray-900/80 backdrop-blur-sm
              border border-white/10
              shadow-lg shadow-purple-900/20
              hover:shadow-xl hover:shadow-purple-900/30
              transition-all duration-300
              ${index % 2 === 0 ? 'lg:mr-8' : 'lg:ml-8'}
            `}>
              {/* Card Content */}
              <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
                {/* Institution Logo - Larger on Desktop */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 bg-white/5 rounded-lg overflow-hidden border border-white/10 flex items-center justify-center">
                    <img
                      src={edu.img}
                      alt={edu.school}
                      className="w-full h-full object-contain p-2"
                    />
                  </div>
                </div>

                {/* Text Content */}
                <div className="flex-1">
                  {/* Degree and School */}
                  <div className="mb-3 md:mb-4">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1">
                      {edu.degree}
                    </h3>
                    <h4 className="text-lg sm:text-xl md:text-2xl text-purple-300 font-semibold">
                      {edu.school}
                    </h4>
                  </div>

                  {/* Date */}
                  <div className="mb-3 md:mb-4">
                    <span className="inline-block px-3 py-1 bg-purple-900/30 text-purple-200 rounded-full text-sm md:text-base font-medium border border-purple-700/30">
                      {edu.date}
                    </span>
                  </div>

                  {/* Grade */}
                  <div className="mb-4 md:mb-5">
                    <p className="text-base md:text-lg text-gray-300">
                      <span className="font-semibold text-white">Grade: </span>
                      <span className="text-green-300 font-bold">{edu.grade}</span>
                    </p>
                  </div>

                  {/* Description */}
                  <div className="pt-4 border-t border-white/10">
                    <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
                      {edu.desc}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Responsive Timeline Legend */}
      <div className="mt-12 md:mt-16 text-center">
        <div className="inline-flex items-center gap-2 md:gap-4 text-sm md:text-base text-gray-400">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#8245ec]"></div>
            <span>Timeline Marker</span>
          </div>
          <div className="hidden sm:block">•</div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-purple-500/50"></div>
            <span>Education Milestone</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;