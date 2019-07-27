import React from 'react';
import staticData from '../../staticData';

class MiniCalendar extends React.Component {
  activeDate = dayNo => {
    const { viewObj } = this.props;
    if (viewObj.viewDate === dayNo) {
      return {
        backgroundColor: 'green'
      };
    }
  };

  dataObj = (type, payload) => ({
    type: type,
    payload: payload
  });

  generateDates = () => {
    const { days } = this.props;
    const arr = [];
    for (let i = 1; i <= days; i++) {
      const div = (
        <div
          onClick={() => this.props.changeView(this.dataObj('day', i))}
          style={this.activeDate(i)}
          className="mini-calendar-date"
          key={i}
        >
          {i}
        </div>
      );
      arr.push(div);
    }
    return arr;
  };

  nextMonth = month => {
    const { viewMonth } = this.props.viewObj;
    if (staticData.nameOfMonths.indexOf(viewMonth) + 1 < 12) {
      return staticData.nameOfMonths.indexOf(viewMonth) + 2;
    } else if (staticData.nameOfMonths.indexOf(viewMonth) + 1 === 12) {
      return 12;
    }
  };

  prevMonth = month => {
    const { viewMonth } = this.props.viewObj;
    if (staticData.nameOfMonths.indexOf(viewMonth) === 0) {
      return 1;
    } else if (staticData.nameOfMonths.indexOf(viewMonth) > 0) {
      return staticData.nameOfMonths.indexOf(viewMonth);
    }
  };

  render() {
    const { viewMonth, viewYear } = this.props.viewObj;
    return (
      <React.Fragment>
        <h1>{}</h1>
        <div className="change-date">
          <span
            onClick={() =>
              this.props.changeView(
                this.dataObj('month', this.prevMonth(viewMonth))
              )
            }
          >
            {' '}
            prev{' '}
          </span>
          <h2>
            {viewMonth} {viewYear}
          </h2>
          <span
            onClick={() =>
              this.props.changeView(
                this.dataObj('month', this.nextMonth(viewMonth))
              )
            }
          >
            next
          </span>
        </div>
        <div className="mini-calendar-container">
          <div className="mini-calendar-date-container">
            {this.generateDates()}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default MiniCalendar;
