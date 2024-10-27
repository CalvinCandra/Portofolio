import ImageData from "../data/imgImport";

export default function CardProject(props) {
  const { img, tipe, judul } = props;

  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-2">
      {/* gambar */}
      <div className="w-full md:w-[50%]">
        <div className="bg-[#3F3F50] pt-2 md:pt-5 flex justify-center">
          <img src={img} className="w-[94%] m-auto" alt="Gambar Project"></img>
        </div>
      </div>
      {/* deskirpsi */}
      <div className="w-full bg-[#3F3F50] p-2 md:p-0 md:bg-transparent md:w-[45%] text-white text-center md:text-left">
        <h1 className="font-bold md:text-3xl">{judul}</h1>
        <h5 className="mt-1">{tipe}</h5>
      </div>
    </div>
  );
}
