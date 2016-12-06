import * as React from 'react';
import objectAssign = require('object-assign');

interface States {
    Name?: string;
    Age?: number;
}

export default class Input extends React.Component<{}, States>{
    constructor(){
        super();
        //this.state.Age=17;
        //this.state.Name='gray';
        this.state={
            Name:'gray',
            Age:12
        };
        console.log('Input state:',this.state);
    }
    componentWillMount() {
        console.log('Input-componentWillMount');
    }
    componentDidMount() {
        console.log('Input-componentDidMount');
    }
    componentWillUnmount() {
        console.log('Input-componentWillUnmount');
    }
    componentWillReceiveProps(){
        console.log('Input-componentWillReceiveProps');
    }
    shouldComponentUpdate(){
        console.log('Input-shouldComponentUpdate');
        return (true);
    }
    componentWillUpdate(){
        console.log('Input-componentWillUpdate');
    }
    componentDidUpdate(){
        console.log('Input-componentDidUpdate');
    }
        // componentWillReceiveProps?(nextProps: P, nextContext: any): void;
        // shouldComponentUpdate?(nextProps: P, nextState: S, nextContext: any): boolean;
        // componentWillUpdate?(nextProps: P, nextState: S, nextContext: any): void;
        // componentDidUpdate?(prevProps: P, prevState: S, prevContext: any): void;

    public handleOnChange(event: any):void{
        console.log('Input on change',event);
        console.log('Input on change - event',event.target.value);
        var newState : States = objectAssign({}, this.state, {Name: 'aa'});
        this.setState(newState,function () {
            console.log('input-setState-callback：' + this.state);
        });
        console.log('Input state:',newState);
    }
    
    public render(){
        console.log('input-render');
        return (
            <input onChange={ e=> this.handleOnChange(e) }/>
        )
    }
}