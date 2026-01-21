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
      className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-10 sm:mb-12 md:mb-16 lg:mb-20">
        <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-white">
          EDUCATION
        </h2>
        <div className="w-20 sm:w-24 md:w-28 lg:w-32 h-0.5 sm:h-1 bg-purple-500 mx-auto mt-3 sm:mt-4"></div>
        <p className="text-gray-400 mt-3 sm:mt-4 text-sm xs:text-base sm:text-lg md:text-xl px-2 sm:px-0 max-w-2xl mx-auto">
          My education has been a journey of learning and development. Here are the details of my academic background
        </p>
      </div>

      {/* Education Timeline */}
      <div className="relative">
        {/* Vertical line - Hidden on mobile, shown on medium+ */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 sm:w-1 bg-white/50 h-full"></div>

        {/* Education Entries */}
        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`relative mb-10 sm:mb-12 md:mb-16 lg:mb-20 ${
              // Mobile: Stacked layout, Desktop: Alternating layout
              index % 2 === 0 ? "md:flex md:justify-end" : "md:flex md:justify-start"
            }`}
          >
            {/* Timeline Circle - Hidden on mobile, shown on medium+ */}
            <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 bg-gray-800 border-4 border-[#8245ec] w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full justify-center items-center z-10">
              <img
                src={edu.img}
                alt={edu.school}
                className="w-full h-full object-cover rounded-full p-1"
              />
            </div>

            {/* Content Section */}
            <div
              className={`w-full ${
                // Desktop: 45% width for alternating layout
                index % 2 === 0 ? "md:w-11/12 lg:w-5/12 md:mr-6 lg:mr-12" : "md:w-11/12 lg:w-5/12 md:ml-6 lg:ml-12"
              } p-4 sm:p-6 md:p-8 rounded-xl md:rounded-2xl shadow-lg md:shadow-2xl border border-white/20 bg-gray-900/90 backdrop-blur-sm md:backdrop-blur-md shadow-purple-900/20 hover:shadow-purple-900/40 transition-all duration-300 hover:scale-[1.02] active:scale-100`}
            >
              {/* Header section with image and basic info */}
              <div className="flex flex-col xs:flex-row items-start xs:items-center gap-4 sm:gap-6 mb-4">
                {/* School Logo/Image */}
                <div className="w-16 h-16 xs:w-20 xs:h-20 sm:w-24 sm:h-20 md:w-28 md:h-24 flex-shrink-0 bg-white/10 rounded-lg overflow-hidden border border-white/10">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full object-contain p-1 sm:p-2"
                  />
                </div>

                {/* Degree, School Name, and Date */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg xs:text-xl sm:text-2xl md:text-2xl lg:text-3xl font-semibold text-white truncate">
                    {edu.degree}
                  </h3>
                  <h4 className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-300 mt-1 truncate">
                    {edu.school}
                  </h4>
                  <p className="text-xs xs:text-sm sm:text-base text-gray-400 mt-2 font-medium">
                    {edu.date}
                  </p>
                </div>
              </div>

              {/* Grade and Description */}
              <div className="mt-4 pt-4 border-t border-white/10">
                <p className="text-sm xs:text-base sm:text-lg text-purple-300 font-semibold mb-3">
                  Grade: <span className="text-white">{edu.grade}</span>
                </p>
                <p className="text-xs xs:text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
                  {edu.desc}
                </p>
              </div>

              {/* Mobile-only timeline dot */}
              <div className="md:hidden absolute -left-3 top-8 w-6 h-6 bg-gray-800 border-2 border-[#8245ec] rounded-full z-10"></div>
            </div>

            {/* Mobile timeline connector line */}
            <div className="md:hidden absolute left-0 top-0 w-0.5 h-full bg-white/30 -z-10"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;