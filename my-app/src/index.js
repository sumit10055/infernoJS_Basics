import { render, Component } from 'inferno';
import TileLIST from './components/tileList';
import style from './style/index.css'

class App extends Component {
     constructor(){
        super();
        this.message = "Welcome to Hotstar TV Demo !!!";
    }
    render() {
        return (
            <div className='container'>
            <h1>{this.message}</h1>
                <TileLIST/>
            </div>
        );
    };
}
render(<App />, document.getElementById('app'));