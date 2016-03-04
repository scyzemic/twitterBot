import React, { Component } from 'react';

export default class KeyWordInput extends Component {
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
              Keywords: <input
                value={this.state.term}
                onChange={event => { this.onInputChange(event.target.value); }}/>
            </div>
        );
    }
};
