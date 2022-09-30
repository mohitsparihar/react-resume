import React from 'react';

const Trainings = (props) => {
    const items = props.trainings.map((el, index) => {
        return (
            <li key={"Trainings" + index}>
                <section>
                    <ul>
                        <li>
                            <div className="label">Topic:</div>
                            <div className="content">{el.topic}</div>
                        </li>
                        <li>
                            <div className="label">Company:</div>
                            <div className="content">{el.company}</div>
                        </li>
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
        <section id="trainings">
        <h2>Trainings</h2>
            <ul>
                {items}
            </ul>
        </section>
    )
}

export default Trainings;