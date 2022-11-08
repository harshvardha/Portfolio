import { MdEmail } from "react-icons/md"
import { GrLinkedin } from "react-icons/gr"
import { GoLinkExternal } from "react-icons/go"
import "./Home.css"
import bookPhoto from "../../images/pic.png"

const Home = () => {
    return (
        <div className="home">
            <div className="home--name">
                <h1>Hi, I Am</h1>
                <h1 style={{ color: "#ff3300" }}>Harshvardhan Singh</h1>
                <p>I am a Blockchain Developer, with strong knowledge of Data Structures, Algorithms, python, javascript, solidity and blockchain development frameworks and libraries.
                    I'm an insatiably curious lifelong learner. With a self served passion towards Blockchain Development, creating scalable solutions using blockchain technology and
                    developing highly empathetic well crafted solutions, I enjoy solving problems, learning about new technologies and meeting amazing, passionate minds like you.</p>
                <p className="home--contactMe"><MdEmail /> harshvardhansingh458@protonmail.com</p>
                <p className="home--contactMe">
                    <GrLinkedin />
                    linkedin.com/harsh28
                    <a href="https://www.linkedin.com/in/harsh28" id="linkedin"><GoLinkExternal /></a>
                </p>
            </div>
            <div className="home--image">
                <img src={bookPhoto} alt="my pic" />
            </div>
        </div>
    )
}

export default Home