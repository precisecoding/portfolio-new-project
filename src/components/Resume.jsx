import { Link } from "react-router-dom"

const Resume = () => {

    return (
        <div className="resume">
            <h2>Resume</h2>
            <p className="download-resume">Download <Link to="">My Resume</Link></p>
            <div className="resume-section-wrapper">
                <div className="resume-section">
                    <h3>Front End Specialties</h3>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>Bootstrap</li>
                        <li>React</li>
                        <li>jQuery</li>
                        <li>JSON</li>
                        <li>Handlebars</li>
                        <li>PWA</li>
                        <li>JSX</li>
                        <li>Vite</li>
                        <li>Netlify</li>
                    </ul>
                </div>
                <div className="resume-section">
                    <h3>Back End Specialties</h3>
                    <ul>
                        <li>Node.js</li>
                        <li>Express</li>
                        <li>Apollo</li>
                        <li>Sequelize</li>
                        <li>MongoDB</li>
                        <li>MySQL</li>
                        <li>indexDB</li>
                        <li>REST API</li>
                        <li>OAuth</li>
                        <li>JWT</li>
                        <li>GraphQL</li>
                    </ul>
                </div>
                <div className="resume-section">
                    <h3>Certifications</h3>
                    <ul>
                        <li>Certificate One</li>
                        <li>Certificate Two</li>
                        <li>Certificate Three</li>
                    </ul>
                </div>
                <div className="resume-section">
                    <h3>Personal Projects</h3>
                    <ul>
                        <li>Project One</li>
                        <li>Project Two</li>
                        <li>Project Three</li>
                    </ul>
                </div>
                <div className="resume-section">
                    <h3>Group Projects</h3>
                    <ul>
                        <li>Group Project One</li>
                        <li>Group Project Two</li>
                        <li>Group Project Three</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Resume