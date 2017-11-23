const MONTHS = {
  ru: [
  'Январь',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  'Июнь',
  'Июль',
  'Августь',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
  'Декабрь',
  ]
};
const WEEKDAYS_LONG = {
  ru: [
  'Воскресенье',
  'Понедельник',
  'Вторник',
  'Среда',
  'Четверг',
  'Пятница',
  'Суббота',
  ]
};

const WEEKDAYS_SHORT = {
  ru: ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ',]
};

const FIRST_DAY = {
  ru: 1,
};

function formatDay(d, locale = 'ru') {
  return `${WEEKDAYS_LONG[locale][d.getDay()]}, ${d.getDate()} ${MONTHS[locale][
    d.getMonth()
  ]} ${d.getFullYear()}`;
}

function formatMonthTitle(d, locale = 'ru') {
  return `${MONTHS[locale][d.getMonth()]} ${d.getFullYear()}`;
}

function formatWeekdayShort(i, locale) {
  return WEEKDAYS_SHORT[locale][i];
}

function formatWeekdayLong(i, locale) {
  return WEEKDAYS_SHORT[locale][i];
}

function getFirstDayOfWeek(locale) {
  return FIRST_DAY[locale];
}

// ==================== CONFIG ======================
export const localeUtils = {
  formatDay,
  formatMonthTitle,
  formatWeekdayShort,
  formatWeekdayLong,
  getFirstDayOfWeek,
};

export const styleData = `.DayPicker-Day--highlighted {
  background-color: orange;
  color: white;
}`;

export const datesArr = (dates) => {
  return dates[0].map(d => {
      return new Date(d)
  })
};
// ==================== CONFIG-end ======================
// ========================== ETS ========================

// const data = {
//   2017: {
//     10: [1, 3, 7, 12, 13, 20, 29],
//   }
// };

// const data = {
//   2017: {
//     10: ['2017/11/5','2017/10/5',],
//   }
// };

// const data = {
//   2017: {
//     10: ['2017.11.5','2017.12.5',],
//   }
// };