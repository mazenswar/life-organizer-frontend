import { MONTHS_URL } from '../../API_CONSTANTS';
// DEFINITIONS
const getMonthData = param =>
  fetch(`${MONTHS_URL}/${param}`).then(r => r.json());
// EXPORT
export default {
  getMonthData
};
