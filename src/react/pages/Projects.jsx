export default function Projects() {
    return (
        <div className="container">
            <div className="projects__wrapper">
                <ul>
                    <File href="https://madeenasidonia.vercel.app/" name="Photography Portfolio" date="Ongoing" code="React, Motion"/>
                    <File href="https://noamuv.github.io/helix-gallery/" name="Helix Gallery" date="Aug 2026" code="R3F, Motion"/>
                    <File href="https://vinyl-music-player-ten.vercel.app/" name="3D Vinyl Music Player" date="Feb 2026" code="R3F, GSAP"/>
                    <File href="https://github.com/noamuv/AI-News-Summariser" name="AI News Summariser" date="May 2025" code="Java"/>
                    <File href="https://github.com/noamuv/Second-Hand-Car-Store-App" name="Second Hand Car Store App" date="Dec 2024" code="C Programming"/>
                </ul>
            </div>
        </div>
    )
}

function File({href, name, date, code}) {
    return (
        <li>
            <a href={href}>
                <div className="projects__name">
                    <h2>{name}</h2>
                </div>
                <div className="projects__date">
                    <p>{date}</p>
                </div>
                <div className="projects__code">
                    <p>{code}</p>
                </div>
            </a>
        </li>
    )
}
