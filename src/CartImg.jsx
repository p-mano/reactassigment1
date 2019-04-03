import React ,{Component} from 'react';


export default class CartImg extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div>
                <img src={this.props.img.mediumImage}/>
            </div>
        )
    }
} 