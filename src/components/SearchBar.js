import React from 'react';


class SearchBar extends React.Component
{
    state={term: ''};
    onInputChange = (e) => {
        this.setState( { term:e.target.value } );
    };
    onFormSubmit = (e) => {
    e.preventDefault();
     this.props.onSubmitvalue(this.state.term);
    };
    // onClickinput(e){
    //     console.log('Clicked on input');
    // }
    render()
    { return (<div className='ui segment'>
                <form className='ui form' onSubmit={this.onFormSubmit}>
                 <div className='feild'>
                 <label>SearchBar</label>
                 <input type='text' 
                 value={this.state.term} 
                 onChange={this.onInputChange}/>
                 </div>
                </form>
             </div>);
    };
}

export default SearchBar;