import React from 'react';

const Certificates = (props) => {
    const items = props.certificates.map(el => {
        return (
            <li>
                <section>
                    <ul>
                        <li>
                            <div class="label">Name:</div>
                            <div class="content">{el.name}</div>
                        </li>
                        <li>
                            <div class="label">Url:</div>
                            <div class="content"><a href="{el.url}" target="_blank">{el.url}</a></div>
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
        <section id="certificates">
        <h2>Certificates</h2>
            <ul>
                {items}
            </ul>
        </section>
    )
}

export default Certificates;