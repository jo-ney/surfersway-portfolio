import project1Img from '../assets/ida.jpeg'
import project2Img from '../assets/Dino-game.jpeg'

export default function Project(){
    return <section id="project" className="bg-tertiary font-textfont pt-10 p-10">
        <div className="w-full">
            <h1 className="border-b-2 w-[135px] text-primary text-bold text-4xl">Projects</h1>
        </div>

        <div className="w-full">

        <div className="flex flex-col md:flex-row justify-between px-10 gap-5">
            <div className="relative">
                <img className="h-[280px] w-[450px] py-5" src={project1Img}/>
                <div className="project-desc text-quaternary">
                    <p className="text-center px-5 py-5">Responsive Website build with HTML, CSS,JavaScript, Bootstrap</p>
                    <div className="flex justify-center"><button className="btn"><a target="_blank" href="https://jo-ney.github.io/IDA/">View Project</a></button></div>
                </div>
            </div>

            <div className="relative">
                <img className="h-[280px] w-[450px] py-5" src={project2Img}/>
                <div className="project-desc text-quaternary">
                    <p className="text-center px-5 py-5">Game build with HTML, CSS, JavaScript.</p>
                    <div className="flex justify-center"><button className="btn"><a target="_blank" href="https://jo-ney.github.io/Dino-game/">View Project</a></button></div>
                </div>
            </div>

            </div>

        </div>
        {/* <div>
            <img src={project2Img}/>
        </div> */}

    </section>
}