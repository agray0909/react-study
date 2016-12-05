import * as React from 'react';

export default class Header extends React.Component<{}, {}>{
    constructor() {
        super();
        console.log('Header-constructor');
    }
    componentWillMount() {
        console.log('Header-componentWillMount');
    }
    componentDidMount() {
        console.log('Header-componentDidMount');
    }
    componentWillUnmount() {
        console.log('Header-componentWillUnmount');
    }
    render() {
        return (
            <h1> header </h1>
        )
    }
}