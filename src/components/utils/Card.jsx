import { GoLink } from "react-icons/go";
import { FaGithub } from "react-icons/fa";

function Card({ item }) {
    return (
        <>
            {item.map((val) => (
                <article className='project-item'
                    key={val.id}>
                    <img src={val.image} />
                    <div className='project-cover'>
                        <div className="cover_text">
                            <div>
                                <h4>{val.name}</h4>
                                <p>{val.description}</p>
                            </div>
                            <div className="links">
                                <a href='#'>
                                    <GoLink size={50} color="white" />
                                </a>
                                <a href={val.github}>
                                    <FaGithub size={50} color="white" />
                                </a>
                            </div>
                        </div>
                    </div>
                </article>
            ))}
        </>
    )
}

export default Card