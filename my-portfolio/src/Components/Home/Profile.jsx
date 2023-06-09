import Typical from 'react-typical';

import './profile.css'
import { useNavigate } from 'react-router-dom';

const Profile = () => {
const Nav = useNavigate()
    return (
        <>
        <div className="profile-container">
            <div className="profile-parent">
                <div className="profile-details">
                    <div className="colz">
                        <div className="colz-icon">

                        <a href="https://www.facebook.com/profile.php?id=100026079350746">
                            <i className="mx-1 fa fa-facebook-square">
                                    
                            </i>
                        </a>
                        <a href="https://www.instagram.com/mangalthakur00/?next=https%3A%2F%2Fwww.instagram.com%2Fdirect%2Finbox%2F%3F__coig_login%3D1">
                            <i className="mx-1 fa fa-instagram">
                                    
                            </i>
                        </a>
                        <a href="https://www.linkedin.com/in/shiv-raj-singh-6a7883224/?originalSubdomain=in">
                            <i className="mx-1 fa fa-linkedin">
                                    
                            </i>
                        </a>
                        <a href="https://github.com/Shiv-Raj-Singh/">
                            <i className="mx-1 fa fa-github">
                                    
                            </i>
                        </a>
                        <a href="https://leetcode.com/mt932747/">
                            <span  className='l-h' >LT-Code</span>
                        </a> 
                        <a href="https://www.hackerrank.com/Shiv_Raj_Singh?hr_r=1">
                            {"  "} <span className='l-h' >H-Rank</span>
                        </a>
                        </div>
                    </div>

                <div className="profile-details-name">
                    <span className="primary-text">
                        {" "}
                        Hi I'm <span className="highlighted-text">Shiv Raj Singh</span>
                    </span>
                </div>
                <div className="profile-details-role">
                    {" "}
                    <h1>
                        {" "}
                        <Typical
                            loop={Infinity} 
                            steps={[
                                'Web Developer ' , 1000 ,
                                'Full Stack Developer' , 1000 ,
                                'MERN Stack Developer' , 1000 ,
                                'Node Js Developer' , 1000 ,
                                'React Js Developer' , 1000 ,
                        ]}
                        wrapper='h3'
                        />
                    </h1>
                    <span className="profile-role-tagline">
                        Hi I am looking for Full Stack Role and I have good experience of Back-end Projects as well as Front End Projects   
                    </span>
                </div>
                    <div className="profile-option">
                        <button className="btn primary-btn" onClick={()=>Nav('/Contact')} >
                            {" "} 
                            Hire Me 
                        </button>
                        <a href="shiv_CV.pdf" download={'shivraj resume'}  >
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
