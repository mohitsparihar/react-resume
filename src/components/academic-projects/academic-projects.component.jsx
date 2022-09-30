import React from 'react';

const AcademicProjects = (props) => {
    const items = props.academicProjects.map((el, index) => {
        return (
            <li key={"AcademicProjects" + index}>
                <section>
                    <ul>
                        <li>
                            <div className="label">Title:</div>
                            <div className="content">{el.title}</div>
                        </li>
                        { el.url && <li>
                            <div className="label">Url:</div>
                            <div className="content"><a href="{el.url}" target="_blank">{el.url}</a></div>
                        </li>}
                        <li>
                            <div className="label">Description:</div>
                            <div className="content">{el.description}</div>
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