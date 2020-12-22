import { boardApi } from 'api';
import React from 'react';
import { Container } from 'react-bootstrap';
import GeneralPresenter from './GeneralPresenter';

export default class extends React.Component{
    render() {
        return (
            <Container>
            <GeneralPresenter />
            </Container>
        );
    }
}