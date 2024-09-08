import { SiAngular, SiExpress, SiMongodb, SiReact, SiTypescript } from "react-icons/si";
import MyProjects from "./myProjects";
import { DiVisualstudio } from "react-icons/di";
import { TbFileTypeSql } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";


export default function Projects() {
    return (
        <section className="bg-violet-300 dark:bg-gray-700 h-[40rem]">
            {/* HEADING */}
            <div className="flex flex-col items-center">
                <h1 className="text-2xl mt-24 font-semibold font-mono dark:text-white">PROJECTS</h1>
            </div>
            <div className="flex space-x-32">
                <MyProjects title="INTELLILEARN LMS" year="2024" imgSrc="src\assets\IntelliLearn.png" link="https://github.com/RektyRowdyy/IntelliLearn-LMS" 
                            icons={[SiAngular, SiTypescript, DiVisualstudio, TbFileTypeSql]} />
                <MyProjects title="OTAKUGRAM" year="2024" imgSrc="src\assets\Otakugram.png" link="https://github.com/RektyRowdyy/Otakugram" 
                            icons={[SiReact, FaNodeJs, SiExpress, SiMongodb]} />
                <MyProjects title="YOUTUBE BACKEND" year="2024" imgSrc="src\assets\Youtube-Backend.png" link="https://github.com/RektyRowdyy/Youtube-Backend"
                            icons={[FaNodeJs, SiExpress, SiMongodb]} />
            </div>
        </section>
    )
}

