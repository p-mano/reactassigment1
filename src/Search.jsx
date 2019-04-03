import React, { Component } from 'react';



export default class Search extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
<div className="container-fluid">
   <input type='text' 
   placeholder='search'
   onChange={(e)=>this.props.searchText(e.target.value)
   }
   className='col-md-4'/>
<button className="btn btn-primary" onClick={()=>this.props.search('i am  here')}>search</button>
</div>
        
    );
}


}


