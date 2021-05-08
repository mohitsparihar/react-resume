import React from 'react';

const Skills = (props) => {
    const items = props.skills.map(el => {
        return (
        <li class="double">{el}</li>
    )});
    
    return (
        <section>
            <h2><strong>Skills:</strong></h2>
            <ul class="double">
                {items}
            </ul>
        </section>
    )
};

export default Skills;