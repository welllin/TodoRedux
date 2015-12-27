import React, { PropTypes, Component } from 'react'

let styles = {
  uList: {
    paddingLeft: 0,
    listStyleType: "none"
  },
  listGroup: {
    margin: '5px 0',
    borderRadius: 5
  },
  removeItem: {
    fontSize: 20,
    float: "left",
    position: "absolute",
    top: 12,
    left: 6,
    cursor: "pointer",
    color: "rgb(222, 79, 79)"
  },
  todoItem: {
    paddingLeft: 20,
    fontSize: 17
  }
};

export default class List extends React.Component {
  constructor(props, context) {
    super(props, context);
  }
  render(){
    let handlelistItems = this.props.items.map((item, index) => {
      return (
        <li key={index} className="list-group-item" style={styles.listGroup}>
          <span
            className="glyphicon glyphicon-remove"
            style={styles.removeItem}
            onClick={this.props.remove.bind(null, index)}>
          </span>
          <span style={styles.todoItem}>
            {item}
          </span>
        </li>
      )
    });
    return (
      <ul style={styles.uList}>
        {handlelistItems}
      </ul>
    )
  }
}

List.propTypes = {
  items: PropTypes.array.isRequired,
  remove: PropTypes.func.isRequired
}
