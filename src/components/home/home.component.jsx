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
import firebase from '../../firebase';
import 'firebase/database';

const Home = (props) => {
    const [resume, setResume] = useState(null)

    useEffect(() => {
        const resumeRef = firebase.database().ref("resume");
        resumeRef.on("value", (snapshot) => {
            setResume(snapshot.val())
        })
    },[]);


        return resume && <section className="App" id="content">
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
       
}

export default Home;