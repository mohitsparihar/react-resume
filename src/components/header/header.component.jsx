import React from 'react';
import phoneLogo from './../../assets/img/phoneLogo.png';
import mailLogo from './../../assets/img/mailLogo.png';
import gitlogo from './../../assets/img/gitlogo.png';
import linkedinLogo from './../../assets/img/linkedinLogo.png';

const Header = (props) => {
    return (
    <section>
    <h1 className="name">{props.resume.name}</h1>
    <div id="contact">
        <div><img alt="phoneLogo" src={phoneLogo}/><a href="tel:{props.resume.phoneNumber}" rel="noopener noreferrer" target="_blank">{props.resume.phoneNumber}</a></div>
        <div><img alt="mailLogo" src={mailLogo}/><a href="mailto:{props.resume.email}" rel="noopener noreferrer" target="_blank">{props.resume.email}</a>
        </div>
        <div><img alt="gitlogo" src={gitlogo}/><a href={props.resume.github}
                rel="noopener noreferrer" target="_blank">{props.resume.github}</a></div>
        <div><img alt="linkedinLogo" src={linkedinLogo}/><a href={props.resume.linkedin}
                rel="noopener noreferrer" target="_blank">{props.resume.linkedin}</a></div>
    </div>
    </section>
    )
}

export default Header;