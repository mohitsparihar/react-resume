import React, {useEffect, useState} from 'react';
import '../../App.scss';
import Header from '../header/header.component';
import Objective from '../objective/objective.component';
import Summary from '../summary/summary.component';
import Skills from '../skills/skills.component';
import Projects from '../projects/projects.component';
import Experience from '../experience/experience.component';
import PersonalProjects from '../personal-project/personal-project.component';
import Certificates from '../certificates/certificates.component';
import AcademicProjects from '../academic-projects/academic-projects.component';
import Trainings from '../training/training.component';
import Education from '../education/education.component';
import firebase from 'firebase/app';
import 'firebase/database';

const Home = (props) => {
    const [resume, setResume] = useState(null)

    useEffect(() => {
        var firebaseConfig = {
            apiKey: "AIzaSyA_Uh9sk-bsskdlWryUqXxEEPKxcvQ9ZzA",
            authDomain: "resume-30e0a.firebaseapp.com",
            projectId: "resume-30e0a",
            storageBucket: "resume-30e0a.appspot.com",
            messagingSenderId: "404562103091",
            appId: "1:404562103091:web:289631f1154b83cf180c46"
        }

        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        } else {
            firebase.app();
        }

        firebase.database().ref(props.id || 'resume').once('value', (snap) => {
            setResume(snap.val())
        });
        
        return setResume(null)
    },[]);

        if (!resume) {
            return (
                <section></section>
            )
        }

        return (
            <section className="App" id="content">
            { resume && <Header resume={resume} /> }
            { resume.objective && <Objective objective={resume.objective} /> }
            { resume.executiveSummary && <Summary summary={resume.executiveSummary} /> }
            { resume.skills && <Skills skills={resume.skills}/> }
            { resume.experience && <Experience experience={resume.experience} />}
            { resume.projects && <Projects projects={resume.projects} /> }
            { resume.personalProjects && <PersonalProjects personalProjects={resume.personalProjects} /> }
            { resume.academicProjects && <AcademicProjects academicProjects={resume.academicProjects} /> }
            { resume.trainings && <Trainings trainings={resume.trainings} /> }
            { resume.certificates && <Certificates certificates={resume.certificates} /> }
            { resume.education && <Education education={resume.education} /> }
            </section>
        );
       
}

export default Home;