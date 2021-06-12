import React from 'react';
import './App.scss';
// import resume from './assets/resume';
import Header from './components/header/header.component';
import Objective from './components/objective/objective.component';
import Summary from './components/summary/summary.component';
import Skills from './components/skills/skills.component';
import Projects from './components/projects/projects.component';
import Experience from './components/experience/experience.component';
import PersonalProjects from './components/personal-project/personal-project.component';
import Education from './components/education/education.component';
import Axios from 'axios';
import firebase from 'firebase';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resume: null
    };
  }

  componentDidMount(){
    // Axios.get('https://mspwrites.com/massets/resume.json').then((response)=>{
    //   this.setState({
    //     resume: response.data
    //   });
    // })

    // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyA_Uh9sk-bsskdlWryUqXxEEPKxcvQ9ZzA",
    authDomain: "resume-30e0a.firebaseapp.com",
    projectId: "resume-30e0a",
    storageBucket: "resume-30e0a.appspot.com",
    messagingSenderId: "404562103091",
    appId: "1:404562103091:web:289631f1154b83cf180c46"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  console.log(firebase);

  firebase.database().ref('resume').once('value',(snap)=>{
    console.log(snap.val());
    this.setState({
      resume: snap.val()
    })
  });

  
  }

  render() {
    if(!this.state.resume){
      return (
        <section></section>
      )
    }
    return (
      <section className="App" id="content">
      <Header resume={this.state.resume} />
      <Objective objective={this.state.resume.objective} />
      <Summary summary={this.state.resume.executiveSummary} />
      <Skills skills={this.state.resume.skills}/>
      {/* <Projects projects={this.state.resume.projects} /> */}
      {/* <Experience experience={this.state.resume.experience} /> */}
      <PersonalProjects personalProjects={this.state.resume.personalProjects} />
      <Education education={this.state.resume.education} />
    </section>
    );
  }
};


export default App;
