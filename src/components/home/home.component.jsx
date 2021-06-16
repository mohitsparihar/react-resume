import React from 'react';
import '../../App.scss';
import Header from '../header/header.component';
import Objective from '../objective/objective.component';
import Summary from '../summary/summary.component';
import Skills from '../skills/skills.component';
import Projects from '../projects/projects.component';
import Experience from '../experience/experience.component';
import PersonalProjects from '../personal-project/personal-project.component';
import Education from '../education/education.component';
import firebase from 'firebase';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            resume: null
        };
    }

    componentDidMount() {
        var firebaseConfig = {
            apiKey: "AIzaSyA_Uh9sk-bsskdlWryUqXxEEPKxcvQ9ZzA",
            authDomain: "resume-30e0a.firebaseapp.com",
            projectId: "resume-30e0a",
            storageBucket: "resume-30e0a.appspot.com",
            messagingSenderId: "404562103091",
            appId: "1:404562103091:web:289631f1154b83cf180c46"
        };

        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        } else {
            firebase.app();
        }

        firebase.database().ref(this.props.id || 'resume').once('value', (snap) => {
            this.setState({
                resume: snap.val()
            })
        });
    }

    render() {
        if (!this.state.resume) {
            return (
                <section></section>
            )
        }

        return (
            <section className="App" id="content">
            { this.state.resume && <Header resume={this.state.resume} />}
            { this.state.resume.objective && <Objective objective={this.state.resume.objective} />}
            { this.state.resume.executiveSummary && <Summary summary={this.state.resume.executiveSummary} />}
            { this.state.resume.skills && <Skills skills={this.state.resume.skills}/>}
            {this.state.resume.projects && <Projects projects={this.state.resume.projects} />}
            {this.state.resume.experience && <Experience experience={this.state.resume.experience} />}
            {this.state.resume.personalProjects && <PersonalProjects personalProjects={this.state.resume.personalProjects} />}
            {this.state.resume.education && <Education education={this.state.resume.education} />}
            </section>
        );
       
    }
}

export default Home;