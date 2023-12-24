import { FaGithub } from "react-icons/fa";
import Jatepwa from "../assets/jatepwa.png";
import Mvcblog from "../assets/mvcblog.png";
import Notetaker from "../assets/notetaker.png";
import Socialnetwork from "../assets/socialnetworkapiroutes18.png";
import Weatherdashboard from "../assets/weatherdashboard.png";
import Javascriptquiz from "../assets/javascriptquiz.png";
import { Link } from "react-router-dom";

const Portfolio = () => {
    const projects = [
        {
            title: "JATE PWA",
            repolink: "https://github.com/precisecoding/PWA",
            deploymentlink: "https://github.com/precisecoding/PWA",
            image: Jatepwa,
            stack: "HTML, CSS, Javascript, indexDB, PWA"
        },
        {
            title: "MVC Blog",
            repolink: "https://github.com/precisecoding/MVC-Blog.git",
            deploymentlink: "https://github.com/precisecoding/MVC-Blog.git",
            image: Mvcblog,
            stack: "Node.js, Express.js, Sequelize, Mysql2, Handlebars",
        },
        {
            title: "Note Taker",
            repolink: "https://github.com/precisecoding/Note-Taker",
            deploymentlink: "https://github.com/precisecoding/Note-Taker",
            image: Notetaker,
            stack: "Node.js, Express.js"
        },
        {
            title: "Social Network",
            repolink: "https://github.com/precisecoding/Social-Network-API",
            deploymentlink: "https://github.com/precisecoding/Social-Network-API",
            image: Socialnetwork,
            stack: "Node.js, Express.js, MongoDB"
        },
        {
            title: "Weather Dashboard",
            repolink: "https://github.com/precisecoding/Weather-Dashboard",
            deploymentlink: "https://precisecoding.github.io/Weather-Dashboard/",
            image: Weatherdashboard,
            stack: "HTML, CSS, Javascript, API"
        },
        {
            title: "Javascript Quiz",
            repolink: "https://github.com/precisecoding/JavascriptQuiz-m4",
            deploymentlink: "https://precisecoding.github.io/JavascriptQuiz-m4/",
            image: Javascriptquiz,
            stack: "HTML, CSS, Javascript"
        },
    ]

    return (
        <div className="projects-wrapper">
            <h2>Projects</h2>
            <div className="projects">
                {projects.map((project, id) => (
                    <div className="project" key={id}>
                        <img src={project.image} alt={project.title} />
                        <div className="project-details">
                            <div className="project-heading">
                                <h3><Link to={project.deploymentlink}>{project.title}</Link></h3>
                                <Link to={project.repolink} target={"_blank"}>
                                    <FaGithub />
                                </Link>
                            </div>
                            <strong>{project.stack}</strong>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Portfolio