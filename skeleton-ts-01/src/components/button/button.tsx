import * as React from 'react';

interface States {
    Name:'graybb'
}

export default class Input extends React.Component<{}, any>{
    constructor(){
        super();
        //var self=this;
        this.state={
            Name:'gray'
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
    public handleOnChange(event: any):void{
        console.log('Input on change',event);
    }
    
    public render(){
        return (
            <input onChange={ e=> this.handleOnChange(e) }/>
        )
    }
}