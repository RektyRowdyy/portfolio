export default function AboutMe() {
    return (
        <section className="bg-violet-50 dark:bg-gray-400 h-auto pb-12">
            {/* HEADING */}
            <div className="flex flex-col items-center">
                <h1 className="text-2xl mt-24 font-semibold font-mono dark:text-white">ABOUT ME</h1>
            </div>

            {/* CARD COMPONENTS */}
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
                    {/* PHOTO */}
                    <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] rounded-md">
                        <img
                            src="Portraits\2.png"
                            alt="Photo of Me :)"
                            className="z-0 h-full w-full rounded-md object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t rounded-md from-gray-900 to-transparent"></div>
                    </div>

                    {/* CARD-TEXT */}
                    <div className="bg-white dark:bg-slate-500 rounded-lg shadow-md w-full max-w-[800px] mt-10 lg:mt-0">
                        <div className="flex flex-row border-b rounded-t-lg bg-gray-100 dark:bg-gray-800 dark:border-gray-950 pt-3 pl-3">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                                focusable="false"
                                width=".75em"
                                height=".75em"
                                preserveAspectRatio="xMidYMid meet"
                                viewBox="0 0 64 64"
                                className="iconify mr-1"
                                data-icon="emojione:red-circle"
                                data-inline="false"
                                style={{ transform: 'rotate(360deg)' }}
                            >
                                <circle cx="32" cy="32" r="30" fill="#ed4c5c" />
                            </svg>
                            &nbsp;
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                                focusable="false"
                                width=".75em"
                                height=".75em"
                                preserveAspectRatio="xMidYMid meet"
                                viewBox="0 0 36 36"
                                className="iconify mr-1"
                                data-icon="twemoji:yellow-circle"
                                data-inline="false"
                                style={{ transform: 'rotate(360deg)' }}
                            >
                                <circle cx="18" cy="18" r="18" fill="#FDCB58" />
                            </svg>
                            &nbsp;
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                                focusable="false"
                                width=".75em"
                                height=".75em"
                                preserveAspectRatio="xMidYMid meet"
                                viewBox="0 0 36 36"
                                className="iconify"
                                data-icon="twemoji:green-circle"
                                data-inline="false"
                                style={{ transform: 'rotate(360deg)' }}
                            >
                                <circle cx="18" cy="18" r="18" fill="#78B159" />
                            </svg>
                        </div>
                        <div className="dark:bg-slate-500 dark:text-white">
                            <div className="m-6">
                                <div className="text-xl font-semibold">Hi 👋</div>
                            </div>
                            <div className="m-6 mt-2 leading-7 text-sm sm:text-base">
                                <p className="mb-4">
                                    I'm Hridya Dham.
                                    I'm a passionate software developer with expertise in full-stack development,
                                    specializing in creating dynamic, user-friendly web applications.
                                </p>
                                <p>
                                    With a strong background in modern front-end technologies like React and Tailwind CSS, combined with back-end frameworks such as .NET and Node.js 👨‍💻. My experience spans across building custom applications, implementing robust APIs, and working with databases like SQL Server and MySQL 👌.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
