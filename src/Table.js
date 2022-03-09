import React, { Component } from 'react';

export class Table extends Component {

    constructor(props) {
        super(props);
        this.state = {}

    }

    // renders a single row
    singleRow = (row) => {

        // determine the color of the title column
        let color = "table-light";
        if ((row.took && (row.grade === '')) || (!row.took && !(row.grade === ''))) {
            color = "table-danger"
        }

        // render a single row
        return (
            <tr key={ row.id }>
                <td>{ row.id }</td>
                <td className={ color }>{ row.title }</td>
                <td>{ row.grade }</td>
                <td>{ row.took ? "True" : "False" }</td>
                <td>
                    <input type="checkbox" checked={ row.took } onChange={ () => this.props.callback(row) } />
                </td>
            </tr>
        )

    }

    // Displays all of the rows
    displayAllRows = () => this.props.classes.map(item => 
        // For all classes render a row
        this.singleRow(item)
  
    );

    // Filters the courses by search term and renders each course as a row
    classRows = () => this.props.classes.filter(t => t.grade === this.props.gradeSearchText).map(item => 
        // For each row with the search term as grade, render the row
        this.singleRow(item)

    );

    render = () => {

        // First determine what rows should be rendered based on the search term
        let rows;
        if (this.props.gradeSearchText === 'all') {
            rows = this.displayAllRows();
        } else if (this.props.gradeSearchText === '') {
        // Intentionally blank
        } else {
            rows = this.classRows();
        }

        return (
            <table className='table table-bordered table-hover'>
                <thead>
                    <tr className='bg-info text-white'>
                        <th>id</th>
                        <th>Title</th>
                        <th>Grade</th>
                        <th>Took</th>
                        <th>Toggle Took</th>
                    </tr>
                </thead>
                <tbody>{ rows }</tbody>
            </table>
        )
    }
}