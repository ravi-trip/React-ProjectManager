import React, { Component } from 'react';
import Projects from './components/projects';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      projects: []
    }
  }

  componentWillMount(){ //lifecycle method that is fired off everytime the component is re rendered
    this.setState({projects: [
      {
        title: 'Business Website',
        category: 'Web Design'
      },
      {
        title: 'Social Website',
        category: 'Mobile Development'
      },
      {
        title: 'E-commerce Shopping cart',
        category: 'Web Development'
      }
    ]})
  }
  render() {
    return (
      <div className="App">
        My App
        <Projects projects={this.state.projects} /> 
      </div>
    );
  }
}

export default App;
