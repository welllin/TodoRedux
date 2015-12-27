import React, { PropTypes, Component } from 'react'

export default class AddItem extends Component {

  handleSubmit(e){
    if(e.keyCode === 13){
      let newItem = this.refs.newItem.value;
      this.refs.newItem.value = '';
      this.props.add(newItem);
    }
  }
  render(){
    return (
      <div>
        <input type="text" ref="newItem" className="form-control" placeholder="New Item" onKeyDown={this.handleSubmit.bind(this)}  />
      </div>
    )
  }
}

AddItem.propTypes = {
  add: PropTypes.func.isRequired
}
