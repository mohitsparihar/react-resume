import React from 'react';

const PersonalProjects = (props) => {
    const items = props.personalProjects.map((el, index) => {
        return (
            <li key={"PersonalProjects" + index}>
                <section>
                    <ul>
                        <li>
                            <div className="label">Name:</div>
                            <div className="content">{el.name}</div>
                        </li>
                        <li>
                            <div className="label">Description:</div>
                            <div className="content">{el.description}</div>
                        </li> 
                        <li>
                            <div className="label">Code:</div>
                            <div className="content"><a href="{el.url}" target="_blank">{el.url}</a></div>
                        </li>
                        {el.demo && <li>
                            <div className="label">Demo:</div>
                            <div className="content"><a href="{el.demo}" target="_blank">{el.url}</a></div>
                        </li>}
                    </ul>
                    </section>
                </li>
        )
    })

    return (
        <section id="personalProject">
        <h2>Personal Projects</h2>
            <ul>
                {items}
            </ul>
        </section>
    )
}

export default PersonalProjects;