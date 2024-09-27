import { SiAngular, SiExpress, SiMongodb, SiReact, SiTypescript } from "react-icons/si";
import MyProjects from "./MyProjects";
import { DiVisualstudio } from "react-icons/di";
import { TbFileTypeSql } from "react-icons/tb";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";


export default function Projects() {
    return (
        <section className="bg-violet-300 dark:bg-gray-700 h-[55rem]">
            {/* HEADING */}
            <div className="flex flex-col items-center">
                <h1 className="text-2xl mt-24 font-semibold font-mono dark:text-white">PROJECTS</h1>
            </div>
            <div className="grid grid-cols-4 items-center justify-items-center">
                <MyProjects title="INTELLILEARN LMS" year="2024"
                    imgUrls={[`IntelliLearn/1.png`, `IntelliLearn/2.png`, `IntelliLearn/3.png`, `IntelliLearn/4.png`]}
                    link="https://github.com/RektyRowdyy/IntelliLearn-LMS" icons={[SiAngular, SiTypescript, DiVisualstudio, TbFileTypeSql]} />
                <MyProjects title="OTAKUGRAM" year="2024"
                    imgUrls={[`Otakugram/1.png`, `Otakugram/2.png`]}
                    link="https://github.com/RektyRowdyy/Otakugram" icons={[SiReact, FaNodeJs, SiExpress, SiMongodb]} />
                <MyProjects title="YOUTUBE BACKEND" year="2024"
                    imgUrls={[`Youtube-Backend/1.png`, `Youtube-Backend/2.png`, `Youtube-Backend/3.png`]}
                    link="https://github.com/RektyRowdyy/Youtube-Backend" icons={[FaNodeJs, SiExpress, SiMongodb]} />
                <MyProjects title="FREECODECAMP-AUTH" year="2024"
                    imgUrls={[`FreeCodeCamp-AUTH/1.png`, `FreeCodeCamp-AUTH/2.png`, `FreeCodeCamp-AUTH/3.png`, `FreeCodeCamp-AUTH/4.png`]}
                    link="https://github.com/RektyRowdyy/freecodecamp-AUTH" icons={[SiMongodb, SiExpress, FaReact, FaNodeJs]} />
                <MyProjects title="HRIDYA-PORTFOLIO" year="2024"
                    imgUrls={[`Portfolio/1.png`,`Portfolio/2.png`,`Portfolio/3.png`,`Portfolio/4.png`,`Portfolio/5.png` ]}
                    link="https://github.com/RektyRowdyy/Chess" icons={[FaReact, IoLogoJavascript, RiTailwindCssFill]} />
                <MyProjects title="CHESS-CLONE (in Progress)" year="2024"
                    imgUrls={[`Chess-Clone/1.png`, `Chess-Clone/2.png`]}
                    link="https://github.com/RektyRowdyy/Chess" icons={[SiMongodb, SiExpress, FaReact, FaNodeJs, SiTypescript]} />
            </div>
        </section>
    )
}

