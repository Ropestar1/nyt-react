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

  render: function() {
    return (
      <div className="container">
        <div className="row">
          <div className="jumbotron">
            <h2 className="text-center">New York Times Articles!</h2>
          </div>
          <div className="col-md-12">
          	{/*this will drop the correct children????*/}
          	
          </div>
          <div className="row">
	          <div className="col-md-12">
	            <Search address={this.state.results} />
	          </div>
	        </div>
        </div>
      </div>
    );
  }

});