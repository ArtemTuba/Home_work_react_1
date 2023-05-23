import React from 'react';

class HumanTwo extends React.Component{
  constructor(props){
    super(props);
    this.state = {name: 'Stepan', age: 25, isVisible: true};
  }

  handleClick = () => {
    this.state.isVisible ? this.setState({isVisible: false}) :  this.setState({isVisible: true})
  }

  render(){

    return(
      <div>
        <h2>Задание 2</h2>
        {this.state.isVisible && <p>Name: {this.state.name}, age: {this.state.age}</p>} 
        <button onClick={this.handleClick} >Click on me</button>
      </div>
    )
  }
}

export default HumanTwo;
