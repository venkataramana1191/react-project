import React from 'react';
import unsplash from '../apis/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component{ 
    state = {image:[]}
    onSearchSubmit= async (term) => {
        console.log(term);
        const resp = await unsplash.get('search/photos',{
            params:{query : term},
            });
       
            this.setState({image:resp.data.results})
}
    render(){
    return(
     <div className='ui container' style={{marginTop:'10px' }}>
    <SearchBar onSubmitvalue={this.onSearchSubmit}/>
    < ImageList images={this.state.image}/> 
    </div>
    );
}
}

export default App;