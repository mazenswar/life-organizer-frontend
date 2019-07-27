import React, { Component } from 'react';

export default class NewTaskForm extends Component {
  state = {
    title: '',
    content: ''
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <form onSubmit={e => this.props.handleNewTask(e, this.state)}>
        <input type="text" name="title" onChange={this.handleChange} />
        <input type="text" name="content" onChange={this.handleChange} />
        <input type="submit" />
      </form>
    );
  }
}
