export default function Technologies(props) {
    const { Icon } = props;
    return (
        <>
            <div className="w-20 h-20 bg-black dark:bg-white rounded-md flex flex-col justify-center items-center
                transition-transform duration-300 ease-in-out hover:scale-150 overflow-hidden cursor-pointer">
                <Icon size={50} className="text-white dark:text-black" />
            </div>

        </>
    )
}