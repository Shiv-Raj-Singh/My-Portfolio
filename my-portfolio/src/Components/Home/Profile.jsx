import Typical from 'react-typical';

import './profile.css'

const Profile = () => {

    return (
        <>
        <div className="profile-container">
            <div className="profile-parent">
                <div className="profile-details">
                    <div className="colz">
                        <div className="colz-icon">

                        <a href="https://www.facebook.com/profile.php?id=100026079350746">
                            <i className="fa fa-facebook-square">
                                    
                            </i>
                        </a>
                        <a href="https://www.instagram.com/mangalthakur00/?next=https%3A%2F%2Fwww.instagram.com%2Fdirect%2Finbox%2F%3F__coig_login%3D1">
                            <i className="fa fa-instagram">
                                    
                            </i>
                        </a>
                        <a href="https://www.linkedin.com/in/shiv-raj-singh-6a7883224/?originalSubdomain=in">
                            <i className="fa fa-linkedin">
                                    
                            </i>
                        </a>
                        <a href="https://github.com/Shiv-Raj-Singh/">
                            <i className="fa fa-github">
                                    
                            </i>
                        </a>
                        </div>
                    </div>

                <div className="profile-details-name">
                    <span className="primary-text">
                        {" "}
                        Hello I'm <span className="highlighted-text">Shiv Raj Singh</span>
                    </span>
                </div>
                <div className="profile-details-role">
                    {" "}
                    <h1>
                        {" "}
                        <Typical
                            loop={Infinity} 
                            steps={[
                                ' Hi` Welcome on My Page ' , 2000 ,
                                'i m web Developer ' , 1000 ,
                                'Full Stack Developer' , 1000 ,
                                'MERN Stack Developer' , 1000 ,
                                'Node Js Developer' , 1000 ,
                                'React Js Developer' , 1000 ,
                        ]}
                        wrapper='h3'
                        />
                    </h1>
                    <span className="profile-role-tagline">
                        Hi i am looking for Full Stack Role But I have good experience as Back-end Dev as well as Front End Dev   
                    </span>
                </div>
                    <div className="profile-option">
                        <button className="btn primary-btn">
                            {" "} 
                            Hire Me 
                        </button>
                        <a href="shivrajCV.pdf" download={'shivraj resume'}  >
                            <button className="btn highlighted-btn">
                                Get Resume
                            </button>
                        </a>
                    </div>
                </div>
            <div className="profile-picture">
                        <div className="profile-picture-background">

                        </div>
            </div>
                

            </div>
        </div>
        </>
    );
}

export default Profile;
