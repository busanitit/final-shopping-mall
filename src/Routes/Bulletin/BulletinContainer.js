import React from 'react';
import { Container } from 'react-bootstrap';
import BulletinPresenter from './BulletinPresenter';

export default class extends React.Component{
    render() {
        return (
            <Container>
                <BulletinPresenter />
            </Container>

        );
    }
}