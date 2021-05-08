import React from 'react';

const Education = (props) => {
    const items = props.education.map(el => {
        return (
            <li>
            <section>
                <ul>
                    <li>
                        <div class="label">School:</div>
                        <div class="content">{el.school}</div>
                    </li>
                    <li>
                        <div class="label">Program:</div>
                        <div class="content">{el.program}</div>
                    </li>
                    <li>
                        <div class="label">Dates Attended:</div>
                        <div class="content">{el.startDate} - {el.endDate}</div>
                    </li>
                    <li>
                        <div class="label">Achievements:</div>
                        <div class="content">{el.achievements}</div>
                    </li>
                </ul>
            </section>
        </li>
        )
    });

    return (
    <section id="education">
        <h2>Education</h2>
        <ul>
            {items}
        </ul>
    </section>
    )
}

export default Education;