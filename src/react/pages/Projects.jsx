export default function Projects() {
    return (
        <div className="container">
            <div className="projects__wrapper">
                <ul>
                    <File href="https://github.com/noamuv/AI-News-Summariser" name="AI News Summariser" date="May 2025" code="Java"/>
                    <File href="https://github.com/noamuv/Second-Hand-Car-Store-App" name="Second Hand Car Store App" date="Dec 2024" code="C Programming"/>
                    <File href="https://noamuv.github.io/sushi_website_tutorial/" name="Sushi Website" date="Nov 2024" code="HTML/CSS"/>
                </ul>
            </div>
        </div>
    )
}

function File({href, name, date, code}) {
    return (
        <li>
            <a href={href}>
                <div>
                    <h2>{name}</h2>
                </div>
                <div>
                    <p>{date}</p>
                </div>
                <div>
                    <p>{code}</p>
                </div>
            </a>
        </li>
    )
}
