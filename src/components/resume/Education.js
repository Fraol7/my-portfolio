import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2005 - 2025</p>
          <h2 className="text-3xl md:text-4xl font-bold">Formal Education</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BSc in Software Engineering (AI Stream)"
            subTitle="Addis Ababa University (2021 - 2025)"
            result="3.50/4"
            des="Relevant Coursework: DSA, OOP, Database Systems, Operating Systems, Computer Architecture and Organization, Web and Mobile
                 Development, AI and Machine Learning, Robotics, Networking, Social Network Analysis within 5 years of education."
          />
          <ResumeCard
            title="Highschool Education"
            subTitle="School of Indiana (2016 - 2020)"
            result="4.75/5"
            des="Relevant Coursework: Mathematics, Physics, Chemistry, Biology, Geography, History, Civics and Ethical Studies, Languages, Technology."
          />
          <ResumeCard
            title="Middle-school Education"
            subTitle="Seattle Academy (2010 - 2015)"
            result="4.75/5"
            des="Relevant Coursework: Mathematics, General Science, Environmental Science, Social Studies."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2022 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Organizational Education</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Data Structure and Algorithm, Competitive Programming"
            subTitle="African to Silicon Valley (2023 - 2024)"
            result="Done"
            des="Educated by A2SV (an NGO that upskills African students with a 1 year long education and connects with top tech companies). Solved 800+ problems on Both LeetCode and Codeforces consistently throughout the year"
          />
          <ResumeCard
            title="Full Stack (MERN) Development"
            subTitle="Evangadi (2022 - 2023)"
            result="Done"
            des="A 6-month MERN Stack Bootcamp, an intensive, hands-on training program designed to teach the fundamentals and advanced concepts of web development using the MERN stack (MongoDB, Express.js, React.js, and Node.js)."
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education