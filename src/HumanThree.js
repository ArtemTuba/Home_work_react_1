import React from 'react';

class HumanThree extends React.Component{
  constructor(props){
    super(props);
    this.name = 'Stepan';
    this.age = 25;
    this.state = {showHide: true};
  }

  handleClick = () => {
    this.state.showHide ? this.setState({showHide: false}) :  this.setState({showHide: true})
  }

  render(){

    return(
      <div>
        <h2>Задание 3</h2>
        <p>Name: {this.name}, age: {this.age}</p>
        {this.state.showHide ? <button onClick={this.handleClick}>показать</button> : <button onClick={this.handleClick}>скрыть</button>}
      </div>
    )
  }
}

export default HumanThree;
