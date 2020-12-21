import React from 'react';
import ViewPresenter from './ViewPresenter';

export default class extends React.Component{
    
    render() {
        return (
            <ViewPresenter
                id={this.props.match.params.id}/>
        );
    }
}