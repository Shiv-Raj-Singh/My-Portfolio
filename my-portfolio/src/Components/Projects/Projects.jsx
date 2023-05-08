import './project.css'
import data  from './data'

  const Projects = () => {
    return(
        <>
              {
                  data.map((a)=>{
                      return <div className="project-container fluid">
              <div className="project-links">
                <h4 className="h4"> {a.name} </h4>
                <div className="links">
                <a href={a.github}>
                            <i className=" h3 github fa fa-github">
                                    
                            </i>
                </a>
            {
                a.live && <a href={a.link}>                    
                <i className=" h3 mx-3 live-project fa fa-chrome">
                live 
                </i>
                </a>
            }
                </div>
                </div>
                <div className="project-about">
                          <h6 className="h6"> Tech-Stack :- {a.description} </h6>
                          <p className="des mt-2">
                              {
                                a.body.map((v, index)=>{
                                    return <ul> {v} </ul>
                                })
                              }
                          </p>
              </div>
          </div>
        })
} 
    </>    
  )
  };
  
  export default Projects;
  