import React from 'react';

const Experience = (props) => {

    const items = props.experience.map((el, index) => {
        return (
            <li key={"exp" + index}>
            <section>
                <ul>
                    <li>
                        <div className="label">Name:</div>
                        <div className="content">{el.name}</div>
                    </li>
                    <li>
                        <div className="label">Title:</div>
                        <div className="content">{el.title}</div>
                    </li>
                    <li>
                        <div className="label">Tenure:</div>
                        <div className="content">{el.startDate} - {el.endDate}</div>
                    </li>
                    <li>
                        <div className="label">Url:</div>
                        <div className="content">{el.url}</div>
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