import React from 'react';

const Skills = (props) => {
    const items = props.skills.map((el,index) => {
        return (
        <li key={index} class="double">{el}</li>
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