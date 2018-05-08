import React from 'react'; //import React library
import ReactDOM from 'react-dom'; //import ReactDOM library
import YTSearch from 'youtube-api-search' //import youtube search functionality

import SearchBar from './components/search_bar';
import VideoList from './components/video_list'

const API_KEY = 'AIzaSyCyxFPrnhsxFCQX0mJcvl2KTYN0Myd8HD0';

YTSearch({key: API_KEY, term: 'Avenged Sevenfold'},function(data){
    console.log(data)
});

//Create new components. Components are reusable blocks of code that produce HTML.

class App extends React.Component  //This is a class. 
{
    constructor(props){
        super(props);

        this.state={ videos: [] } // make a state variable to hold videos

        YTSearch({key: API_KEY, term: 'Avenged Sevenfold'}, (videos) => { // make a call to YT to populate videos
            this.setState({videos})
        });
    }
    render(){
        return(
            <div>
                <SearchBar/>
                <VideoList videos={this.state.videos} />
            </div>
        );
    }
};

ReactDOM.render(<App />, document.querySelector('.container')); // .render() needs an instance of a class to render. Passing the entire class itself is not valid.

