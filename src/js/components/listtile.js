var React = require('react');

var tile = {
  'header': 'Groceries',
  'taskCount': 10,
  'createdDate': '10/25',
  'sharedWith': ['John'],
  'backgroundColor': '#7499E3',
  'color': '#FFF5E3'
};

var styles = {
  tileBorder: {
    backgroundColor: tile.backgroundColor,
    fontFamily: 'Helvetica',
    width: 265,
    height: 300,
    color: '#FFF5E3'
  },
  centeredContainer: {
    width: '100%',
    paddingTop: 100,
    textAlign: 'center'
  },
  header: {
    fontSize: 48,
    textShadow: '1px 2px 2px rgba(100, 100, 100, 1)',
    color: tile.color
  },
  middleContainer: {
    paddingBottom: 100,
    borderBottom: '2px solid #FFF5E3'
  },
  sharedWith: {
    color: '#FFCF74'
  },
  footer: {
    paddingTop: 5,
    fontSize: 13
  },
  taskCount: {
    color: '#FFB831'
  }
};

var listTile = React.createClass({
  getInitialState: function () {
    return tile;
  },

  render: function () {
    return (
      <div style={styles.tileBorder} className="tile-border">
        <div style={styles.centeredContainer} className="center-container">
          <div style={styles.middleContainer} className="middle-container">
            <div style={styles.header} className="header">{this.state.header}</div>
            <div style={styles.taskCount} className="task-count">{this.state.taskCount} unread tasks</div>
          </div>
          <div style={styles.footer} className="footer">
            <div class="footer-content">Shared with <span style={styles.sharedWith}>{this.state.sharedWith}</span> : Created on {this.state.createdDate}</div>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = listTile;