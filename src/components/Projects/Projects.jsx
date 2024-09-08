import MyProjects from "./myProjects";


export default function Projects() {
    return (
        <section className="bg-violet-300 dark:bg-gray-700 h-[40rem]">
            {/* HEADING */}
            <div className="flex flex-col items-center">
                <h1 className="text-2xl mt-24 font-semibold font-mono dark:text-white">PROJECTS</h1>
            </div>
            <div className="flex space-x-32">
                <MyProjects title="INTELLILEARN LMS" year="2024" imgSrc="src\assets\IntelliLearn.png" />
                <MyProjects title="OTAKUGRAM" year="2024" imgSrc="src\assets\Otakugram.png" />
                <MyProjects title="YOUTUBE BACKEND" year="2024" imgSrc="src\assets\Youtube-Backend.png" />
            </div>
        </section>
    )
}