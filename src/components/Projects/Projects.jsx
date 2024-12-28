import MyProjects from "./MyProjects";
import { projectsData } from "../../contants.js";

export default function Projects() {
    return (
        <section className="bg-violet-300 dark:bg-gray-700 h-auto pb-20">
            {/* HEADING */}
            <div className="flex flex-col items-center">
                <h1 className="text-2xl mt-24 font-semibold font-mono dark:text-white">PROJECTS</h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 px-4 items-center justify-items-center">
                {projectsData.map((project, index) => (
                    <MyProjects
                        key={index}
                        title={project.title}
                        year={project.year}
                        imgUrls={project.imgUrls}
                        link={project.link}
                        icons={project.icons}
                        description={project.description}
                        liveLink={project.liveLink}
                    />
                ))}
            </div>
        </section>
    )
}