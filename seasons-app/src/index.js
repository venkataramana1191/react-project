import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDiplay from './seasondisply';
import Spinner from './spinner';

class App extends React.Component{
  state = { lat:null,errorMessage:'' };

  
  componentDidMount()
  {
      window.navigator.geolocation.getCurrentPosition(
       position => this.setState({lat: position.coords.latitude}),
        err => this.setState({errorMessage:err.message})
        );
    }
    
    render()
    {
      if (this.state.errorMessage && !this.state.lat)
       { return <div> Error:{this.state.errorMessage} </div>;}
    if (!this.state.errorMessage && this.state.lat)
    {
        return < SeasonDiplay lat ={this.state.lat}/>
     }  
    
    return <Spinner message='please accept location request!'/>;
}
}
    ReactDOM.render( <App />,document.querySelector('#root'));
 