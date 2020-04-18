export const months = [
  { id: 1, shortName: 'Jan', monthName: 'January' },
  { id: 2, shortName: 'Feb', monthName: 'February' },
  { id: 3, shortName: 'Mar', monthName: 'March' },
  { id: 4, shortName: 'Apr', monthName: 'April' },
  { id: 5, shortName: 'May', monthName: 'May' },
  { id: 6, shortName: 'Jun', monthName: 'June' },
  { id: 7, shortName: 'Jul', monthName: 'July' },
  { id: 8, shortName: 'Aug', monthName: 'August' },
  { id: 9, shortName: 'Sep', monthName: 'September' },
  { id: 10, shortName: 'Oct', monthName: 'October' },
  { id: 11, shortName: 'Nov', monthName: 'November' },
  { id: 12, shortName: 'Dec', monthName: 'December' },
];

export const breakMonthYear = (
  value: string,
  divider: string = '-',
): string | string[] => {
  const valueArray = value.split(divider);
  if (valueArray.length < 2) {
    return value;
  }
  return valueArray;
};

export const convertNumberToMonthName = (stringMonthYear: string): string => {
  const arrayMonthYear = breakMonthYear(stringMonthYear);

  if (!Array.isArray(arrayMonthYear)) {
    return arrayMonthYear;
  }

  const monthNumber = +arrayMonthYear[0];

  const monthDetail = months.find(item => item.id === monthNumber);

  return monthDetail ? `${monthDetail.shortName} ${arrayMonthYear[1]}` : '';
};
