import useTheme from "../../contexts/theme";

export default function ThemeButton() {

    const { themeMode, lightTheme, darkTheme } = useTheme();

    const onChangeBtn = (e) => {
        const darkModeStatus = e.currentTarget.checked;
        darkModeStatus ? darkTheme() : lightTheme();
    }

    return (
        <label className="relative inline-flex items-center cursor-pointer top-5">
            <input
                type="checkbox"
                className="sr-only peer"
                onChange={(e) => onChangeBtn(e)}
                checked={themeMode === "dark"}
            />
            <span className="absolute top-0.5 left-1.5 text-2xl pointer-events-none">🌞</span>
            <span className="absolute top-0.5 right-1.5 text-2xl pointer-events-none">🦉</span>
            <div className="w-20 h-10 bg-violet-300 peer-focus:outline-none rounded-full peer pointer-events-none
          dark:bg-violet-300 peer-checked:bg-gray-800 peer-checked:after:translate-x-10 after:content-[''] after:absolute after:top-1 after:left-1 
          after:bg-white after:border-gray-300 after:border after:rounded-full after:h-8 after:w-8 after:transition-all"></div>
        </label>
    );



}