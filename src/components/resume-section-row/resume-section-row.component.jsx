import React from 'react';

const ResumeSectionRow = (props) => {
  
    return (
        <li>
            <div className="label">{props.item.label}:</div>
            <div className="content">{props.item.value}</div>
        </li>
    )
};

export default ResumeSectionRow;