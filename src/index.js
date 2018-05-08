import React from 'react'; //import React library
import ReactDOM from 'react-dom'; //import ReactDOM library
import YTSearch from 'youtube-api-search' //import youtube search functionality

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail'

const API_KEY = 'AIzaSyCyxFPrnhsxFCQX0mJcvl2KTYN0Myd8HD0';



//Create new components. Components are reusable blocks of code that produce HTML.

class App extends React.Component  //This is a class. 
{
    constructor(props){
        super(props);

        this.state={ 
            videos: [],
            selectedVideo: null
         } // make a state variable to hold videos

        this.videoSearch('bunnies');
    }

    videoSearch(term){
        YTSearch({key: API_KEY, term: term}, (videos) => { // make a call to YT to populate videos
            this.setState({ 
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }
    render(){
        return(
            <div className={'row'}>
                <SearchBar onSearch={term => { //update the video search results based on user input
                    this.videoSearch(term);
                }} />
                <div className={'row'}>
                    <VideoDetail video={this.state.selectedVideo} />
                    <VideoList
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})} // onVideoSelect defined in index.js
                    videos={this.state.videos} />
                </div>
            </div>
        );
    }
};

ReactDOM.render(<App />, document.querySelector('.container')); // .render() needs an instance of a class to render. Passing the entire class itself is not valid.

