import React from 'react';

const Certificates = (props) => {
    const items = props.certificates.map((el, index) => {
        return (
            <li key={"certificate" + index}>
                <section>
                    <ul>
                        <li>
                            <div className="label">Name:</div>
                            <div className="content">{el.name}</div>
                        </li>
                        <li>
                            <div className="label">Url:</div>
                            <div className="content"><a href="{el.url}" target="_blank">{el.url}</a></div>
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
        <section id="certificates">
        <h2>Certificates</h2>
            <ul>
                {items}
            </ul>
        </section>
    )
}

export default Certificates;