import React, { Component } from 'react';

export default class CalendarView extends Component {
  render() {
    const { name, year } = this.props;
    if (name) {
      return (
        <div>
          <h1>
            {name} {year.name}
          </h1>
        </div>
      );
    }
    return null;
  }
}
