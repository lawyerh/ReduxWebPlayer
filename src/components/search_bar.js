import React, { Component } from 'react';

class SearchBar extends Component{
    constructor(props){
        super(props);

        this.state = { term: '' };
    }

    render(){
        return  (   
                    <div className={'col-12'}>
                        <div className={'search-bar'}>
                            <input
                            value = {this.state.term}
                            onChange =  {e => this.setState({ term: e.target.value }) } />
                        </div>
                        <div className={'search-button'}>
                            <button 
                            className={'btn btn-sm btn-success'} 
                            onClick={() =>this.props.onSearch(this.state.term)}>Search</button>
                        </div>
                    </div>
                )
    }
}

export default SearchBar;