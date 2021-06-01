import React, { Component } from 'react';
import './App.css';

export default class App extends Component {

constructor(props) {
  super();

  this.state = {
    isClicked: false,
    todos: [],
    text: null
  }

  
  
  //binding
  this.onClickHandler = this.onClickHandler.bind(this)
  this.onChangeHandler = this.onChangeHandler.bind(this);
}
  onClickHandler(event){
    //const clickValue = this.state.isClicked;
    //this.setState({isClicked: !clickValue});

    //get the value 'text' from the state

    //append that value into the todos array
  
  }

  onChangeHandler(event) {
    //console.log(event.target.value);
    const inputValue = event.target.value;
    this.setState({text: inputValue});
  }

  listIteams(event) {
    event = this.state.todos.map((theTodo) =>
      <li>{theTodo}</li>
    )
    this.setState({event})
  }

  render(){
    return (
      <>
      {console.log(this.state.isClicked)}
      <h1>To Do List</h1>
      <input 
        type="text" 
        onChange={this.onChangeHandler}
        />
        
      <button 
        onClick={this.onClickHandler}>
      To Do
      </button>
      {/* Display your todos found in your array */}
      {/*<div>{this.state.text}</div>*/}
      </>
    );
  }
}

