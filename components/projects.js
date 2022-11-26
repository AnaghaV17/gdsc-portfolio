function Projects(props) {
    return (
        <div
            className='flex flex-col gap-4 overflow-scroll max-w-7xl mx-auto px-8 py-20'
            id='projects'>
            <h2 className='mb-20 whitespace-nowrap leading-[1.1] font-semibold text-slate-300 text-step-5'>
                Projects
            </h2>
            <div className="bg-slate-800 p-4 rounded-sm">
        <p className="text-yellow-400 font-bold text-sm">Featured project</p>
        <p>Portfolio</p>
        <p>hdgegyetyrbfghbhdj</p>
        <button>click me</button>
        <a href="https://github.com/AnaghaV17/gdsc-portfolio" className="underline ml-4 hover:">My github</a>
        
        </div>
        </div>
    );
}

function ProjectCard() {
    return(<div className="bg-slate-800 p-4 rounded-sm">
        <p className="text-yellow-400 font-bold text-sm">Featured project</p>
        <p>Portfolio</p>
        <p>hdgegyetyrbfghbhdj</p>
        <button>click me</button>
        <a href="https://github.com/AnaghaV17/gdsc-portfolio" className="underline ml-4">My github</a>
        
        </div>);}



export default Projects;


  