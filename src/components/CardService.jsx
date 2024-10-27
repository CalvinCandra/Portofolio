export default function CardService(props) {
  const { icon, judul, text } = props;
  return (
    <div className="bg-[#2D2D39] p-1 w-full md:w-[25%] my-5 md:my-0 rounded-md relative">
      <div className="bg-[#3F3F50] p-1 rounded-full w-20 h-20 text-white flex justify-center items-center absolute -top-7 left-1/2 transform -translate-x-1/2">
        <i className={`${icon} text-3xl`}></i>
      </div>

      <div className="m-auto w-[90%] text-white p-2 pt-20">
        <h2 className="font-bold text-center text-xl mb-2">{judul}</h2>
        <p className="text-center font-light">{text}</p>
      </div>
    </div>
  );
}
