import React from 'react';
import Search from './Search';
import SearchResults from './SearchResults';

class SearchControl extends React.Component {

  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      //state here...
    };
  }

  render(){
    return(
      <React.Fragment>
        <h1>Search for Pet Friendly places in and around your destination!</h1>
        <p>Search box here</p>
        <Search />
        <SearchResults />
      </React.Fragment>
    )
  }

}

export default SearchControl;