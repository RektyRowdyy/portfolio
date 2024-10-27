import { DiVisualstudio } from "react-icons/di";
import { TbFileTypeSql } from "react-icons/tb";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiAngular, SiExpress, SiMongodb, SiReact, SiTypescript } from "react-icons/si";

export const projectsData = [
    {
        title: "INTELLILEARN LMS",
        year: "2024",
        imgUrls: [
            "IntelliLearn/1.png",
            "IntelliLearn/2.png",
            "IntelliLearn/3.png",
            "IntelliLearn/4.png"
        ],
        link: "https://github.com/RektyRowdyy/IntelliLearn-LMS",
        icons: [SiAngular, SiTypescript, DiVisualstudio, TbFileTypeSql],
        description: `A Library Management System (LMS) with strong authorization and authentication developed using Angular for the front-end, and .NET APIs & SQL Databases for the back-end.`
    },
    {
        title: "OTAKUGRAM",
        year: "2024",
        imgUrls: ["Otakugram/1.png", "Otakugram/2.png"],
        link: "https://github.com/RektyRowdyy/Otakugram",
        icons: [SiReact, FaNodeJs, SiExpress, SiMongodb],
        description: `A comprehensive platform developed using MERN for anime offering features for tracking, rating, and reviewing series, as well as discovering new content.`
    },
    {
        title: "YOUTUBE BACKEND",
        year: "2024",
        imgUrls: ["Youtube-Backend/1.png", "Youtube-Backend/2.png", "Youtube-Backend/3.png"],
        link: "https://github.com/RektyRowdyy/Youtube-Backend",
        icons: [FaNodeJs, SiExpress, SiMongodb],
        description: `A YouTube backend clone made using Express.js for APIs and MongoDB for database, focusing on user & video management with security considerations.`
    },
    {
        title: "FREECODECAMP-AUTH",
        year: "2024",
        imgUrls: ["FreeCodeCamp-AUTH/1.png", "FreeCodeCamp-AUTH/2.png", "FreeCodeCamp-AUTH/3.png", "FreeCodeCamp-AUTH/4.png"],
        link: "https://github.com/RektyRowdyy/freecodecamp-AUTH",
        icons: [SiMongodb, SiExpress, FaReact, FaNodeJs],
        description: `A full-stack application that replicates the funtionalities of the famous FreeCodeCamp website with robust authetication and authorization build using JWT tokens and session storage.`,
        liveLink: 'https://freecodecamp-ui.vercel.app/'
    },
    // {
    //     title: "HRIDYA-PORTFOLIO",
    //     year: "2024",
    //     imgUrls: ["Portfolio/1.png", "Portfolio/2.png", "Portfolio/3.png", "Portfolio/4.png", "Portfolio/5.png"],
    //     link: "https://github.com/RektyRowdyy/Chess",
    //     icons: [FaReact, IoLogoJavascript, RiTailwindCssFill],
    //     description: `A website that tells my story`
    // },
    // {
    //     title: "CHESS-CLONE",
    //     year: "2024",
    //     imgUrls: ["Chess-Clone/1.png"],
    //     link: "https://github.com/RektyRowdyy/Chess",
    //     icons: [SiMongodb, SiExpress, FaReact, FaNodeJs, SiTypescript],
    //     description: `A full-stack web application that implements the complete logic of chess, enabling real-time, 1v1 chess matches between multiple users developed using Websockets.`
    // }
];