var React = require("react");
var Link = require("react-router").Link;

var Search = require("./children/Search");
var Saved = require("./children/Saved");

var helpers = require("./utils/helpers");


var Main = React.createClass({

	getInitialState: function() {
  	return { 
  		title: "",
  		startYear:"",
  		endYear: "",
  		results: []
  	};
	},

  // The moment the page renders get the History
  componentDidMount: function() {
    // // Get the latest history.
    // helpers.getHistory().then(function(response) {
    //   console.log(response);
    //   if (response !== this.state.history) {
    //     console.log("History", response.data);
    //     this.setState({ history: response.data });
    //   }
    // }.bind(this));
  },

  // If the component changes (i.e. if a search is entered)...
  componentDidUpdate: function() {

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
  },
  // This function allows childrens to update the parent.
  setTitle: function(titleInput) {
    this.setState({ title: titleInput });
  },

  setStartYear: function(startYearInput) {
    this.setState({ startYear: startYearInput });
  },

  setEndYear: function(endYearInput) {
    this.setState({ endYear: endYearInput });
  },

  setResults: function(articleResults) {
    this.setState({ results: articleResults });
  },

  render: function() {
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

});

module.exports = Main;