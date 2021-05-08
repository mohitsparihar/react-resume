import React from 'react';

const Projects = (props) => {
    const items = props.projects.map(el => {
        return (
            <li>
                <section>
                    <ul>
                        <li>
                            <div class="label">Title:</div>
                            <div class="content">{el.title}</div>
                        </li>
                        <li>
                            <div class="label">Technologies:</div>
                            <div class="content">{el.technologies}</div>
                        </li>
                        <li>
                            <div class="label">Description:</div>
                            <div class="content">{el.description}</div>
                        </li> 
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
