import React from 'react';

const Objective = (props) => {
    return (
    <section id="objective">
        <h2>Objective</h2>
        <div class="paraContent">{props.objective}</div>
    </section>
    )
}

export default Objective;