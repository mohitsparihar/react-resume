import React from 'react';
import ResumeSectionRow from '../resume-section-row/resume-section-row.component';

const ResumeSection = (props) => {

    const items = props.items.value.map((item,index) => {
        
        const itemsOfItem = Object.values(item).map((itemInItem,subindex) => {
            return (<ResumeSectionRow key={subindex} item={itemInItem} />)
        });

        return (
            <li key={index}>
                <section>
                    <ul>
                        {itemsOfItem}
                    </ul>
                </section>
            </li>
            )
      });
      
    return (
        <section>
            <h2>{props.items.label}</h2>
            <ul>
                {items}
            </ul>
        </section>
    )
};

export default ResumeSection;