import Skill from "../Components/AboutMe/Skill";
import Contact from "../Components/ContactMe/Contact";
import Footer from "../Components/Footer/Footer";
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
            <Contact back={'#20313b'} />
            <Footer/>
        </>
    );
}

export default HomePage;