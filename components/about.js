function About() {
    const skills = [
        'JavaScript (ES6+)',
        'TypeScript',
        'React',
        'Eleventy',
        'Node.js',
        'WordPress',
    ];
    return (
        <div
            className='about px-7 py-20 flex flex-col items-center justify-center max-w-7xl mx-auto'
            id='about'>
            <h2 className='about-heading flex items-center w-full mb-20 whitespace-nowrap leading-[1.1] font-semibold text-slate-300 text-step-5'>
                About<span className="text-green-400"> Me</span>
            </h2>
            
            <div className="content_container" flex gap-12>
            <div className="content_left">
                <div className="content_abotme">
                    <p className="mt-4">
                        shgshjadgaghjahahs
                    </p>
                    </div>
                    <div className="content_technologies"></div>
                   
                    </div>
                    <div className="content_right"></div>
                    <img src="/rick.gif" className="w-1/4"/>
                </div>
        </div>
    );
}

export default About;
