import { GoLinkExternal } from "react-icons/go"
import { AiOutlineGithub } from "react-icons/ai"
import "./ProjectCard.css"

const ProjectCard = () => {
    return (
        <div className="card">
            <div className="card--about">
                <h2>Todo List App</h2>
                <p>This is a Todo List App which is built using React.js, Express.js, Node.js and MongoDB</p>
            </div>
            <div className="card--links">
                <a href="/"><GoLinkExternal className="links" /></a>
                <a href="/"><AiOutlineGithub className="links" /></a>
            </div>
        </div>
    )
}

export default ProjectCard