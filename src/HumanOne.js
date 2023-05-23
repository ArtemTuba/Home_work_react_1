import React from 'react';

class HumanOne extends React.Component{
  constructor(props){
    super(props);
    this.state = {name: 'Stepan', age: 25};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.setState({name: 'Mykola', age: 30})
  }

  render(){

    return(
      <div>
        <h2>Задание 1</h2>
        <p>Name: {this.state.name}, age: {this.state.age}</p>
        <button onClick={this.handleClick} >Click on me</button>
      </div>
    )
  }
}

export default HumanOne;
