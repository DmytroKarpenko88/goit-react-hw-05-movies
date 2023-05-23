import { format } from 'date-fns';

export const formateDate = date => {
  return format(new Date(date), 'PPP');
};

export const formatYear = date => {
  return format(new Date(date), 'Y');
};
