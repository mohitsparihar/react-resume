import React from 'react';

const Trainings = (props) => {
    const items = props.trainings.map(el => {
        return (
            <li>
                <section>
                    <ul>
                        <li>
                            <div class="label">Topic:</div>
                            <div class="content">{el.topic}</div>
                        </li>
                        <li>
                            <div class="label">Company:</div>
                            <div class="content">{el.company}</div>
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
        <section id="trainings">
        <h2>Trainings</h2>
            <ul>
                {items}
            </ul>
        </section>
    )
}

export default Trainings;