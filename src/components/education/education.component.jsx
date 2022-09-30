import React from 'react';

const Education = (props) => {
    const items = props.education.map((el, index) => {
        return (
            <li key={"edu" + index}>
            <section>
                <ul>
                    <li>
                        <div className="label">School:</div>
                        <div className="content">{el.school}</div>
                    </li>
                    <li>
                        <div className="label">Program:</div>
                        <div className="content">{el.program}</div>
                    </li>
                    <li>
                        <div className="label">Dates Attended:</div>
                        <div className="content">{el.startDate} - {el.endDate}</div>
                    </li>
                    <li>
                        <div className="label">Achievements:</div>
                        <div className="content">{el.achievements}</div>
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