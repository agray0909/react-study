import * as React from 'react';
import Header from './header/header';
import Button from './button/button';

interface Props extends React.Props<App> {

}

interface States {
    
}

export default class App extends React.Component<Props, States> {
    constructor(props: Props) {
        super(props);
        this.state = {};
        console.log('App-constructor');
    }
    componentWillMount() {
        console.log('App-componentWillMount');
    }
    componentDidMount() {
        console.log('App-componentDidMount');
    }
    componentWillUnmount() {
        console.log('App-componentWillUnmount');
    }
    public render() {
        console.log('App-render()');
        return (
            <div>
                <h1> hello world - 3 </h1>
                <Header />
                <Button />
            </div>
        )
    }
}