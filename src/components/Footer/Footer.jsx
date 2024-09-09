import { FaXTwitter } from "react-icons/fa6";
import { SiGithub } from "react-icons/si";

export default function Footer() {
    return (
        <section className="bg-zinc-800 h-[8rem]">
            <div className="flex flex-row justify-center items-center">
                <a href="https://github.com/RektyRowdyy" target="_blank"><SiGithub size={22} className="text-white mt-10" /></a>
                <a href="https://x.com/RektyRowdyy"><FaXTwitter size={22} className="text-white ml-6 mt-10" /></a>
            </div>
            <span className="text-white flex items-center justify-center text-xs mt-7">Copyright © RektyRowdyy</span>
        </section>
    )
}