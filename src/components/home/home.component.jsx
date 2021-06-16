import React from 'react';
import '../../App.scss';
import Header from '../header/header.component';
import Objective from '../objective/objective.component';
import Summary from '../summary/summary.component';
import Skills from '../skills/skills.component';
import ResumeSection from '../resume-section/resume-section.component';
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
        // alert(this.props.id);

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

        firebase.database().ref(this.props.id || 'it-resume').once('value', (snap) => {
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

        if (this.props.id) {
            return (
                <section className="App" id="content">
                    <Header resume={this.state.resume} />
                    <Objective objective={this.state.resume.objective} />
                    <Summary summary={this.state.resume.executiveSummary} />
                    <Skills skills={this.state.resume.skills} />
                    <Projects projects={this.state.resume.projects} />
                    <Experience experience={this.state.resume.experience} />
                    <PersonalProjects personalProjects={this.state.resume.personalProjects} />
                    <Education education={this.state.resume.education} />
                </section>
            );
        } else {
            return (
                <section className="App" id="content">
                    <Header resume={this.state.resume} />
                    <Objective objective={this.state.resume.objective} />
                    <Summary summary={this.state.resume.executiveSummary} />
                    <Skills skills={this.state.resume.skills.value} />
                    <ResumeSection items={this.state.resume.personalProjects} />
                    <ResumeSection items={this.state.resume.certification} />
                    <ResumeSection items={this.state.resume.education} />
                </section>
            );
        }
    }
}

export default Home;