import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaStackOverflow } from "react-icons/fa";
import { Link } from "react-router-dom";


const Footer = () => {

        return (
            <footer>
                <ul>
                    <li>
                        <Link to="https://github.com/precisecoding" target={"_blank"}>
                            <FaGithub/>
                        </Link>
                    </li>
                    <li>
                        <Link to="https://www.linkedin.com/in/jeff-r-369340287/" target={"_blank"}>
                            <FaLinkedin/>
                        </Link>
                    </li>
                    <li>
                        <Link to="https://stackoverflow.com/users/22099472/precisioncoding" target={"_blank"}>
                            <FaStackOverflow/>
                        </Link>
                    </li>
                </ul>
            </footer>
        )
    }

export default Footer