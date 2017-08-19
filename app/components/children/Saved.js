var React = require("react");
var Link = require("react-router").Link;

var Saved = React.createClass({
  render: function() {
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
});

module.exports = Saved;