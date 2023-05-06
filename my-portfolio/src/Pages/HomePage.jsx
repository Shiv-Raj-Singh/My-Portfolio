import Skill from "../Components/AboutMe/Skill";
import Navbar from "../Components/Home/Navbar";
import Profile from "../Components/Home/Profile";
import Projects from "../Components/Projects/Projects";

const HomePage = () => {
    return (
        <>
            <Navbar/>
            <Profile/>
            <Skill/>
            <Projects/>
        </>
    );
}

export default HomePage;