import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './Search';
import CartList from './CartList';
import Navbar from './Navbar';

export default class App extends Component {
  constructor(){
    super();
    this.state={
      counter:0,
      searchQuery:''
    }
    this.handleSearchClick=this.handleSearchClick.bind(this);
    this.handleRemoveClick=this.handleRemoveClick.bind(this);
    this.handleChange=this.handleChange.bind(this);
  }
  handleSearchClick(){
 
    let currentstate=this.state;
    currentstate.counter++;
    this.setState(currentstate);
  }
  handleRemoveClick(){
    let currentstate=this.state;
    if(currentstate.counter == 0){
        this.setState(currentstate); 
    }else{
      currentstate.counter--;
    this.setState(currentstate);
    }
    
  }
  handleChange(data){
     console.log(data)
     let currentstate=this.state;
     currentstate.searchQuery=data;
     this.setState(currentstate);
  }
  render() {
    return (
      <div className='container' >
      <Navbar count={this.state.counter}/>
           <Search
           searchText={this.handleChange}
           search={this.handleSearchClick}/>
           {/* <label className="badge"> {this.state.counter}</label> */}
           <CartList  search={this.state.searchQuery} add={this.handleSearchClick} remove={this.handleRemoveClick}/>
      </div>
    );
  }
}

