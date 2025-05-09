import { useState } from "react";
import MyProjectModal from "./MyProjectModal";
import { ModalProvider } from "../../contexts/modal";

export default function MyProjects(props) {

    const { title, year, imgUrls, icons, link, description, liveLink } = props;
    const [isModalOpen, setisModalOpen] = useState(false);

    const openModal = () => setisModalOpen(true);
    const closeModal = () => setisModalOpen(false);

    return (
        <> 
            <div className="relative w-full max-w-[350px] h-[280px] mt-16 p-2 rounded-b-md bg-violet-100 dark:bg-gray-600 
                transition-transform duration-300 ease-in-out hover:scale-110 overflow-hidden cursor-pointer"
                onClick={() => openModal()}>
                <img
                    src={imgUrls[0]}
                    alt={title}
                    className="h-[200px] w-full rounded-b-md object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-violet-300 dark:from-gray-950 via-transparent to-transparent opacity-50 transition-opacity duration-300 ease-in-out hover:opacity-60"></div>
                <div className="relative flex flex-col justify-center items-center z-10">
                    <h1 className="bg-gray-500 pl-4 pr-4 rounded-t-none rounded-lg text-white dark:text-black dark:bg-white">{year}</h1>
                    <h1 className="mt-2 inline-flex items-center text-2xl font-mono font-medium dark:text-white tracking-wider">{title}</h1>
                </div>
            </div>
            <ModalProvider value={{ isModalOpen, closeModal }}>
                <MyProjectModal title={title} imgUrls={imgUrls} icons={icons} link={link} description={description} liveLink={liveLink} />
            </ModalProvider>
        </>
    )
}