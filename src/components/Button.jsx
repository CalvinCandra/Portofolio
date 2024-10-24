function Button(props) {
    const {href, text, target = ""} = props;
    return(
        <div>
            <a href={`${href}`} className="relative inline-flex items-center justify-center py-2 px-3 font-bold overflow-hidden text-sm text-white rounded-lg border-2 border-white hover:bg-white hover:text-black transition-all ease-in-out duration-300" target={`${target}`}>
                {text}
            </a>
        </div>
    )
}

export default Button