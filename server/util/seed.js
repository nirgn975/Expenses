const Transaction = require('../api/transaction/transactionModel');
const Category = require('../api/category/categoryModel');
const Budget = require('../api/budget/budgetModel');
const User = require('../api/user/userModel');
const _ = require('lodash');
const logger = require('./logger');

logger.log(['Seeding the Database']);

const now = new Date();
const transactions = [
  { amount: 23, date: Date.now(), type: 'expense', coordinates: [21, 22], description: 'description foo bar 1' },
  { amount: 54, date: new Date().setTime(now.getTime() + (20 * 60 * 1000)), type: 'income', coordinates: [21, 42], description: 'description foo bar 2' },
  { amount: 76, date: Date.now(), type: 'expense', coordinates: [15, 12], description: 'description foo bar 3' },
  { amount: 1009, date: Date.now(), type: 'income', coordinates: [-23, 76], description: 'description foo bar 4' },
  { amount: 54, date: new Date(now.getFullYear(), now.getMonth() + 2, 1), type: 'income', coordinates: [41, -17], description: 'description foo bar 5' },
  { amount: 37, date: new Date(now.getFullYear(), now.getMonth() + 2, 1), type: 'expense', coordinates: [-101, 92], description: 'description foo bar 6' },
  { amount: 258, date: Date.now(), type: 'income', coordinates: [56, 2], description: 'description foo bar 7' },
  { amount: 10, date: new Date(now.getFullYear(), now.getMonth() + 2, 1), type: 'expense', coordinates: [-71, -13], description: 'description foo bar 8' },
  { amount: 7, date: new Date(now.getFullYear(), now.getMonth() + 2, 1), type: 'expense', coordinates: [-71, -13], description: 'description foo bar 9' },
  { amount: 5, date: Date.now(), type: 'expense', coordinates: [-71, -13], description: 'description foo bar 10' },
  { amount: 4.5, date: new Date().setTime(now.getTime() + (60 * 60 * 1000)), type: 'expense', coordinates: [-71, -13], description: 'description foo bar 11' },
  { amount: 7000, date: new Date(now.getFullYear(), now.getMonth() + 2, 1), type: 'income', coordinates: [-71, -13], description: 'description foo bar 12' },
  { amount: 5, date: new Date(now.getFullYear(), now.getMonth() + 2, 1), type: 'expense', coordinates: [-71, -12], description: 'description foo bar 13' },
  { amount: 3, date: new Date(now.getFullYear(), now.getMonth() + 2, 1), type: 'expense', coordinates: [-71, -14], description: 'description foo bar 14' },
  { amount: 2, date: new Date(now.getFullYear(), now.getMonth() + 2, 1), type: 'expense', coordinates: [-71, -15], description: 'description foo bar 15' },
  { amount: 44, date: new Date(now.getFullYear(), now.getMonth() + 2, 1), type: 'expense', coordinates: [-72, -15], description: 'description foo bar 16' },
  { amount: 23, date: new Date(now.getFullYear(), now.getMonth() + 2, 1), type: 'expense', coordinates: [-73, -15], description: 'description foo bar 17' },
  { amount: 17, date: new Date(now.getFullYear(), now.getMonth() + 2, 1), type: 'expense', coordinates: [-74, -15], description: 'description foo bar 18' },
  { amount: 62, date: new Date(now.getFullYear(), now.getMonth() + 2, 1), type: 'expense', coordinates: [-75, -15], description: 'description foo bar 19' },
  { amount: 9, date: new Date(now.getFullYear(), now.getMonth() + 2, 1), type: 'expense', coordinates: [-76, -15], description: 'description foo bar 20' },
  { amount: 11, date: Date.now(), type: 'expense', coordinates: [-77, -15], description: 'description foo bar 21' },
  { amount: 24.2, date: Date.now(), type: 'expense', coordinates: [-78, -15], description: 'description foo bar 22' },
  { amount: 12.5, date: new Date().setTime(now.getTime() + (2 * 60 * 60 * 1000)), type: 'expense', coordinates: [-79, -15], description: 'description foo bar 23' },
  { amount: 9.1, date: Date.now(), type: 'expense', coordinates: [-80, -15], description: 'description foo bar 24' },
  { amount: 99.9, date: Date.now(), type: 'expense', coordinates: [-77, -16], description: 'description foo bar 25' },
  { amount: 14, date: new Date().setTime(now.getTime() + (3 * 60 * 60 * 1000)), type: 'expense', coordinates: [-77, -17], description: 'description foo bar 26' },
  { amount: 76, date: Date.now(), type: 'expense', coordinates: [-77, -18], description: 'description foo bar 27' },
  { amount: 1.4, date: Date.now(), type: 'expense', coordinates: [-77, -19], description: 'description foo bar 28' },
  { amount: 43.2, date: new Date().setTime(now.getTime() + (2 * 60 * 60 * 1000)), type: 'expense', coordinates: [-77, -20], description: 'description foo bar 29' },
  { amount: 78.6, date: Date.now(), type: 'expense', coordinates: [-77, -21], description: 'description foo bar 30' },
  { amount: 11.78, date: Date.now(), type: 'expense', coordinates: [-74, -12], description: 'description foo bar 31' },
  { amount: 1.73, date: new Date().setTime(now.getTime() + (3 * 60 * 60 * 1000)), type: 'expense', coordinates: [-75, -12], description: 'description foo bar 32' },
  { amount: 4, date: Date.now(), type: 'expense', coordinates: [-77, -12], description: 'description foo bar 33' },
  { amount: 4.4, date: Date.now(), type: 'expense', coordinates: [-78, -12], description: 'description foo bar 34' },
  { amount: 34, date: new Date().setTime(now.getTime() + (4 * 60 * 60 * 1000)), type: 'expense', coordinates: [-79, -12], description: 'description foo bar 35' },
  { amount: 56.4, date: Date.now(), type: 'expense', coordinates: [-80, -12], description: 'description foo bar 36' },
  { amount: 5.6, date: Date.now(), type: 'expense', coordinates: [-77, -11], description: 'description foo bar 37' },
  { amount: 7.2, date: new Date().setTime(now.getTime() + (5 * 60 * 60 * 1000)), type: 'expense', coordinates: [-77, -10], description: 'description foo bar 38' },
  { amount: 81.9, date: Date.now(), type: 'expense', coordinates: [-65, -19], description: 'description foo bar 39' },
  { amount: 6, date: Date.now(), type: 'expense', coordinates: [-66, -12], description: 'description foo bar 40' },
  { amount: 23, date: new Date().setTime(now.getTime() + (12 * 60 * 60 * 1000)), type: 'expense', coordinates: [21, 22], description: 'description foo bar 41' },
  { amount: 54, date: Date.now(), type: 'income', coordinates: [21, 42], description: 'description foo bar 42' },
  { amount: 76, date: Date.now(), type: 'expense', coordinates: [15, 12], description: 'description foo bar 43' },
  { amount: 1009, date: new Date().setTime(now.getTime() + (1 * 24 * 60 * 60 * 1000)), type: 'income', coordinates: [-23, 76], description: 'description foo bar 44' },
  { amount: 54, date: new Date(now.getFullYear(), now.getMonth() + 2, 1), type: 'income', coordinates: [41, -17], description: 'description foo bar 45' },
  { amount: 37, date: new Date(now.getFullYear(), now.getMonth() + 2, 1), type: 'expense', coordinates: [-101, 92], description: 'description foo bar 46' },
  { amount: 258, date: new Date().setTime(now.getTime() + (2 * 24 * 60 * 60 * 1000)), type: 'income', coordinates: [56, 2], description: 'description foo bar 47' },
  { amount: 10, date: new Date(now.getFullYear(), now.getMonth() + 2, 1), type: 'expense', coordinates: [-71, -13], description: 'description foo bar 48' },
  { amount: 7, date: new Date(now.getFullYear(), now.getMonth() + 2, 1), type: 'expense', coordinates: [-71, -13], description: 'description foo bar 49' },
  { amount: 5, date: new Date().setTime(now.getTime() + (6 * 24 * 60 * 60 * 1000)), type: 'expense', coordinates: [-71, -13], description: 'description foo bar 50' },
  { amount: 4.5, date: Date.now(), type: 'expense', coordinates: [-71, -13], description: 'description foo bar 51' },
  { amount: 7000, date: new Date(now.getFullYear(), now.getMonth() + 2, 1), type: 'income', coordinates: [-71, -13], description: 'description foo bar 52' },
  { amount: 5, date: new Date(now.getFullYear(), now.getMonth() + 2, 1), type: 'expense', coordinates: [-71, -12], description: 'description foo bar 53' },
  { amount: 3, date: new Date(now.getFullYear(), now.getMonth() + 2, 1), type: 'expense', coordinates: [-71, -14], description: 'description foo bar 54' },
  { amount: 2, date: new Date(now.getFullYear(), now.getMonth() + 2, 1), type: 'expense', coordinates: [-71, -15], description: 'description foo bar 55' },
  { amount: 44, date: new Date(now.getFullYear(), now.getMonth() + 2, 1), type: 'expense', coordinates: [-72, -15], description: 'description foo bar 56' },
  { amount: 23, date: new Date(now.getFullYear(), now.getMonth() + 2, 1), type: 'expense', coordinates: [-73, -15], description: 'description foo bar 57' },
  { amount: 17, date: new Date(now.getFullYear(), now.getMonth() + 2, 1), type: 'expense', coordinates: [-74, -15], description: 'description foo bar 58' },
  { amount: 62, date: new Date(now.getFullYear(), now.getMonth() + 2, 1), type: 'expense', coordinates: [-75, -15], description: 'description foo bar 59' },
  { amount: 9, date: new Date(now.getFullYear(), now.getMonth() + 2, 1), type: 'expense', coordinates: [-76, -15], description: 'description foo bar 60' },
  { amount: 11, date: Date.now(), type: 'expense', coordinates: [-77, -15], description: 'description foo bar 61' },
  { amount: 24.2, date: new Date().setTime(now.getTime() + (7 * 24 * 60 * 60 * 1000)), type: 'expense', coordinates: [-78, -15], description: 'description foo bar 62' },
  { amount: 12.5, date: Date.now(), type: 'expense', coordinates: [-79, -15], description: 'description foo bar 63' },
  { amount: 9.1, date: Date.now(), type: 'expense', coordinates: [-80, -15], description: 'description foo bar 64' },
  { amount: 99.9, date: new Date().setTime(now.getTime() + (2 * 7 * 24 * 60 * 60 * 1000)), type: 'expense', coordinates: [-77, -16], description: 'description foo bar 65' },
  { amount: 14, date: Date.now(), type: 'expense', coordinates: [-77, -17], description: 'description foo bar 66' },
  { amount: 76, date: Date.now(), type: 'expense', coordinates: [-77, -18], description: 'description foo bar 67' },
  { amount: 1.4, date: new Date().setTime(now.getTime() + (3 * 7 * 24 * 60 * 60 * 1000)), type: 'expense', coordinates: [-77, -19], description: 'description foo bar 68' },
  { amount: 43.2, date: Date.now(), type: 'expense', coordinates: [-77, -20], description: 'description foo bar 69' },
  { amount: 78.6, date: Date.now(), type: 'expense', coordinates: [-77, -21], description: 'description foo bar 70' },
  { amount: 11.78, date: new Date().setTime(now.getTime() + (5 * 7 * 24 * 60 * 60 * 1000)), type: 'expense', coordinates: [-74, -12], description: 'description foo bar 71' },
  { amount: 1.73, date: Date.now(), type: 'expense', coordinates: [-75, -12], description: 'description foo bar 72' },
  { amount: 4, date: Date.now(), type: 'expense', coordinates: [-77, -12], description: 'description foo bar 73' },
  { amount: 4.4, date: new Date().setTime(now.getTime() - (24 * 60 * 60 * 1000)), type: 'expense', coordinates: [-78, -12], description: 'description foo bar 74' },
  { amount: 34, date: Date.now(), type: 'expense', coordinates: [-79, -12], description: 'description foo bar 75' },
  { amount: 56.4, date: Date.now(), type: 'expense', coordinates: [-80, -12], description: 'description foo bar 76' },
  { amount: 5.6, date: new Date().setTime(now.getTime() - (5 * 60 * 60 * 1000)), type: 'expense', coordinates: [-77, -11], description: 'description foo bar 77' },
  { amount: 7.2, date: Date.now(), type: 'expense', coordinates: [-77, -10], description: 'description foo bar 78' },
  { amount: 81.9, date: Date.now(), type: 'expense', coordinates: [-65, -19], description: 'description foo bar 79' },
  { amount: 6, date: new Date().setTime(now.getTime() - (1 * 60 * 60 * 1000)), type: 'expense', coordinates: [-66, -12], description: 'description foo bar 80' },
  { amount: 23, date: Date.now(), type: 'expense', coordinates: [21, 22], description: 'description foo bar 81' },
  { amount: 54, date: Date.now(), type: 'income', coordinates: [21, 42], description: 'description foo bar 82' },
  { amount: 76, date: new Date().setTime(now.getTime() - (20 * 60 * 1000)), type: 'expense', coordinates: [15, 12], description: 'description foo bar 83' },
  { amount: 1009, date: Date.now(), type: 'income', coordinates: [-23, 76], description: 'description foo bar 84' },
  { amount: 54, date: new Date(now.getFullYear(), now.getMonth() + 2, 1), type: 'income', coordinates: [41, -17], description: 'description foo bar 85' },
  { amount: 37, date: new Date(now.getFullYear(), now.getMonth() + 2, 1), type: 'expense', coordinates: [-101, 92], description: 'description foo bar 86' },
  { amount: 258, date: Date.now(), type: 'income', coordinates: [56, 2], description: 'description foo bar 87' },
  { amount: 10, date: new Date(now.getFullYear(), now.getMonth() + 2, 1), type: 'expense', coordinates: [-71, -13], description: 'description foo bar 88' },
  { amount: 7, date: new Date(now.getFullYear(), now.getMonth() + 2, 1), type: 'expense', coordinates: [-71, -13], description: 'description foo bar 89' },
  { amount: 5, date: Date.now(), type: 'expense', coordinates: [-71, -13], description: 'description foo bar 90' },
  { amount: 4.5, date: Date.now(), type: 'expense', coordinates: [-71, -13], description: 'description foo bar 91' },
  { amount: 7000, date: new Date(now.getFullYear(), now.getMonth() + 2, 1), type: 'income', coordinates: [-71, -13], description: 'description foo bar 92' },
  { amount: 5, date: new Date(now.getFullYear(), now.getMonth() + 2, 1), type: 'expense', coordinates: [-71, -12], description: 'description foo bar 93' },
  { amount: 3, date: new Date(now.getFullYear(), now.getMonth() + 2, 1), type: 'expense', coordinates: [-71, -14], description: 'description foo bar 94' },
  { amount: 2, date: new Date(now.getFullYear(), now.getMonth() + 3, 1), type: 'expense', coordinates: [-71, -15], description: 'description foo bar 95' },
  { amount: 44, date: new Date(now.getFullYear(), now.getMonth() + 3, 1), type: 'expense', coordinates: [-72, -15], description: 'description foo bar 96' },
  { amount: 23, date: new Date(now.getFullYear(), now.getMonth() + 3, 1), type: 'expense', coordinates: [-73, -15], description: 'description foo bar 97' },
  { amount: 17, date: new Date(now.getFullYear(), now.getMonth() + 3, 1), type: 'expense', coordinates: [-74, -15], description: 'description foo bar 98' },
  { amount: 62, date: new Date(now.getFullYear(), now.getMonth() + 3, 1), type: 'expense', coordinates: [-75, -15], description: 'description foo bar 99' },
  { amount: 9, date: new Date(now.getFullYear(), now.getMonth() + 3, 1), type: 'expense', coordinates: [-76, -15], description: 'description foo bar 100' },
  { amount: 11, date: new Date(now.getFullYear(), now.getMonth() + 3, 1), type: 'expense', coordinates: [-77, -15], description: 'description foo bar 101' },
  { amount: 24.2, date: new Date(now.getFullYear(), now.getMonth() + 3, 1), type: 'expense', coordinates: [-78, -15], description: 'description foo bar 102' },
  { amount: 12.5, date: new Date(now.getFullYear(), now.getMonth() + 3, 1), type: 'expense', coordinates: [-79, -15], description: 'description foo bar 103' },
  { amount: 9.1, date: new Date(now.getFullYear(), now.getMonth() + 3, 1), type: 'expense', coordinates: [-80, -15], description: 'description foo bar 104' },
  { amount: 99.9, date: new Date(now.getFullYear(), now.getMonth() + 3, 1), type: 'expense', coordinates: [-77, -16], description: 'description foo bar 105' },
  { amount: 14, date: new Date(now.getFullYear(), now.getMonth() + 3, 1), type: 'expense', coordinates: [-77, -17], description: 'description foo bar 106' },
  { amount: 76, date: new Date(now.getFullYear(), now.getMonth() + 3, 1), type: 'expense', coordinates: [-77, -18], description: 'description foo bar 107' },
  { amount: 1.4, date: new Date(now.getFullYear(), now.getMonth() + 3, 1), type: 'expense', coordinates: [-77, -19], description: 'description foo bar 108' },
  { amount: 43.2, date: new Date(now.getFullYear(), now.getMonth() + 3, 1), type: 'expense', coordinates: [-77, -20], description: 'description foo bar 109' },
  { amount: 78.6, date: new Date(now.getFullYear(), now.getMonth() + 3, 1), type: 'expense', coordinates: [-77, -21], description: 'description foo bar 110' },
  { amount: 11.78, date: new Date(now.getFullYear(), now.getMonth() + 3, 1), type: 'expense', coordinates: [-74, -12], description: 'description foo bar 111' },
  { amount: 1.73, date: new Date(now.getFullYear(), now.getMonth() + 3, 1), type: 'expense', coordinates: [-75, -12], description: 'description foo bar 112' },
  { amount: 4, date: new Date(now.getFullYear(), now.getMonth() + 3, 1), type: 'expense', coordinates: [-77, -12], description: 'description foo bar 113' },
  { amount: 4.4, date: new Date(now.getFullYear(), now.getMonth() + 3, 1), type: 'expense', coordinates: [-78, -12], description: 'description foo bar 114' },
  { amount: 34, date: new Date(now.getFullYear(), now.getMonth() + 3, 1), type: 'expense', coordinates: [-79, -12], description: 'description foo bar 115' },
  { amount: 56.4, date: new Date(now.getFullYear(), now.getMonth() + 3, 1), type: 'expense', coordinates: [-80, -12], description: 'description foo bar 116' },
  { amount: 5.6, date: new Date(now.getFullYear(), now.getMonth() + 3, 1), type: 'expense', coordinates: [-77, -11], description: 'description foo bar 117' },
  { amount: 7.2, date: new Date(now.getFullYear(), now.getMonth() + 3, 1), type: 'expense', coordinates: [-77, -10], description: 'description foo bar 118' },
  { amount: 81.9, date: new Date(now.getFullYear(), now.getMonth() + 3, 1), type: 'expense', coordinates: [-65, -19], description: 'description foo bar 119' },
  { amount: 6, date: new Date(now.getFullYear(), now.getMonth() + 3, 1), type: 'expense', coordinates: [-66, -12], description: 'description foo bar 120' },
  { amount: 11, date: new Date(now.getFullYear(), now.getMonth() + 3, 1), type: 'expense', coordinates: [-77, -15], description: 'description foo bar 121' },
  { amount: 24.2, date: new Date(now.getFullYear(), now.getMonth() + 3, 1), type: 'expense', coordinates: [-78, -15], description: 'description foo bar 122' },
  { amount: 12.5, date: new Date(now.getFullYear(), now.getMonth() + 3, 1), type: 'expense', coordinates: [-79, -15], description: 'description foo bar 123' },
  { amount: 9.1, date: new Date(now.getFullYear(), now.getMonth() + 4, 1), type: 'expense', coordinates: [-80, -15], description: 'description foo bar 124' },
  { amount: 99.9, date: new Date(now.getFullYear(), now.getMonth() + 4, 1), type: 'expense', coordinates: [-77, -16], description: 'description foo bar 125' },
  { amount: 14, date: new Date(now.getFullYear(), now.getMonth() + 4, 1), type: 'expense', coordinates: [-77, -17], description: 'description foo bar 126' },
  { amount: 76, date: new Date(now.getFullYear(), now.getMonth() + 4, 1), type: 'expense', coordinates: [-77, -18], description: 'description foo bar 127' },
  { amount: 1.4, date: new Date(now.getFullYear(), now.getMonth() + 4, 1), type: 'expense', coordinates: [-77, -19], description: 'description foo bar 128' },
  { amount: 43.2, date: new Date(now.getFullYear(), now.getMonth() + 4, 1), type: 'expense', coordinates: [-77, -20], description: 'description foo bar 129' },
  { amount: 78.6, date: new Date(now.getFullYear(), now.getMonth() + 4, 1), type: 'expense', coordinates: [-77, -21], description: 'description foo bar 130' },
  { amount: 11.78, date: new Date(now.getFullYear(), now.getMonth() + 3, 1), type: 'expense', coordinates: [-74, -12], description: 'description foo bar 131' },
  { amount: 1.73, date: new Date(now.getFullYear(), now.getMonth() + 3, 1), type: 'expense', coordinates: [-75, -12], description: 'description foo bar 132' },
  { amount: 4, date: new Date(now.getFullYear(), now.getMonth() + 4, 1), type: 'expense', coordinates: [-77, -12], description: 'description foo bar 133' },
  { amount: 4.4, date: new Date(now.getFullYear(), now.getMonth() + 3, 1), type: 'expense', coordinates: [-78, -12], description: 'description foo bar 134' },
  { amount: 34, date: new Date(now.getFullYear(), now.getMonth() + 4, 1), type: 'expense', coordinates: [-79, -12], description: 'description foo bar 135' },
  { amount: 56.4, date: new Date(now.getFullYear(), now.getMonth() + 4, 1), type: 'expense', coordinates: [-80, -12], description: 'description foo bar 136' },
  { amount: 5.6, date: new Date(now.getFullYear(), now.getMonth() + 4, 1), type: 'expense', coordinates: [-77, -11], description: 'description foo bar 137' },
  { amount: 7.2, date: new Date(now.getFullYear(), now.getMonth() + 3, 1), type: 'expense', coordinates: [-77, -10], description: 'description foo bar 138' },
  { amount: 81.9, date: new Date(now.getFullYear(), now.getMonth() + 4, 1), type: 'expense', coordinates: [-65, -19], description: 'description foo bar 139' },
  { amount: 6, date: new Date(now.getFullYear(), now.getMonth() + 4, 1), type: 'expense', coordinates: [-66, -12], description: 'description foo bar 140' },
  { amount: 11, date: new Date(now.getFullYear(), now.getMonth() + 4, 1), type: 'expense', coordinates: [-77, -15], description: 'description foo bar 141' },
  { amount: 24.2, date: new Date(now.getFullYear(), now.getMonth() + 5, 1), type: 'expense', coordinates: [-78, -15], description: 'description foo bar 142' },
  { amount: 12.5, date: new Date(now.getFullYear(), now.getMonth() + 5, 1), type: 'expense', coordinates: [-79, -15], description: 'description foo bar 143' },
  { amount: 9.1, date: new Date(now.getFullYear(), now.getMonth() + 5, 1), type: 'expense', coordinates: [-80, -15], description: 'description foo bar 144' },
  { amount: 99.9, date: new Date(now.getFullYear(), now.getMonth() + 5, 1), type: 'expense', coordinates: [-77, -16], description: 'description foo bar 145' },
  { amount: 14, date: new Date(now.getFullYear(), now.getMonth() + 5, 1), type: 'expense', coordinates: [-77, -17], description: 'description foo bar 146' },
  { amount: 76, date: new Date(now.getFullYear(), now.getMonth() + 5, 1), type: 'expense', coordinates: [-77, -18], description: 'description foo bar 147' },
  { amount: 1.4, date: new Date(now.getFullYear(), now.getMonth() + 5, 1), type: 'expense', coordinates: [-77, -19], description: 'description foo bar 148' },
  { amount: 43.2, date: new Date(now.getFullYear(), now.getMonth() + 5, 1), type: 'expense', coordinates: [-77, -20], description: 'description foo bar 149' },
  { amount: 78.6, date: new Date(now.getFullYear(), now.getMonth() + 5, 1), type: 'expense', coordinates: [-77, -21], description: 'description foo bar 150' },
  { amount: 11.78, date: new Date(now.getFullYear(), now.getMonth() + 5, 1), type: 'expense', coordinates: [-74, -12], description: 'description foo bar 151' },
  { amount: 1.73, date: new Date(now.getFullYear(), now.getMonth() + 5, 1), type: 'expense', coordinates: [-75, -12], description: 'description foo bar 152' },
  { amount: 4, date: new Date(now.getFullYear(), now.getMonth() + 5, 1), type: 'expense', coordinates: [-77, -12], description: 'description foo bar 153' },
  { amount: 4.4, date: new Date(now.getFullYear(), now.getMonth() + 6, 1), type: 'expense', coordinates: [-78, -12], description: 'description foo bar 154' },
  { amount: 34, date: new Date(now.getFullYear(), now.getMonth() + 4, 1), type: 'expense', coordinates: [-79, -12], description: 'description foo bar 155' },
  { amount: 56.4, date: new Date(now.getFullYear(), now.getMonth() + 4, 1), type: 'expense', coordinates: [-80, -12], description: 'description foo bar 156' },
  { amount: 5.6, date: new Date(now.getFullYear(), now.getMonth() + 4, 1), type: 'expense', coordinates: [-77, -11], description: 'description foo bar 157' },
  { amount: 7.2, date: new Date(now.getFullYear(), now.getMonth() + 6, 1), type: 'expense', coordinates: [-77, -10], description: 'description foo bar 158' },
  { amount: 81.9, date: new Date(now.getFullYear(), now.getMonth() + 4, 1), type: 'expense', coordinates: [-65, -19], description: 'description foo bar 159' },
  { amount: 6, date: new Date(now.getFullYear(), now.getMonth() + 4, 1), type: 'expense', coordinates: [-66, -12], description: 'description foo bar 160' },
  { amount: 11, date: new Date(now.getFullYear(), now.getMonth() + 5, 1), type: 'expense', coordinates: [-77, -15], description: 'description foo bar 161' },
  { amount: 24.2, date: new Date(now.getFullYear(), now.getMonth() + 5, 1), type: 'expense', coordinates: [-78, -15], description: 'description foo bar 162' },
  { amount: 12.5, date: new Date(now.getFullYear(), now.getMonth() + 5, 1), type: 'expense', coordinates: [-79, -15], description: 'description foo bar 163' },
  { amount: 9.1, date: new Date(now.getFullYear(), now.getMonth() + 5, 1), type: 'expense', coordinates: [-80, -15], description: 'description foo bar 164' },
  { amount: 99.9, date: new Date(now.getFullYear(), now.getMonth() + 5, 1), type: 'expense', coordinates: [-77, -16], description: 'description foo bar 165' },
  { amount: 14, date: new Date(now.getFullYear(), now.getMonth() + 5, 1), type: 'expense', coordinates: [-77, -17], description: 'description foo bar 166' },
  { amount: 76, date: new Date(now.getFullYear(), now.getMonth() + 5, 1), type: 'expense', coordinates: [-77, -18], description: 'description foo bar 167' },
  { amount: 1.4, date: new Date(now.getFullYear(), now.getMonth() + 6, 1), type: 'expense', coordinates: [-77, -19], description: 'description foo bar 168' },
  { amount: 43.2, date: new Date(now.getFullYear(), now.getMonth() + 6, 1), type: 'expense', coordinates: [-77, -20], description: 'description foo bar 169' },
  { amount: 78.6, date: new Date(now.getFullYear(), now.getMonth() + 6, 1), type: 'expense', coordinates: [-77, -21], description: 'description foo bar 170' },
  { amount: 11.78, date: new Date(now.getFullYear(), now.getMonth() + 5, 1), type: 'expense', coordinates: [-74, -12], description: 'description foo bar 171' },
  { amount: 1.73, date: new Date(now.getFullYear(), now.getMonth() + 5, 1), type: 'expense', coordinates: [-75, -12], description: 'description foo bar 172' },
  { amount: 4, date: new Date(now.getFullYear(), now.getMonth() + 6, 1), type: 'expense', coordinates: [-77, -12], description: 'description foo bar 173' },
  { amount: 4.4, date: new Date(now.getFullYear(), now.getMonth() + 5, 1), type: 'expense', coordinates: [-78, -12], description: 'description foo bar 174' },
  { amount: 34, date: new Date(now.getFullYear(), now.getMonth() + 5, 1), type: 'expense', coordinates: [-79, -12], description: 'description foo bar 175' },
  { amount: 56.4, date: new Date(now.getFullYear(), now.getMonth() + 5, 1), type: 'expense', coordinates: [-80, -12], description: 'description foo bar 176' },
  { amount: 5.6, date: new Date(now.getFullYear(), now.getMonth() + 6, 1), type: 'expense', coordinates: [-77, -11], description: 'description foo bar 177' },
  { amount: 7.2, date: new Date(now.getFullYear(), now.getMonth() + 5, 1), type: 'expense', coordinates: [-77, -10], description: 'description foo bar 178' },
  { amount: 81.9, date: new Date(now.getFullYear(), now.getMonth() + 6, 1), type: 'expense', coordinates: [-65, -19], description: 'description foo bar 179' },
  { amount: 6, date: new Date(now.getFullYear(), now.getMonth() + 5, 1), type: 'expense', coordinates: [-66, -12], description: 'description foo bar 180' },
];

