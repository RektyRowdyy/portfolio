import useTheme from "../../contexts/theme";

export default function ThemeButton() {

    const { themeMode, lightTheme, darkTheme } = useTheme();

    const onChangeBtn = (e) => {
        const darkModeStatus = e.currentTarget.checked;
        darkModeStatus ? darkTheme() : lightTheme();
    }

    return (
        <label className="relative inline-flex items-center cursor-pointer mt-2">
            <input
                type="checkbox"
                className="sr-only peer"
                onChange={(e) => onChangeBtn(e)}
                checked={themeMode === "dark"}
            />
            <span className="absolute top-0.5 left-1.5 text-lg sm:text-2xl pointer-events-none">🌞</span>
            <span className="absolute top-0.5 right-1.5 text-lg sm:text-2xl pointer-events-none">🦉</span>
            <div
                className="w-16 h-8 sm:w-20 sm:h-10 bg-violet-300 rounded-full peer dark:bg-violet-300
                    peer-focus:outline-none peer-checked:bg-gray-800 peer-checked:after:translate-x-8 sm:peer-checked:after:translate-x-10 
                    after:content-[''] after:absolute after:top-1 after:left-1 after:bg-white after:border-gray-300 
                    after:border after:rounded-full after:h-6 after:w-6 sm:after:h-8 sm:after:w-8 after:transition-all"
            ></div>
        </label>
    );



}