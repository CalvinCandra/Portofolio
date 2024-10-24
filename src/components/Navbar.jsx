import React, {useState, useEffect} from "react"
import Button from "./Button";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    // fungsi saat user melakukan scroll
    const handleScroll = () => {
        if(window.scrollY > 50){
            setIsScrolled(true)
        }else{
            setIsScrolled(false)
        }
    }

    // menggunakan useeffect untuk menambahkan event listener scroll
    useEffect(() =>{
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return(
        <nav className={`fixed w-full flex justify-between items-center px-20 transition-all duration-300 ${isScrolled ? 'bg-black border-b border-gray-200' : 'bg-transparent border-none'}`}>
             {/* Logo */}
             <div className="font-extrabold text-white flex justify-between items-center w-[45%]">
                <h1 className="text-2xl">Willy<span className="text-lime-600">Candra</span></h1>

                {/* menu */}
                <div className="p-4 w-96 flex justify-between text-white">
                   <a href="" className="px-3 py-2 hover-text">Home</a>
                   <a href="" className="px-3 py-2 hover-text">About</a>
                   <a href="" className="px-3 py-2 hover-text">Project</a>
                   <a href="" className="px-3 py-2 hover-text">Contact</a>
                </div>
             </div>
             {/* button */}
             <Button href="#" text="Get in touch" target="" />
        </nav>
    )
}