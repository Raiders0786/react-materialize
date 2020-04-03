export interface Responsive {
  s?: number;
  m?: number;
  l?: number;
  xl?: number;
  offset?: string;
}

export type AnyFn = (...args: any[]) => any;

export interface SharedBasic {
  className?: string;
  children?: React.ReactElement | React.ReactElement[];
}

export type MaterialColor =
  'red' |
  'pink' |
  'purple' |
  'deep-purple' |
  'indigo' |
  'blue' |
  'light-blue' |
  'cyan' |
  'teal' |
  'green' |
  'light-green' |
  'lime' |
  'yellow' |
  'amber' |
  'orange' |
  'deep-orange' |
  'brown' |
  'grey' |
  'blue-grey';

export interface I18nOptions {
  cancel?: string,
  clear?: string,
  done?: string,
  previousMonth?: string,
  nextMonth?: string,
  months?: string[];
  monthsShort?: string[];
  weekdays?: string[];
  weekdaysShort?: string[];
  weekdaysAbbrev?: string[];
}
