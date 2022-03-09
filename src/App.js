import React, { Component } from 'react';

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
    this.setState({ gradeSearchText: event.target.value });
  }

  // Toggles the took button when pressed
  toggleTook = (course) => { 
    this.setState({ 
      classes: this.state.classes.map(item => 
        item.title === course.title ? { ...item, took: !item.took } : item)
    });
  }

  // renders a single row
  singleRow = (row) => {

    // determine the color of the title column
    let color = "text-dark";
    if ((row.took && (row.grade === '')) || (!row.took && !(row.grade === ''))) {
      color = "text-danger"
    }

    // render a single row
    return (
        <tr key={ row.id }>
        <td>{ row.id }</td>
        <td className={ color }>{ row.title }</td>
        <td>{ row.grade }</td>
        <td>{ row.took ? "True" : "False" }</td>
        <td>
          <input type="checkbox" checked={ row.took } onChange={ () => this.toggleTook(row) } />
        </td>
      </tr>
    )

  }

  // Filters the courses by search term and renders each course as a row
  classRows = () => this.state.classes.filter(t => t.grade === this.state.gradeSearchText).map(item => 
    // For each row with the search term as grade, render the row
    this.singleRow(item)

  );

  // Displays all of the rows
  displayAllRows = () => this.state.classes.map(item => 
    // For all classes render a row
    this.singleRow(item)
  
  );

  // Driver function that creates the display
  render = () => {

    // First determine what rows should be rendered based on the search term
    let rows;
    if (this.state.gradeSearchText === 'all') {
      rows = this.displayAllRows();
    } else if (this.state.gradeSearchText === '') {
      // Intentionally blank
    } else {
      rows = this.classRows();
    }

    // Create the HTML with the correct rows determined above
    return (
      <div>
        <h4 className="bg-primary text-white text-center p-2">
          <input className='form-control' placeholder='Enter A-D or all' maxLength={3} value={ this.state.gradeSearchText } onChange={ this.updateGradeSearchText } />
        </h4>
        <div className='container-fluid'>
          <table className='table table-striped table-bordered'>
            <thead>
              <tr className='bg-info text-white'>
                <th>
                  id
                </th>
                <th>
                  Title
                </th>
                <th>
                  Grade
                </th>
                <th>
                  Took
                </th>
                <th>Toggle Took</th>
              </tr>
            </thead>
            <tbody>{ rows }</tbody>
          </table>
        </div>
      </div>
    )
  }
}
