import './project.css'
import data  from './data'
// const data = [
//     {
//       name: "first Project ",
//       Requirement: "None",
//       Description: `iste sit neque voluptatum pariatur minima rerum maiores mollitia, ipsum sed adipisci quos quibusdam? Neque incidunt voluptate fugit dicta assumenda natus amet debitis laborum dolore non similique quis corporis id sunt, magnam minima? Vitae, unde ea rem ad enim quam hic non ab fuga eaque doloribus excepturi, quia voluptates obcaecati optio dolor cum beatae adipisci? Voluptatem earum possimus, commodi ex, expedita aut, ducimus ab veritatis laborum ea minus placeat. Dolore quis expedita odit ab sequi, ex veniam doloremque officia ad alias fuga, molestiae at quia perferendis eaque similique accusantium ipsam sit` ,
//       live : true , 
//       link : 'https://chat-app-frontend-sigma.vercel.app/' ,
//       github : '#'
//     },
//     {
//       name: "Second Project ",
//       Requirement: "None",
//       Description: "this my first prhdjwehjjn  bhwhxwn  xwgyub w nwqjhwn wwjjdm  mcdjcd m cdcjd dcnjdc  cddkjcdn mcdddddddddddddddddddddd cdnnnnnnnnnnnn jiiiiiiiiiiiiidc ceeeeeeeeeeeeeekj cwdddddddddddddddddw  cebhjwn",
//       link : 'https://chat-app-frontend-sigma.vercel.app/' ,
//       github : '#'
//     },
//     {
//       name: "third Project ",
//       Requirement: "None",
//       Description: `quas ut corporis natus quod illo est? Dignissimos vero error deleniti molestias incidunt nisi dolorem magni tempora exercitationem. Maiores itaque quisquam nostrum facilis, fugiat eum et illo ad veritatis perferendis odio quidem obcaecati quia magni optio iure temporibus. Doloremque nesciunt odit iste a ad porro. Culpa aperiam adipisci, praesentium vitae fuga doloribus quas! Adipisci ea sapiente voluptas autem eum, eos aliquid numquam quaerat cum rerum corrupti eaque repellat quidem eius est velit. Consequatur, earum.`,
//       github : '#'
//     },
//     {
//       name: "fourth Project ",
//       Requirement: "None",
//       Description: `  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, sed. Quidem repellat nam repellendus voluptate numquam incidunt ducimus beatae, veniam quas culpa corporis. Qui, accusamus itaque illo distinctio culpa aliquid veritatis odio voluptatibus dolor unde porro architecto modi hic tempore aut sint sit quae nobis excepturi repellat cumque repudiandae? Consequuntur dolore error nihil ipsum. Dolores amet magni accusantium nam deleniti, asperiores ducimus facere dolorum qui, est sit, iste placeat labore? Culpa eveniet asperiores est earum quaerat enim reiciendis repellendus vitae, fugiat aspernatur et aut quod `,
//       link : 'https://chat-app-frontend-sigma.vercel.app/' ,
//       github : '#'
//     },
//   ];
  
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
                <i className=" h3 mx-3 live-project fa fa-instagram">
                
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
  