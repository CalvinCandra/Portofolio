function Button(props) {
  const { href, text, target = "", icon } = props;
  return (
    <div>
      <a
        href={`${href}`}
        className="m-1 flex items-center justify-around py-2 px-3 font-bold text-sm text-white rounded-lg border-2 border-white hover:bg-white hover:text-black transition-all ease-in-out duration-300"
        target={`${target}`}
      >
        <div>
          <i className={`${icon} text-2xl me-2`}></i>
        </div>
        <p className="text-lg">{text}</p>
      </a>
    </div>
  );
}

export default Button;
