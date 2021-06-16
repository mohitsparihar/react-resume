import React from 'react';

const Summary = (props) => {
    return (
    <section id="summary">
        <h2>Executive Summary</h2>
        <div className="paraContent">{props.summary}</div>
    </section>
    )
}

export default Summary;