const categories = [
  { name: 'Salary', icon: 'account_balance', color: '#F44336' },
  { name: 'Food', icon: 'shopping_cart', color: '#E91E63' },
  { name: 'Packages', icon: 'local_shipping', color: '#9C27B0' },
  { name: 'Shopping', icon: 'shopping_cart', color: '#673AB7' },
  { name: 'Bar', icon: 'local_bar', color: '#3F51B5' },
  { name: 'Business', icon: 'business', color: '#2196F3' },
  { name: 'Car', icon: 'directions_car', color: '#03A9F4' },
  { name: 'Public Transportation', icon: 'directions_bus', color: '#00BCD4' },
  { name: 'Restaurant', icon: 'restaurant', color: '#009688' },
  { name: 'Movies', icon: 'theaters', color: '#4CAF50' },
  { name: 'Gas', icon: 'local_gas_station', color: '#8BC34A' },
  { name: 'Cafe', icon: 'local_cafe', color: '#CDDC39' },
  { name: 'Taxi', icon: 'local_taxi', color: '#FFEB3B' },
  { name: 'Hotel', icon: 'local_hotel', color: '#FFC107' },
  { name: 'Florist', icon: 'local_florist', color: '#FF9800' },
  { name: 'Golf', icon: 'golf_course', color: '#FF5722' },
  { name: 'Fitness', icon: 'fitness_center', color: '#795548' },
  { name: 'Vacation', icon: 'beach_access', color: '#9E9E9E' },
  { name: 'Cigarette', icon: 'smoking_rooms', color: '#607D8B' },
  { name: 'Board Games', icon: 'casino', color: '#000000' },
  { name: 'School', icon: 'school', color: '#FFFFFF' },
  { name: 'Baby', icon: 'child_care', color: '#F44336' },
  { name: 'Camera', icon: 'camera_alt', color: '#9C27B0' },
  { name: 'Computer', icon: 'computer', color: '#FFEB3B' },
  { name: 'Smartphone', icon: 'smartphone', color: '#4CAF50' },
  { name: 'Headset', icon: 'headset', color: '#9E9E9E' },
  { name: 'Health', icon: 'favorite', color: '#2196F3' },
  { name: 'Home', icon: 'home', color: '#E91E63' },
  { name: 'Furniture', icon: 'weekend', color: '#009688' },
];

