export const HOME = 'Home';
export const PAGE_CALC = 'Calc';
export const PAGE_LOGS = 'Logs';
export const PAGE_CALC_AREA = 'CalcArea';

export const menuItems = [
    {id: 0, label: HOME, href: '/',},
    {id: 1, label: PAGE_CALC, href: '/Calc',},
    {id: 2, label: PAGE_LOGS, href: '/Logs',},
    {id: 3, label: PAGE_CALC_AREA, href: '/calc_area',},
];

export const COUNT_NUMBERS = 10;
//export const NUMBERS = new Array(COUNT_NUMBERS).fill(0).map((_, index) => (index == 9) ? 0 : index+1);
export const NUMBERS = new Array(COUNT_NUMBERS).fill(0).map((_, index) => (index == 9) ? 0 : index+1);

export const OPERATIONS_CALC = ['+', '-'];