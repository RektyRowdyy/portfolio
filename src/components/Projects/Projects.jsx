import { SiAngular, SiExpress, SiMongodb, SiReact, SiTypescript } from "react-icons/si";
import MyProjects from "./MyProjects";
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
            <div className="flex flex-row space-x-32 items-center justify-center">
                <MyProjects title="INTELLILEARN LMS" year="2024"
                            imgUrls={[`src/assets/IntelliLearn/1.png`, `src/assets/IntelliLearn/2.png`, `src/assets/IntelliLearn/3.png`, `src/assets/IntelliLearn/4.png`]} 
                            link="https://github.com/RektyRowdyy/IntelliLearn-LMS" icons={[SiAngular, SiTypescript, DiVisualstudio, TbFileTypeSql]} />
                <MyProjects title="OTAKUGRAM" year="2024" 
                            imgUrls={[`src/assets/Otakugram/1.png`, `src/assets/Otakugram/2.png`]}
                            link="https://github.com/RektyRowdyy/Otakugram" icons={[SiReact, FaNodeJs, SiExpress, SiMongodb]} />
                <MyProjects title="YOUTUBE BACKEND" year="2024" 
                            imgUrls={[`src/assets/Youtube-Backend/1.png`, `src/assets/Youtube-Backend/2.png`, `src/assets/Youtube-Backend/3.png`]}
                            link="https://github.com/RektyRowdyy/Youtube-Backend" icons={[FaNodeJs, SiExpress, SiMongodb]} />
            </div>
        </section>
    )
}

