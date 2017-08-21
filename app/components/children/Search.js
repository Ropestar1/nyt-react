import React from "react";
import Link from 'react-router-dom';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      topic: "",
      start: "",
      end: ""
    };
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.setTerm(this.state.term); //setTerm was defined in parent in earlier examples
    this.setState({
      topic: "",
      start: "",
      end: ""
    });
  }

  render() {
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
              <input
                value={this.state.topic}
                type="text"
                className="form-control text-center"
                id="topic"
                // onChange={this.handleChange}
                required
              />
              <h3 className="start-year">
                <strong>Start Year</strong>
              </h3>
              <input
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
                value={this.state.end}
                type="text"
                className="form-control text-center"
                id="end"
                // onChange={this.handleChange}
                required
              />
              <br />
              <button
                className="btn btn-primary"
                type="submit"
                onClick={this.handleSubmit}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
};

export default Search;
