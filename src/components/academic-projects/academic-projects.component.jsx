import React from 'react';

const AcademicProjects = (props) => {
    const items = props.academicProjects.map(el => {
        return (
            <li>
                <section>
                    <ul>
                        <li>
                            <div class="label">Title:</div>
                            <div class="content">{el.title}</div>
                        </li>
                        { el.url && <li>
                            <div class="label">Url:</div>
                            <div class="content"><a href="{el.url}" target="_blank">{el.url}</a></div>
                        </li>}
                        <li>
                            <div class="label">Description:</div>
                            <div class="content">{el.description}</div>
                        </li> 
                    </ul>
                    </section>
                </li>
        )
    })

    return (
        <section id="academicProjects">
        <h2>Academic Projects</h2>
            <ul>
                {items}
            </ul>
        </section>
    )
}

export default AcademicProjects;