import { Component } from 'inferno';
import styles from '../style/tileDOM.css';

export default class TileDOM extends Component{
    constructor(){
        super();
    }
    render(){
        // console.log('dom--------',this.props.userData);
        return(
           <div key={this.props.index} className='tile'>
               <div tabIndex={this.props.index} id={`tile#${this.props.index}`} left={`tile#${this.props.index-1}`}
                  right={`tile#${this.props.index+1}`} href="#">
                   <img src={`https://res.cloudinary.com/uat-main/image/fetch/w_320,h_180,f_webp/${this.props.userData.image}`} alt="image"/>
                   <p>{this.props.userData.title}</p>
               </div>
           </div>
        );
    }
}