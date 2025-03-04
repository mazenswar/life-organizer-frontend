export default {
  currentYear: parseInt(new Date().getFullYear()),
  currentMonth: parseInt(new Date().getMonth() + 1),
  currentDay: parseInt(new Date().getDate()),
  nameOfMonths: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ],
  monthObjects: [
    {
      name: 'January',
      days: 31,
      number: 1
    },
    {
      name: 'February',
      days: 28,
      number: 2
    },
    {
      name: 'March',
      days: 31,
      number: 3
    },
    {
      name: 'April',
      days: 30,
      number: 4
    },
    {
      name: 'May',
      days: 31,
      number: 5
    },
    {
      name: 'June',
      days: 30,
      number: 6
    },
    {
      name: 'July',
      days: 31,
      number: 7
    },
    {
      name: 'August',
      days: 31,
      number: 8
    },
    {
      name: 'September',
      days: 30,
      number: 9
    },
    {
      name: 'October',
      days: 31,
      number: 10
    },
    {
      name: 'November',
      days: 30,
      number: 11
    },
    {
      name: 'December',
      days: 31,
      number: 12
    }
  ]
};
