import moment from 'moment';

export const isoToSimpleDateFormatConverter = (value) => {
  return moment(value, 'YYYY-MM-DDTHH:mm:ssZ').format('DD/MM/YYYY');
};

export const isoToStandardDateFormat = (value) => {
  return moment(value, 'YYYY-MM-DDTHH:mm:ssZ').format('YYYY-MM-DD');
};

export const isoToSlashDateFormatConverter = (value) => {
  return moment(value, 'YYYY-MM-DDTHH:mm:ssZ').format('YYYY/MM/DD');
};

export const isoToAmericanFormatConverter = (value) => {
  return moment(value, 'YYYY-MM-DDTHH:mm:ssZ').format('MM/DD/YYYY');
};

export const isoToAmericanWithHourFormatConverter = (value) => {
  return moment(value, 'YYYY-MM-DDTHH:mm:ssZ').format('MM/DD/YYYY HH:mm');
};
