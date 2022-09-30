import React from 'react';
import './App.scss';
import Home from './components/home/home.component';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useParams } from 'react-router';

function Resume() {
  let { id } = useParams();
  return <Home id={id}/>;
}

const App = () => {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" children={<Resume />} />
            <Route path="/:id" children={<Resume />} />
          </Switch>
        </div>
      </Router>
    );
};


export default App;
