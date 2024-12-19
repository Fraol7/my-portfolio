import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree, projectFour, projectFive, projectSix, projectSeven, projectEight, projectNine } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-12 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="SkillBridge"
          des="⭐ Interned at SkillBridge, A2SV, contributing to the frontend team 🚀. Gained hands-on experience building user-friendly web applications and collaborating on impactful projects."
          src={projectOne}
          link1="https://github.com/RealEskalate/SkillBridge"
          link2="https://skillbridge.academy/"
        />
        <ProjectsCard
          title="Denakil Tours"
          des="⭐ DenakilTour, a React app designed to notify and organize local tours across Ethiopia, highlighting UNESCO World Heritage sites and other historical treasures. 🏞️✨ The app provides a seamless . . . "
          src={projectTwo}
          link1=""
          link2=""
        />
        <ProjectsCard
          title="Hibirlink"
          des="⭐ A 10-day Hackathon by A2SV🚀, where we secured 3rd place out of 54 teams! 🥉 We developed a web app that boosts e-commerce platforms, integrating features like delivery 🚚, auctions 🛍️, and product . . ."
          src={projectThree}
          link1=""
          link2=""
        />
        <ProjectsCard
          title="Love and Care"
          des="⭐An app connecting volunteers with NGOs🤝, streamlining manpower support to spread kindness, love, and peace. 🤝❤️🌍 Empowering communities by making it easier for volunteers to contribute where . . ."
          src={projectFour}
          link1="https://github.com/Fraol7/Love-and-Care-Volunteering-mobile-app"
          link2=""
        />
        <ProjectsCard
          title="Comp. Programming"
          des="⭐ Competitive Programming Solutions repo📚 with Python files from LeetCode, HackerRank, and Codeforces. 🚀 Includes problems of varying difficulty levels, covering algorithms and data structures. Perfect . . . "
          src={projectFive}
          link1="https://github.com/Fraol7/Competitive-Programming"
          link2=""
        />
        <ProjectsCard
          title="'Lomi Bwerewr'"
          des="⭐ 'Lomi Bwerewr' is a 2D Pygame game inspired 
                  by Ethiopian Epiphany tradition 🎉. A boy throws lemons 🍋 at a girl, who must dodge them to stay in the game. This fun project blends cultural heritage . . ."
          src={projectSix}
          link1="https://github.com/Fraol7/Lomi-Bwerewr"
          link2=""
        />
        <ProjectsCard
          title="Injera mold detection"
          des="⭐ Created a custom dataset to train YOLOv8 for detecting moldy portions of injera 🇪🇹🍞. This specialized model improves food safety by accurately identifying contaminated areas, ensuring better . . . "
          src={projectSeven}
          link1="https://github.com/Fraol7/Injera-mold-detection-using-YOLOV8"
          link2=""
        />
        
        <ProjectsCard
          title="Amharic SignLang AI"
          des="⭐ An innovative application that interprets sign language into Amharic🤝, bridging the communication gap for the deaf community. Promoting inclusiveness and accessibility, this tool empowers seamless interaction . . . "
          src={projectEight}
          link1="https://github.com/Fraol7/Amharic-SignLanguage-Interpretor-AI"
          link2=""
        />
        <ProjectsCard
          title="Assistance Chatbot"
          des="⭐ Cybersecurity Assistance Chatbot, a web-based tool providing practical tips on phishing, passwords, malware, and cyber threats. 🛡️🤖 It empowers users with essential cybersecurity knowledge . . ."
          src={projectNine}
          link1="https://github.com/Fraol7/web-based-assistant-chat-bot"
          link2=""
        />
      </div>
    </section>
  );
}

export default Projects