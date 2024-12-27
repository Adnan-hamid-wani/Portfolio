import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const projects = [
  {
    title: "Cousre Web App",
    description: "A frontend web application built with React",
    image: "https://www.bing.com/th/id/OGC.8efb7273caf5d89ab561a15d076cdbf0?pid=1.7&rurl=https%3a%2f%2fsupport.glofox.com%2fhc%2farticle_attachments%2f360005705158%2fClients__web_integration__course_view.gif&ehk=ePGioPUiMSfvnKpUEc8NVMo5JtJ%2f9hhxCKyZk1zUf%2bM%3d",
    tags: ["React", "JavaScript", "Css"],
    github: "https://github.com/Adnan-hamid-wani/Course-Detail-Page"
  },
  {
    title: "Task Manager App",
    description: "A task manager platform with real-time updates using built with react js and firebase",
    image: "https://www.bing.com/th/id/OGC.9129f44795f3b00c2b8ad68fe43e73da?pid=1.7&rurl=https%3a%2f%2fmedia.geeksforgeeks.org%2fwp-content%2fuploads%2f20231017123939%2fBuild-a-Task-Management-App-using-Next-Js.gif&ehk=ij5fiTDkrtkKyh0oWlzWZWumvwlLTRHXE3HtV%2fTm2cY%3d",
    tags: ["React", "Firebase", "Realtime",'Zustand'],
    github: "https://task-manager-app-6cb68.web.app"
  },
  {
    title: "Poll Web App",
    description: "A polling web application built with  Django",
    image: "https://www.bing.com/th/id/OGC.5566edf825315727f8ba89d7adf495ac?pid=1.7&rurl=https%3a%2f%2fgithub.com%2fOfficeDev%2fmicrosoft-teams-poll-app%2fwiki%2fimages%2fPollTemplateCompose.gif&ehk=EmUwGIn7UKEUEkzeKwrFSbPS8yE5PntioTKTQLDmc30%3d",
    tags: ["Django", "Python", "Css"],
    github: "https://github.com/Adnan-hamid-wani/Django-PollApp/tree/main/CA3%20Django/Django-Poll-App"
  },
  {
    title: "Tic Tac Toe Game",
    description: "An advanced tic-tac-toe game built C++ using minimax algorithm",
    image: "https://www.bing.com/th/id/OGC.da85b9d71ba25d2f8083371568efb3c4?pid=1.7&rurl=https%3a%2f%2fuser-images.githubusercontent.com%2f17960677%2f147065983-8d3fdddf-8e6a-435f-9d94-ab25aea66a73.gif&ehk=rl%2b2eKIyZTTPaHN%2fOKqxKl8Pys%2b8bdnSICg08SOdFCk%3d",
    tags: ["C++", "Minimax", "Algorithms"],
    github: "https://onlinegdb.com/edit/CEK1rvng4"
  }
];

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-gray-900" id="projects">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-white text-center mb-12">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-gray-800 rounded-lg overflow-hidden"
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                  >
                    View on GitHub
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
