import { SiVisualstudio, SiAngular, SiGitlab } from "react-icons/si";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function Experience() {
    return (
        <section className="bg-violet-400 dark:bg-gray-900 h-[60rem]">
            {/* HEADING */}
            <div className="flex flex-col items-center">
                <h1 className="text-2xl mt-24 font-semibold font-mono dark:text-white">EXPERIENCE</h1>
            </div>
            <VerticalTimeline animate={true} className="mt-10">
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(255, 255, 255)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(230, 228, 235)' }}
                    date="Jan 2023 - Dec 2023"
                    iconStyle={{ background: '#fff', color: 'rgb(139, 92 , 243)' }}
                    icon={<SiVisualstudio />}
                >
                    <span className="bg-violet-300 text-gray-800 text-sm font-medium px-3.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">Full-Time</span>
                    <h3 className="vertical-timeline-element-title text-black font-semibold text-xl mt-1 ml-1">Software Developer L1</h3>
                    <h4 className="vertical-timeline-element-subtitle text-black font-medium -mt-1 tracking-tight mb-3 ml-1">Gemini Solutions Pvt. Ltd.</h4>
                    <div className="mt-2 grid grid-cols-5 gap-y-2 justify-center items-center">
                        <span className="bg-violet-50 text-center text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-500 dark:text-white">HTML</span>
                        <span className="bg-violet-50 text-center text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-500 dark:text-white">CSS</span>
                        <span className="bg-violet-50 text-center text-gray-800 text-xs font-medium me-2 px-2 py-0.5 rounded-full dark:bg-gray-500 dark:text-white">JavaScript</span>
                        <span className="bg-violet-50 text-center text-gray-800 text-xs font-medium me-2 px-2 py-0.5 rounded-full dark:bg-gray-500 dark:text-white">Bootstrap</span>
                        <span className="bg-violet-50 text-center text-gray-800 text-xs font-medium me-2 px-2 py-0.5 rounded-full dark:bg-gray-500 dark:text-white">REST API</span>
                        <span className="bg-violet-50 text-center text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-500 dark:text-white">.NET</span>
                        <span className="bg-violet-50 text-center text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-500 dark:text-white">MSSQL</span>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(255, 255, 255)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(230, 228, 235)' }}
                    date="Oct 2024 - Oct 2024"
                    iconStyle={{ background: '#fff', color: 'rgb(139, 92 , 243)' }}
                    icon={<SiAngular />}
                >
                    <span className="bg-violet-300 text-gray-800 text-sm font-medium px-3.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">Freelance</span>
                    <h3 className="vertical-timeline-element-title text-black font-semibold text-xl mt-1 ml-1">.NET Full Stack Developer</h3>
                    <h4 className="vertical-timeline-element-subtitle text-black font-medium -mt-1 tracking-tight mb-3 ml-1">MyEzCare</h4>
                    <div className="mt-2 grid grid-cols-5 gap-y-2 justify-center items-center">
                        <span className="bg-violet-50 text-center text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-500 dark:text-white">Angular</span>
                        <span className="bg-violet-50 text-center text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-500 dark:text-white">Bootstrap</span>
                        <span className="bg-violet-50 text-center text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-500 dark:text-white">Material-UI</span>
                        <span className="bg-violet-50 text-center text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-500 dark:text-white">.NET</span>
                        <span className="bg-violet-50 text-center text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-500 dark:text-white">REST API</span>
                        <span className="bg-violet-50 text-center text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-500 dark:text-white">MSSQL</span>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(255, 255, 255)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(230, 228, 235)' }}
                    date="Oct 2024 - Present"
                    iconStyle={{ background: '#fff', color: 'rgb(139, 92 , 243)' }}
                    icon={<SiGitlab />}
                >
                    <span className="bg-violet-300 text-gray-800 text-sm font-medium px-3.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">Full-Time</span>
                    <h3 className="vertical-timeline-element-title text-black font-semibold text-xl mt-1 ml-1">.NET Full Stack Developer</h3>
                    <h4 className="vertical-timeline-element-subtitle text-black font-medium -mt-1 tracking-tight mb-3 ml-1">MyEzCare</h4>
                    <div className="mt-2 grid grid-cols-5 gap-y-2 justify-center items-center">
                        <span className="bg-violet-50 text-center text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-500 dark:text-white">Angular</span>
                        <span className="bg-violet-50 text-center text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-500 dark:text-white">Bootstrap</span>
                        <span className="bg-violet-50 text-center text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-500 dark:text-white">Material-UI</span>
                        <span className="bg-violet-50 text-center text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-500 dark:text-white">.NET</span>
                        <span className="bg-violet-50 text-center text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-500 dark:text-white">REST API</span>
                        <span className="bg-violet-50 text-center text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-500 dark:text-white">MSSQL</span>
                    </div>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </section>
    )
}