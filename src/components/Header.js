import { useState } from "react";
import { HiBars3 } from "react-icons/hi2";

export default function Header(){
    const [toggleMenu, setToggleMenu] = useState(false)
    return <header className="flex justify-between px-5 py-5 text-quaternary bg-primary">
        <div>
            <a className="text-3xl font-bold" href="#">Joney</a>
        </div>
        <nav className="hidden md:block">
            <ul className="flex gap-3">
                <li><a className="hover:text-black" href="#">Home</a></li>
                <li><a className="hover:text-black" href="#about">About</a></li>
                <li><a className="hover:text-black" href="#project">Projects</a></li>
                <li><a className="hover:text-black" href="#contact">Contact</a></li>
            </ul>
        </nav>

        {toggleMenu &&
        <nav onClick={()=>setToggleMenu(!toggleMenu)} className="block md:hidden">
            <ul className="flex flex-col text-quaternary mobile-nav">
                <li className="border-b-2"><a className="hover:text-black" href="#">Home</a></li>
                <li className="border-b-2"><a className="hover:text-black" href="#about">About</a></li>
                <li className="border-b-2"><a className="hover:text-black" href="#project">Projects</a></li>
                <li><a className="hover:text-black" href="#contact">Contact</a></li>
            </ul>
        </nav>
        }
        <button onClick={()=>setToggleMenu(!toggleMenu)} className="block md:hidden"><HiBars3 className="text-5xl"/></button>

    </header>
}