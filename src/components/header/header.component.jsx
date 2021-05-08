import React from 'react';
import phoneLogo from './../../assets/img/phoneLogo.png';
import mailLogo from './../../assets/img/mailLogo.png';
import gitlogo from './../../assets/img/gitlogo.png';
import linkedinLogo from './../../assets/img/linkedinLogo.png';

const Header = (props) => {
    return (
    <section>
    <h1 class="name">{props.resume.name}</h1>
    <div id="contact">
        <div><img src={phoneLogo}/><a href="tel:{props.resume.phoneNumber}"
                target="_blank">{props.resume.phoneNumber}</a></div>
        <div><img src={mailLogo}/><a href="mailto:{props.resume.email}" target="_blank">{props.resume.email}</a>
        </div>
        <div><img src={gitlogo}/><a href="https://github.com/mohitsparihar/"
                target="_blank">{props.resume.github}</a></div>
        <div><img src={linkedinLogo}/><a href="https://linkedin.com/in/mohitsparihar"
                target="_blank">{props.resume.linkedin}</a></div>
    </div>
    </section>
    )
}

export default Header;