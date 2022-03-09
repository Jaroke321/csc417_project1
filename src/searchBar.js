import React, { Component } from 'react';

export class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = { gradeSearchText: "" }
    }

    // Will update the search term given the proper event
    updateGradeSearchText = (event) => {
        this.props.callback(this.state.gradeSearchText)
        this.setState({ gradeSearchText: event.target.value });
    }

    render = () => 
        <h4 className="bg-primary text-white text-center p-2">
            <input className='form-control' placeholder='Enter A-D or all' maxLength={3} value={ this.props.gradeSearchText } onChange={ this.updateGradeSearchText } />
        </h4>

}