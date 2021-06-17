import React from 'react';

const Projects = (props) => {
    const items = props.projects.map(el => {
        return (
            <li>
                <section>
                    <ul>
                        { el.title && <li>
                            <div class="label">Title:</div>
                            <div class="content">{el.title}</div>
                        </li>}
                        { el.technologies && <li>
                            <div class="label">Technologies:</div>
                            <div class="content">{el.technologies}</div>
                        </li>}
                        { el.name && <li>
                            <div class="label">Name:</div>
                            <div class="content">{el.name}</div>
                        </li>}
                        { el.url && <li>
                            <div class="label">Url:</div>
                            <div class="content"><a href="{el.url}" target="_blank">{el.url}</a></div>
                        </li>}
                        { el.description && <li>
                            <div class="label">Description:</div>
                            <div class="content">{el.description}</div>
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
