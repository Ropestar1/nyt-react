import React from 'react';
import Link from 'react-router-dom';

import Search from './children/Search';
import Saved from './children/Saved';

import helpers from './utils/helpers';

class Main extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   title: "",
    //   startYear:"",
    //   endYear: "",
    //   results: []
    // };
  }

  // When the page renders.
  componentDidMount() {
    // // Get the latest history.
    // helpers.getHistory().then(function(response) {
    //   console.log(response);
    //   if (response !== this.state.history) {
    //     console.log("History", response.data);
    //     this.setState({ history: response.data });
    //   }
    // }.bind(this));
  }

  // When the component has any changes to it.
  componentDidUpdate () {

    // // Run the query for the address
    // helpers.runQuery(this.state.searchTerm).then(function(data) {
    //   if (data !== this.state.results) {
    //     console.log("Address", data);
    //     this.setState({ results: data });

    //     // After we've received the result... then post the search term to our history.
    //     helpers.postHistory(this.state.searchTerm).then(function() {
    //       console.log("Updated!");

    //       // After we've done the post... then get the updated history
    //       helpers.getHistory().then(function(response) {
    //         console.log("Current History", response.data);

    //         console.log("History", response.data);

    //         this.setState({ history: response.data });

    //       }.bind(this));
    //     }.bind(this));
    //   }
    // }.bind(this));
  }
  // These functions allows childrens to update the parent.
  setTitle(titleInput) {
    this.setState({ title: titleInput });
  }

  setStartYear(startYearInput) {
    this.setState({ startYear: startYearInput });
  }

  setEndYear(endYearInput) {
    this.setState({ endYear: endYearInput });
  }

  setResults(articleResults) {
    this.setState({ results: articleResults });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="jumbotron">
            <h2 className="text-center">New York Times Articles!</h2>
          </div>
          <div className="row">
            <div className="col-md-12">
            	{/*this will drop the correct children????*/}
            	<Search />
            </div>	
          </div>
          <div className="row">
	          <div className="col-md-12">
	            <Saved />
	          </div>
	        </div>
        </div>
      </div>
    );
  }
};

export default Main;