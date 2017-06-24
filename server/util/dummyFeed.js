const now = new Date();
const feed = [
  { date: Date.now(), message_title: 'You add a new transaction', message_body: 'You add an expense transaction on foo.bar' },
  { date: new Date().setTime(now.getTime() + (20 * 60 * 1000)), message_title: 'Adi added a new budget!', message_body: 'Adi add a new budget for movies, it\'s includes food, movies, and dvd categories.' },
  { date: new Date(), message_title: 'Check how can you save 10 shakels each month on food', message_body: 'Just eat less..' },
];

exports.feed = feed;
