import React, { Component } from 'react';
import Projects from './Components/Projects'
import AddProject from './Components/AddProject'
//import DeleteProject from './Components/DeleteProject'
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      projects : []
    }
  }
  componentWillMount(){
    this.setState({projects: [
      {title: "Business Website", category: "Web Design"},
      {title: "Social App", category: "Mobile development"},
      {title: "Ecommerce app", category: "Web Development"},
    ]})
  }
  handleAddProject(project){
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects:projects})
  }
  deleteproject(project){
    let projects = this.state.projects;
    let index = projects.indexOf(project)
    projects.splice(index,1);
    this.setState({projects:projects});
  }
  render() {
    return (
      <div className="App">
        <AddProject addproject={this.handleAddProject.bind(this)}/>
        <Projects projects={this.state.projects}/>
      </div>
    );
  }
}

export default App;
