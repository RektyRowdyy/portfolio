import { createPortal } from "react-dom";
import useModal from "../../contexts/modal";
import { FaGithub } from "react-icons/fa";
import AwesomeSlider from "react-awesome-slider";
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/fall-animation.css';

export default function MyProjectModal(props) {
    const mountedElement = document.getElementById('overlays');
    const { isModalOpen, closeModal } = useModal();
    const { title, imgUrls, icons, link, description, liveLink } = props;
    console.log(liveLink);
    const mediaArray = imgUrls.map((imgSrc) => ({
        source: imgSrc,
    }));

    return (
        createPortal(
            <>
                {isModalOpen &&
                    <div className={`fixed top-0 left-0 z-10 w-screen h-screen flex justify-center items-center backdrop-blur-sm`} onClick={closeModal}>
                        <div className="flex flex-col max-w-4xl object-contain relative p-4 rounded-lg shadow-lg bg-violet-200 dark:bg-gray-700"
                            onClick={(e) => e.stopPropagation()}>
                            <button className="absolute -top-2 right-1 text-gray-900 dark:text-white text-4xl"
                                onClick={closeModal}>
                                &times;
                            </button>
                            {/* IMG SLIDER */}
                            <AwesomeSlider className="p-5 w-screen" bullets={false} animation="fallAnimation"
                                media={mediaArray} />
                            <div className="flex flex-row pl-5">
                                <h1 className="font-mono font-semibold text-xl mr-2 dark:text-white">{title}</h1>
                                <a href={link} target="_blank" rel="noopener noreferrer">
                                    <FaGithub className="cursor-pointer" />
                                </a>
                            </div>
                            {/* PROJECT DESCRIPTION */}
                            <p className="flex flex-row pl-5 font-mono font-normal tracking-tight dark:text-white"> {description} </p>
                            <div className="flex justify-between items-center mt-3">
                                <div className="flex flex-row justify-center items-center flex-1 ml-28">
                                    {icons.map((Icon, index) => (
                                        <Icon key={index} size={28} className="project-icon mr-5" />
                                    ))}
                                </div>
                                {liveLink && (
                                    <a href={liveLink} target="_blank">
                                        <button type="button" className={`font-medium rounded-md text-sm px-5 py-1.5 text-center inline-flex items-center
                                                            text-white bg-gray-800 dark:bg-violet-500 
                                                            hover:bg-gray-950 dark:hover:bg-violet-950 transition-all duration-300`}>
                                            Live Link
                                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                            </svg>
                                        </button>
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                }
            </>
            , mountedElement)
    )
}

