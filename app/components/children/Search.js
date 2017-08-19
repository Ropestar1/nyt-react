var React = require("react");
var Link = require("react-router").Link;

var Search = React.createClass({

  // Here we set a generic state associated with the text being searched for
  getInitialState: function() {
    return { 
      title: "",
      start: "",
      end: ""
    };
  },

  handleSubmit: function(event) {
    event.preventDefault();

    this.props.setTerm(this.state.term); //setTerm was defined in parent in earlier examples
    this.setState({
      topic: "",
      start: "",
      end: ""
    });
  },
  // Here we describe this component's render method
  render: function() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center">Article Search</h3>
        </div>
        <div className="panel-body text-center">
          <form /*onSubmit={this.handleSubmit}*/>
            <div className="form-group">
              <h3 className="topic">
                <strong>Topic</strong>
              </h3>

              {/*
                Note how each of the form elements has an id that matches the state.
                This is not necessary but it is convenient.
                Also note how each has an onChange event associated with our handleChange event.
              */}
              <input
                // fix below code
                value={this.state.topic}
                type="text"
                className="form-control text-center"
                id="topic"
                onChange={this.handleChange}
                required
              />
              <h3 className="start-year">
                <strong>Start Year</strong>
              </h3>
              <input
                // fix below code
                value={this.state.start}
                type="text"
                className="form-control text-center"
                id="start"
                /*onChange={this.handleChange}*/
                required
              />
              <h3 className="end-Year">
                <strong>End Year</strong>
              </h3>
              <input
                // fix below code
                value={this.state.end}
                type="text"
                className="form-control text-center"
                id="end"
                onChange={this.handleChange}
                required
              />
              <br />
              <button
                className="btn btn-primary"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = Search;
