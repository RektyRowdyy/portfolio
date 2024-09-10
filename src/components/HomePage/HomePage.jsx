import ThemeButton from '../ThemeButton/ThemeButton.jsx';
import Typewriter from 'typewriter-effect';

export default function HomePage() {
    return (
        <section className='bg-violet-200 dark:bg-gray-600 w-full h-screen flex flex-col items-center justify-center'>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                focusable="false"
                width="10em"
                height="10em"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 32 32"
                className="iconify header-icon"
                style={{ transform: 'rotate(360deg)' }}
            >
                <path
                    fill="currentColor"
                    d="M5 6v13.563l-2.281 2.314A2.44 2.44 0 0 0 2 23.594A2.42 2.42 0 0 0 4.406 26h23.188A2.42 2.42 0 0 0 30 23.594a2.45 2.45 0 0 0-.719-1.719L27 19.562V6zm2 2h18v11H7zm9 1l-1.5 9H16l1.5-9zm-3.914 2l-1.719 2.068L10 13.5l.367.432L12.086 16l1.086-.863L11.81 13.5l1.36-1.637zm7.828 0l-1.086.863L20.19 13.5l-1.36 1.637l1.085.863l1.719-2.068L22 13.5l-.367-.432zM6.437 21h19.125l2.313 2.281a.46.46 0 0 1 .125.313a.386.386 0 0 1-.406.406H4.406A.386.386 0 0 1 4 23.594c0-.11.047-.234.125-.313z"
                />
            </svg>
            <h1 className='text-4xl font-bold dark:text-white font-mono'>Hridya Dham</h1>
            <h1 className='text-3xl font-light inline-flex items-center mt-3 dark:text-white'>
                <Typewriter
                    options={{
                        strings: ['SOFTWARE DEVELOPER 💻', 'OPEN SOURCE CONTRIBUTOR 👨‍💻', 'STREAMER 🎮 (wannabe)', `GYMMING (trying to bulk since 2000) 🥲`],
                        autoStart: true,
                        loop: true,
                        deleteSpeed: 50,
                        pauseFor: 1000
                    }}
                />
            </h1>
            <ThemeButton />
        </section>
    )
}