
export default function Technologies(props) {
    const { Icon } = props;
    return (
        <>
            <div className="bg-black dark:bg-white rounded-md flex flex-col justify-center items-center
                transition-transform duration-300 ease-in-out hover:scale-150 overflow-hidden cursor-pointer">
                <Icon size={80} className="p-4 text-white dark:text-black" />
            </div>

        </>
    )
}