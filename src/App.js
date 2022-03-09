import React, { Component } from 'react';
import { SearchBar } from './searchBar';
import { Table } from './Table';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      classes: [{ id: 1, title: 'CSC141', grade: 'A', took: true },
                { id: 2, title: 'CSC240', grade: 'A', took: true },
                { id: 3, title: 'CSC142', grade: 'B', took: true },
                { id: 4, title: 'CSC241', grade: 'A', took: false },
                { id: 5, title: 'ESS101', grade: '', took: false },
                { id: 6, title: 'ENG368', grade: 'C', took: true },
                { id: 7, title: 'BIO110', grade: '', took: true }],
      gradeSearchText: ""
    }
  }

  // Will update the search term given the proper event
  updateGradeSearchText = (event) => {
    this.setState({ gradeSearchText: event });
  }

  // Toggles the took button when pressed
  toggleTook = (course) => { 
    this.setState({ 
      classes: this.state.classes.map(item => 
        item.title === course.title ? { ...item, took: !item.took } : item)
    });
  }

  // Driver function that creates the display
  render = () => 
    
      <div>
        <div className='bg-primary text-center m-2'>
          <span class='d-inline-block'>
            <p className='text-white'>Enter in a letter grade:</p>
          </span>
          <span class='d-inline-block'>
            <SearchBar gradeSearchText={ this.state.gradeSearchText } callback={ this.updateGradeSearchText } />
          </span>
        </div>

        <div className='container-fluid px-4 table-responsive'>
          <Table gradeSearchText={ this.state.gradeSearchText } classes={ this.state.classes } callback={this.toggleTook} />
        </div>
      </div>
    
  
}
