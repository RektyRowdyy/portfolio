import { FaGit, FaNodeJs, FaReact } from "react-icons/fa";
import Technologies from "./Technologies";
import { SiAngular, SiExpress, SiJavascript, SiMongodb, SiTypescript, SiVisualstudio } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbFileTypeSql } from "react-icons/tb";
import { VscAzureDevops } from "react-icons/vsc";

export default function Skills() {
    return (
        <section className="bg-violet-100 dark:bg-gray-500 h-[30rem]">
            {/* HEADING */}
            <div className="flex flex-col items-center">
                <h1 className="text-2xl mt-24 font-semibold font-mono dark:text-white">SKILLS</h1>
            </div>
            <div className="flex flex-row justify-center items-center mt-24 space-x-11">
                <Technologies Icon={FaReact} title={"React"} />
                <Technologies Icon={SiAngular} title={"Angular"} />
                <Technologies Icon={RiTailwindCssFill} title={"TaildwindCSS"} />
                <Technologies Icon={SiTypescript} title={"Typescript"} />
                <Technologies Icon={SiJavascript} title={"Javascript"} />
                <Technologies Icon={SiVisualstudio} title={".NET"} />
                <Technologies Icon={FaNodeJs} title={"NodeJS"} />
                <Technologies Icon={SiExpress} title={"ExpressJS"} />
                <Technologies Icon={TbFileTypeSql} title={"SQL"} />
                <Technologies Icon={SiMongodb} title={"MongoDB"} />
                <Technologies Icon={VscAzureDevops} title={"Azure DevOps"} />
                <Technologies Icon={FaGit} title={"Git"} />
            </div>
        </section>
    )
}