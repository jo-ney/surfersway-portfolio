import aboutImg from '../assets/about.png'

export default function About(){
    return <section id="about" className="flex flex-col md:flex-row py-5 justify-around bg-secondary font-textfont">
        <img className="md:w-1/3" src={aboutImg}/>
        <div className="md:w-1/2 flex flex-col justify-center px-5">
            <h1 className="border-b-2 w-[160px] border-quaternary font-bold text-4xl">About me</h1>
            <p className="pt-5 pb-2">I am a Full-stack Web Developer.</p>
            <p>Build Websites with HTMl, CSS, JavaScript, React.js, Node.js, Tailwind CSS, Bootstrap.</p>
        </div>
    </section>
}