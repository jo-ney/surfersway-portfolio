import heroImg from "../assets/hero.png"
import {AiOutlineLinkedin, AiOutlineInstagram, AiOutlineWhatsApp} from "react-icons/ai"

export default function Hero(){
    return <section className="flex flex-col md:flex-row justify-around py-10 bg-primary">
        <div className="items-center p-5 md:w-1/2">
            <h1 className="text-quaternary font-portfolio-font text-6xl">Hi,<br/>
            Im <span>S</span>Joney Abraham.
            <p className="pt-5 text-2xl">Im a Full-stack Web Developer.</p>
            </h1>
            <div className="flex py-5 text-4xl gap-2">
                <a className="" target="_blank" href="https://www.linkedin.com/in/joney-abraham-7b4530249"><AiOutlineLinkedin/></a>
                <a className="" target="_blank" href="https://www.instagram.com/_.joney__/profilecard/?igsh=MXY0bm8zNWZvcmRubw=="><AiOutlineInstagram/></a>
                <a className="" target="_blank" href="https://wa.me/+916369212574?Hi"><AiOutlineWhatsApp/></a>
            </div>
        </div>

        <img className="md:w-1/3" src={heroImg} alt="hero img" />
    </section>
}