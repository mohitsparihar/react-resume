import React from 'react';

const Projects = (props) => {
    const items = props.projects.map((el, index) => {
        return (
            <li key={"project" + index}>
                <section>
                    <ul>
                        { el.title && <li>
                            <div className="label">Title:</div>
                            <div className="content">{el.title}</div>
                        </li>}
                        { el.technologies && <li>
                            <div className="label">Technologies:</div>
                            <div className="content">{el.technologies}</div>
                        </li>}
                        { el.name && <li>
                            <div className="label">Name:</div>
                            <div className="content">{el.name}</div>
                        </li>}
                        { el.url && <li>
                            <div className="label">Url:</div>
                            <div className="content"><a href="{el.url}" target="_blank">{el.url}</a></div>
                        </li>}
                        { el.description && <li>
                            <div className="label">Description:</div>
                            <div className="content">{el.description}</div>
                        </li>} 
                    </ul>
                </section>
            </li>
        )
    });

    return (
    <section id="projects">
        <h2>Projects</h2>
        <ul>
            {items}
        </ul>
    </section>
    )
}

export default Projects;
