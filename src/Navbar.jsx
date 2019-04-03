import React ,{Component} from 'react';
import CartList from './CartList';

export default class Navbar extends Component{
    constructor(props){
        super(props);    
    }
    render(){
      return(
        <div><nav className="navbar navbar-icon-top navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                <i className="fa fa-home"></i>
                Home
                <span className="sr-only">(current)</span>
                </a>
            </li>
            <CartList 
search={this.handleSearchClick}
/>
          </ul>
          <ul className="navbar-nav ">
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="fa fa-bell">
                  <span className="badge badge-info">{this.props.count}</span>
                 
                </i>
                Cart
              </a>
            </li>
           
          </ul>
         
        </div>
      </nav>
      </div>
        );
    }
} 