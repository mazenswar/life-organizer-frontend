import React, { Component } from 'react';
import CalendarAdapter from './CalendarAdapter';
import TaskAdapter from '../Tasks/TaskAdapter';
import CalendarComponents from './index';
import TasksComponents from '../Tasks';
import staticData from '../../staticData';
import { param } from './helpers';

export default class CalendarPage extends Component {
  state = {
    monthObj: {},
    view: {
      viewDate: staticData.currentDay,
      viewMonth: staticData.currentMonth,
      viewYear: staticData.currentYear
    }
  };

  viewState = obj => {
    return {
      viewDate: staticData.currentDay,
      viewYear: obj.year.name,
      viewMonth: obj.name
    };
  };

  componentDidMount() {
    const { viewYear, viewMonth } = this.state.view;
    CalendarAdapter.getMonthData(param(viewYear, viewMonth)).then(monthO =>
      this.setState({
        monthObj: monthO,
        view: {
          ...this.viewState(monthO)
        }
      })
    );
  }

  selectView = dayNo => {
    this.setState({
      view: {
        ...this.state.view,
        viewDate: dayNo
      }
    });
  };

  changeView = obj => {
    switch (obj.type) {
      case 'month':
        CalendarAdapter.getMonthData(
          param(this.state.view.viewYear, obj.payload)
        ).then(monthO =>
          this.setState({
            monthObj: monthO,
            view: {
              ...this.viewState(monthO)
            }
          })
        );
        return;
      case 'day':
        return this.setState({
          view: {
            ...this.state.view,
            viewDate: obj.payload
          }
        });
      default:
        return null;
    }
  };

  handleNewTask = (e, task) => {
    e.preventDefault();
    e.target.reset();
    const day = this.state.monthObj.days.find(
      dayObj => dayObj.number === this.state.view.viewDate
    );
    TaskAdapter.newTaskToDB(day, task).then(month => {
      this.setState({ monthObj: month });
    });
  };

  render() {
    const { monthObj, view } = this.state;
    if (monthObj.name) {
      return (
        <React.Fragment>
          <CalendarComponents.MiniCalendar
            days={monthObj.number_of_days}
            viewObj={view}
            changeView={this.changeView}
          />
          <CalendarComponents.CalendarView {...monthObj} />
          <TasksComponents.ShowTasks
            monthObj={this.state.monthObj}
            view={this.state.view}
          />
          <TasksComponents.NewTaskForm handleNewTask={this.handleNewTask} />
        </React.Fragment>
      );
    }
    return null;
  }
}
