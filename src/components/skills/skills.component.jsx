import React from 'react';

const Skills = (props) => {
    const items = props.skills.map((el,index) => {
        return (
        <li key={"skills" + index} className="double">{el}</li>
    )});
    
    return (
        <section>
            <h2><strong>Skills:</strong></h2>
            <ul className="double">
                {items}
            </ul>
        </section>
    )
};

export default Skills;