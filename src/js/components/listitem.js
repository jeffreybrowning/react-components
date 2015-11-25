var React = require('react');

var item = {
  'title': 'Beat Jim at Halo',
  'dueDate': '10/27',
  'isRecurring': true,
  'isChecked': false
};

var styles = {
  itemBorder: {
    fontFamily: 'Helvetica',
    backgroundColor: '#3360BA',
    width: 515,
    height: 100,
    color: '#FFF5E3'
  },
  container: {
    padding: 20,
    fontSize: 12
  },
  checkbox: {
    float: 'right'
  },
  title: {
    fontSize: 24,
    borderBottom: '2px  solid #FFF5E3'
  },
  dueBy: {
    paddingTop: 3
  }
};

var listItem = React.createClass({
  getInitialState: function () {
    return item;
  },

  render: function () {
    return (
      <div style={styles.itemBorder} className="item-border">
        <div style={styles.container} className="item-container">
          <div style={styles.title} className="title-container">
            <div>{this.state.title}
              <input style={styles.checkbox} type="checkbox" checked={this.state.isChecked} />
            </div>
          </div>
          <div style={styles.dueBy} className="due-date">Due: {this.state.dueDate}</div>
          <div className="recurring-container">Recurring?
            <input type="checkbox" checked={this.state.isRecurring}  />
          </div>
        </div>
      </div>
    )
  }
});

module.exports = listItem;


