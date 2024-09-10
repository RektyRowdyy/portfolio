import { createPortal } from "react-dom";
import useModal from "../../contexts/modal";
import { FaGithub } from "react-icons/fa";
import AwesomeSlider from "react-awesome-slider";
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/fall-animation.css';

export default function MyProjectModal(props) {
    const mountedElement = document.getElementById('overlays');
    const { isModalOpen, closeModal } = useModal();
    const { title, imgUrls, icons, link } = props;
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
                                {/* PROJECT DESCRIPTION */}
                                {/* <p> Lorem Ipsum </p> */}
                            </div>
                            <div className="flex flex-row justify-center items-center">
                                {icons.map((Icon, index) => (
                                    <Icon key={index} size={28} className="project-icon mr-5" />
                                ))}
                            </div>
                        </div>
                    </div>
                }
            </>
            , mountedElement)
    )
}

