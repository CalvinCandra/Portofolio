import Navbar from "./components/Navbar";
import Button from "./components/Button";
import ImageData from "./data/imgImport";
import CardService from "./components/CardService";
import serviceData from "./data/serviceData";
import CardProject from "./components/CardProject";
import projectData from "./data/projectData";

function IndexPage() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className=" pt-20" id="hero">
        {/* Hero */}
        <div className=" p-1 w-[90%] m-auto">
          {/* konten atas */}
          <div className="flex justify-between items-center mb-40 md:mb-0">
            {/* Kiri */}
            <div
              className="w-full md:w-[45%]"
              data-aos="fade-down"
              data-aos-duration="1500"
            >
              <div>
                <h2 className="font-light text-white text-xl md:text-6xl mb-2">
                  I'm
                </h2>
                <h1 className="font-extrabold text-white text-7xl">
                  Willy Candra
                </h1>
                <div className="w-[82%] md:w-[60%] p-1 bg-yellow-500 rounded-full mt-5"></div>
              </div>
              <h3 className="w-full md:w-[90%] my-2 p-1 text-white font-light text-sm md:text-lg md:font-medium">
                Someone who understands the world of websites. Let's contact me
                to get website-related services, starting from Frontend to
                Backend.
              </h3>
            </div>
            {/* Kanan */}
            <div
              className="w-[55%] md:flex justify-center items-center relative hidden"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <img
                src={ImageData.heroImage}
                className="w-[70%] relative z-10"
                alt="Hero Image"
              ></img>

              <div className="w-[500px] h-[500px] bg-[#2D2D39] absolute rounded-full"></div>
            </div>
          </div>
          {/* konten bawah */}
          <div className="w-[90%] md:w-[80%] bg-[#3F3F50] flex  flex-col md:flex-row justify-evenly items-stretch py-4 px-5 md:px-0 absolute bottom-2 md:bottom-0 z-10 left-1/2 transform -translate-x-1/2">
            <div className="bg-[#2D2D39] flex items-center justify-center w-full my-1 md:my-0 md:w-52 p-2">
              <div className="ml-2 w-[10%] md:w-[30%]">
                <img
                  src={ImageData.laravel}
                  className="w-full"
                  alt="Gambar Laravel"
                ></img>
              </div>
              <h4 className="ml-3 font-medium text-white text-xl">Laravel</h4>
            </div>
            <div className="bg-[#2D2D39] flex items-center justify-center w-full my-1 md:my-0 md:w-52 p-2">
              <div className="ml-2 w-[10%] md:w-[30%]">
                <img
                  src={ImageData.react}
                  className="w-full"
                  alt="Gambar React"
                ></img>
              </div>
              <h4 className="ml-3 font-medium text-white text-xl">React JS</h4>
            </div>
            <div className="bg-[#2D2D39] flex items-center justify-center w-full my-1 md:my-0 md:w-52 p-2">
              <div className="ml-2 w-[10%] md:w-[30%]">
                <img
                  src={ImageData.tailwind}
                  className="w-full"
                  alt="Gambar Tailwind"
                ></img>
              </div>
              <h4 className="ml-3 font-medium text-white text-xl">
                Tailwind CSS
              </h4>
            </div>
            <div className="bg-[#2D2D39] flex items-center justify-center w-full my-1 md:my-0 md:w-52 p-2">
              <div className="ml-2 w-[10%] md:w-[30%]">
                <img
                  src={ImageData.bootstrap}
                  className="w-full"
                  alt="Gambar Bootstrap"
                ></img>
              </div>
              <h4 className="ml-3 font-medium text-white text-xl">Bootstrap</h4>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="bg-[#282833] pt-36 md:pt-20" id="about">
        <div className="w-[90%] p-1 m-auto flex justify-between items-center pb-5 md:pb-0">
          {/* Kanan */}
          <div className="w-[45%] hidden md:flex justify-center items-center">
            <img
              src={ImageData.about}
              className="w-[70%] relative z-10"
              alt="Hero Image"
            ></img>

            <div className="w-[500px] h-[500px] bg-[#3F3F50] absolute rounded-full"></div>
          </div>
          {/* Kiri */}
          <div className="w-full md:w-[45%]">
            <div>
              <h2 className="font-medium text-white text-2xl md:text-6xl md:mb-2 text-center md:text-left">
                ABOUT ME
              </h2>
              <div className="w-[30%] md:w-[35%] p-1 bg-yellow-500 rounded-full mt-1 md:mt-5 m-auto md:m-0"></div>
            </div>
            <h3 className="w-full md:w-[90%] my-2 p-1 text-white font-light text-sm text-center md:text-lg md:text-left">
              Hello, my name is Willy Calvin Candra Lay, usually called Willy. I
              am a student at the Bali State Polytechnic. I have an interest in
              Web Development. I got Web Development experience from campus
              projects and several projects from campus
            </h3>
          </div>
        </div>
      </section>

      {/* Service */}
      <section className="pt-16 md:pt-20">
        {/* judul */}
        <div className="w-32 p-1 m-auto mb-5">
          <h2 className="font-bold text-white text-center text-3xl">
            Service
            <div className="w-[85%] md:w-[90%] p-1 bg-yellow-500 rounded-full mt-2 mx-auto"></div>
          </h2>
        </div>
        {/* card */}
        <div className="w-[90%] m-auto p-1 flex flex-col md:flex-row justify-evenly items-stretch pt-16">
          {serviceData.map((Data) => (
            <CardService
              key={Data.id}
              icon={Data.icon}
              judul={Data.judul}
              text={Data.text}
            />
          ))}
        </div>
      </section>

      {/* Portofolio */}
      <section className="bg-[#282833] p-1 pt-20 mt-10" id="portofolio">
        <div className="w-[90%] m-auto">
          {/* judul */}
          <div className="mb-4">
            <h1 className="font-bold pb-1 text-white text-4xl">
              Best Project
              <div className="w-[65%] md:w-[13%] p-1 bg-yellow-500 rounded-full mt-2"></div>
            </h1>
            <p className="text-white font-light text-sm md:text-lg">
              The following are projects that I have worked on.
            </p>
          </div>

          {/* card project */}
          <div className="py-5 p-1">
            {projectData.map((Data) => (
              <CardProject
                key={Data.id}
                img={Data.img}
                judul={Data.judul}
                tipe={Data.tipe}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="pt-16" id="contact">
        <div className=" p-1 w-[90%] m-auto flex justify-between items-center">
          {/* Kiri */}
          <div className="w-full md:w-[45%]">
            <div>
              <h1 className="font-extrabold text-white text-4xl">Contact Us</h1>
              <div className="w-[60%] md:w-[25%] p-1 bg-yellow-500 rounded-full mt-5"></div>
            </div>
            <h3 className="w-full md:w-[90%] my-2 p-1 text-white font-light text-sm md:text-lg md:font-medium">
              Let's get to know each other or ask each other questions, through
              the social media that I have, and also{" "}
              <span className="text-yellow-500 font-bold">Follow</span> me on my
              social media, okay?
            </h3>

            {/* sosmed */}
            <div className="flex flex-wrap w-full md:flex-row mb-6 md:mb-0">
              <Button
                icon="fa-brands fa-instagram"
                text="Instagram"
                href="https://www.instagram.com/willycandra12/"
                target="_blank"
              />
              <Button
                icon="fa-brands fa-linkedin"
                text="Linkedin"
                href="https://www.linkedin.com/in/willy-calvin-candra-lay-854b6a333/"
                target="_blank"
              />
              <Button
                icon="fa-brands fa-github"
                text="Github"
                href="https://github.com/CalvinCandra"
                target="_blank"
              />
            </div>
          </div>
          {/* Kanan */}
          <div className="w-[55%] md:flex justify-center items-center relative hidden">
            <img
              src={ImageData.diam}
              className="w-[70%] relative z-10"
              alt="Hero Image"
            ></img>

            <div className="w-[500px] h-[500px] bg-[#2D2D39] absolute rounded-full"></div>
          </div>
        </div>
      </section>

      {/* footer */}
      <footer className="bg-[#282833] py-6 flex justify-center items-center -mt-1">
        <h5 className="text-white">
          &copy; {new Date().getFullYear()} WillyCandra. All rights reserved.
        </h5>
      </footer>
    </div>
  );
}

export default IndexPage;
