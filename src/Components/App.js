import React from 'react';
import Youtube, { baseParams } from '../API/Youtube';
import SearchBar from './SearchBar';
import VideoLists from './VideoLists';
import VideoDetail from './VideoDetail';

class App extends React.Component{

    state = {videos: [], selectedVideo: null};

componentDidMount(){
    this.onSearchBarSubmit('News');
}

onSearchBarSubmit = async (term) =>{
        const response = await Youtube.get('/search',{
            params: { 
                ...baseParams,
                q: term
            }
        });

        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        });
    };

onVideoSelect = (video) =>{
        this.setState({ selectedVideo: video})
    }
    


render(){
    return (
    <div className="ui container">
        
        <SearchBar onSubmit={this.onSearchBarSubmit}/>

        {/* found {this.state.videos.length}  //test  */}
        
        <div className="ui grid">
            <div className="ui row">
               <div className="ten wide column">
                    <VideoDetail video={this.state.selectedVideo} /> 
               </div>
               <div className="six wide column">
                    <VideoLists onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
               </div>
            </div>
        </div>
    </div>);
}

}

export default App;