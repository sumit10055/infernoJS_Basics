import { Component } from 'inferno';
import TileDOM from './tileDom';
import apiService from '../services/api.service'
import {apiData} from '../handler/api.handler'
import keyHandling from "../utility/keyhandling"

export default class TileLIST extends Component{
    constructor(){
        super();
        this.data =[
            {
                "albumId": 1,
                "id": 1,
                "title": "accusamus beatae ad facilis cum similique qui sunt",
                "url": "http://placehold.it/600/92c952",
                "thumbnailUrl": "http://placehold.it/150/92c952"
            },
            {
                "albumId": 1,
                "id": 2,
                "title": "reprehenderit est deserunt velit ipsam",
                "url": "http://placehold.it/600/771796",
                "thumbnailUrl": "http://placehold.it/150/771796"
            },
            {
                "albumId": 1,
                "id": 3,
                "title": "officia porro iure quia iusto qui ipsa ut modi",
                "url": "http://placehold.it/600/24f355",
                "thumbnailUrl": "http://placehold.it/150/24f355"
            },
            {
                "albumId": 1,
                "id": 4,
                "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
                "url": "http://placehold.it/600/d32776",
                "thumbnailUrl": "http://placehold.it/150/d32776"
            },
            {
                "albumId": 1,
                "id": 5,
                "title": "natus nisi omnis corporis facere molestiae rerum in",
                "url": "http://placehold.it/600/f66b97",
                "thumbnailUrl": "http://placehold.it/150/f66b97"
            },
            {
                "albumId": 1,
                "id": 6,
                "title": "accusamus ea aliquid et amet sequi nemo",
                "url": "http://placehold.it/600/56a8c2",
                "thumbnailUrl": "http://placehold.it/150/56a8c2"
            },
            {
                "albumId": 1,
                "id": 7,
                "title": "officia delectus consequatur vero aut veniam explicabo molestias",
                "url": "http://placehold.it/600/b0f7cc",
                "thumbnailUrl": "http://placehold.it/150/b0f7cc"
            },
            {
                "albumId": 1,
                "id": 8,
                "title": "aut porro officiis laborum odit ea laudantium corporis",
                "url": "http://placehold.it/600/54176f",
                "thumbnailUrl": "http://placehold.it/150/54176f"
            },
            {
                "albumId": 1,
                "id": 9,
                "title": "qui eius qui autem sed",
                "url": "http://placehold.it/600/51aa97",
                "thumbnailUrl": "http://placehold.it/150/51aa97"
            },
            {
                "albumId": 1,
                "id": 10,
                "title": "beatae et provident et ut vel",
                "url": "http://placehold.it/600/810b14",
                "thumbnailUrl": "http://placehold.it/150/810b14"
            }
        ];
        this.state = {
            apiData : []
        };

        apiData().then(resp=>{
            this.setState({
                apiData: resp.data.items
            });
        },error=>{});

    }
    componentDidMount(){
        apiData().then(resp=>{
            console.log('##################################',resp);
        },error=>{});
        // document.getElementById('tile#1').focus();
    }
    render(){
        // console.log('this.state.apidata------',this.state.apiData);
        // let method = () => {
        //    return this.state.apiData.map(item => <li>{item.title}</li>);
        // };
        let _list = this.state.apiData.map((item,i)=>{
            return (
                <div key={i}>
                    <h3>{item.title}</h3>
                    {
                        item.contentList.map((child,j)=>{
                            return (
                                <TileDOM userData={child} index={j}/>
                            )
                        })
                    }
                </div>
            )
        });
        return(
            <div>
                {_list}
            </div>
        );
    }
}