const budgets = [
  { name: 'Nir', limit: 5000, currentAmount: 231 },
  { name: 'Adi', limit: 7500, currentAmount: 112 },
  { name: 'Food', limit: 1500, currentAmount: 234.1 },
  { name: 'Gooing Out', limit: 2200, currentAmount: 1450 },
];

const users = [
  { email: 'nir@galon.io', token: '123' },
  { email: 'nirgn975@gmail.com', token: '1234' },
  { email: 'adisaar3@gmail.com', token: '12345' },
];

const cleanDB = () => {
  logger.log(['... cleaning the DB']);
  const cleanPromises = [User, Category, Transaction, Budget]
    .map((model) => {
      return model.remove().exec();
    });
  return Promise.all(cleanPromises);
};

const createDoc = (Model, doc) => {
  return new Promise((resolve, reject) => {
    new Model(doc).save((err, saved) => {
      return err ? reject(err) : resolve(saved);
    });
  });
};

const createUsers = (data) => {
  const newUsers = users.map((user, i) => {
    return createDoc(User, user);
  });

  return Promise.all(newUsers)
    .then((savedUsers) => {
      return _.merge({ users: savedUsers }, data || {});
    });
};

const createCategories = (data) => {
  const newCategories = categories.map((category, i) => {
    category.user = data.users[i % users.length];
    return createDoc(Category, category);
  });

  return Promise.all(newCategories)
    .then((savedCategories) => {
      return _.merge({ categories: savedCategories }, data || {});
    });
};

const createBudgets = (data) => {
  const newBudgets = budgets.map((budget, i) => {
    budget.categories = [data.categories[i % categories.length]];
    budget.user = data.users[i % users.length];
    return createDoc(Budget, budget);
  });

  return Promise.all(newBudgets)
    .then((savedBudgets) => {
      return _.merge({ budgets: savedBudgets }, data || {});
    });
};

const createTransactions = (data) => {
  const newTransactions = transactions.map((transaction, i) => {
    transaction.category = data.categories[i % categories.length];
    transaction.user = data.users[i % users.length];
    return createDoc(Transaction, transaction);
  });

  return Promise.all(newTransactions)
    .then(() => ['Seeded DB with 180 Transactions, 29 Categories, 4 Budgets, and 3 Users']);
};


cleanDB()
  .then(createUsers)
  .then(createCategories)
  .then(createBudgets)
  .then(createTransactions)
  .then(logger.log.bind([logger]))
  .catch(logger.log.bind([logger]));
