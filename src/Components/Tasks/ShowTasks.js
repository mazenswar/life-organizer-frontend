import React from 'react';

const ShowTasks = props => {
  const { days } = props.monthObj;
  const { viewDate } = props.view;
  const dayObj = days.find(obj => obj.number === viewDate);

  const generateTasks = () => {
    return dayObj.tasks.map(task => (
      <li key={task.id}>
        {task.title}: {task.content}
      </li>
    ));
  };

  return <ul>{generateTasks()}</ul>;
};

export default ShowTasks;
