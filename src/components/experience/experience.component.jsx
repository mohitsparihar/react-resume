import React from 'react';

const Experience = (props) => {

    const items = props.experience.map(el => {
        return (
            <li>
            <section>
                <ul>
                    <li>
                        <div class="label">Name:</div>
                        <div class="content">{el.name}</div>
                    </li>
                    <li>
                        <div class="label">Title:</div>
                        <div class="content">{el.title}</div>
                    </li>
                    <li>
                        <div class="label">Tenure:</div>
                        <div class="content">{el.startDate} - {el.endDate}</div>
                    </li>
                    <li>
                        <div class="label">Url:</div>
                        <div class="content">{el.url}</div>
                    </li>
                </ul>
            </section>
        </li>
        )
      });
      
    return (
        <section id="experience">
            <h2>Experience</h2>
            <ul>
                {items}
            </ul>
        </section>
    )
};

export default Experience;