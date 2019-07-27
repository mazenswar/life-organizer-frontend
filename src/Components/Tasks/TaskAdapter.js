import { TASKS_URL } from '../../API_CONSTANTS';

const newTaskToDB = (day, task) => {
  return fetch(TASKS_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accepts: 'application/json'
    },
    body: JSON.stringify({ ...task, day_id: day.id })
  }).then(r => r.json());
};

//
export default {
  newTaskToDB: newTaskToDB
};
