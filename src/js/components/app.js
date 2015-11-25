var React = require('react');
var Foo = require('./listitem');
var Bar = require('./listtile');

var App = React.createClass({
  render: function () {
    return (
      <div>
        <Foo></Foo>
        <div style={{paddingTop: 20}}></div>
        <Bar></Bar>
      </div>
    )
  }
});

module.exports = App;