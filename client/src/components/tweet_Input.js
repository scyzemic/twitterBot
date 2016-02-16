import React, { Component } from 'react';

export default class TweetInput extends Component {
    constructor(props) {
        super(props);
        this.state = { term: '' };
    }

    onInputChange(term) {
        this.setState({ term });
    }

    render() {
        return (
            <div>
              <input
                 value={this.state.term}
                 onChange={event => { this.onInputChange(event.target.value); }}/>
            </div>
        );
    }
};

