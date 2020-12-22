import React from 'react';
import { Container } from 'react-bootstrap';
import ViewPresenter from './ViewPresenter';

export default class extends React.Component{
    
    render() {
        return (
            <Container>
                <ViewPresenter
                    id={this.props.match.params.id}/>
            </Container>
        );
    }
}