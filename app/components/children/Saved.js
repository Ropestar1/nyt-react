import React from "react";
import Link from 'react-router-dom';

class Saved extends React.Component {
  constructor(props) {
    super(props);
  }

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

  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center">Saved Articles</h3>
        </div>
        <div className="panel-body">

          <div className="panel panel-default">
            <div className="panel-heading">
              <h4>Title:</h4>
              {/*<p>{this.props.title}</p>*/}
            </div>
            <div className="panel-body">
              <h4>Link:</h4>
              {/*<p>{this.props.link}</p>*/}
            </div>
          </div>

        </div>
      </div>
    );
  }
};

export default Saved;