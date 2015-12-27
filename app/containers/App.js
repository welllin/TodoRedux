import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import List from '../components/List';
import AddItem from '../components/AddItem';
import * as TodoActions from '../actions/TodoActions'

class App extends Component {
  render() {
    const { todos, actions } = this.props
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-md-offset-3">
            <h3 className="text-center"> Todo List </h3>
            <AddItem add={actions.addItem}/>
            <List items={todos} remove={actions.removeItem}/>
          </div>
        </div>
      </div>
    )
  }
}

App.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    todos: state.todos
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TodoActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
