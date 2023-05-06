import './skill.css'
const Skill = () => {
    return (
        <>
            <div className="skill-container">
                <div className="skill-parent">
                <div className="skill h5">
                    <h4 className="h4">
                    Programming Language
                    </h4>
             <ul className='ul' >
                        <li>JavaScript</li>
                        <li>HTML & CSS</li>
                        <li>Python</li>
                        <li>Data Structure & Algorithm</li>
                    </ul>
                </div>
                <div className="skill h5">
                    <h3 className="h4">Frameworks</h3>
            <ul className='ul' >
                        <li>Express Js</li>
                        <li>Mongoose</li>
                        <li>React Js</li>
                        <li>Redux Js</li>
                        <li>Bootstrap Js</li>
                    </ul>
                </div>
                <div className="skill h5">
                    <h4 className="h4">
                    Databases
                    </h4>
                    <ul className='ul' >
                        <li>Mongo DB</li>
                        <li>MySQL</li>
                        <li>Redis</li>
                    </ul>
                </div>
                <div className="skill h5">
                    <h4 className='h4' >
                    Tools
                    </h4>
                    <ul className='ul' >
                        <li>Git & Github</li>
                        <li>npm</li>
                        <li>POST-MAN</li>
                        <li>Socket.IO</li>
                    </ul>
                </div>
                <div className="skill h5">
                    <h4 className="h4">                        
                    Cloud-Services
                    </h4>
                    <ul className='ul' >
                        <li> AWS-S3</li>
                        <li>Netlify</li>
                        <li>Render</li>
                        <li>Vercel</li>
                    </ul>
                </div>
                </div>
                <div className="pic">
                    
                </div>
            </div>
        </>
    );
}

export default Skill;