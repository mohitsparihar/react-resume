import React from 'react';

const PersonalProjects = (props) => {
    const items = props.personalProjects.map(el => {
        return (
            <li>
                <section>
                    <ul>
                        <li>
                            <div class="label">Name:</div>
                            <div class="content">{el.name}</div>
                        </li>
                        <li>
                            <div class="label">Url:</div>
                            <div class="content"><a href="{el.url}" target="_blank">{el.url}</a></div>
                        </li>
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
        <section id="personalProject">
        <h2>Personal Projects</h2>
            <ul>
                {items}
            </ul>
        </section>
    )
}

export default PersonalProjects;