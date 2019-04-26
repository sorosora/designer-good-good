import { createBreakpoints } from '@sorosora/styled-breakpoints';

const breakpoints = {
  phone: '0px',
  tablet: '768px',
  desktop: '1200px',
};

const { max } = createBreakpoints(breakpoints);

const media = {
  tablet: max('tablet'),
  phone: max('phone'),
};

const sizes = {
  tablet: 1200,
  phone: 768,
};

const grid = {
  padding: ['15px', '30px', '16px'],
  gutter: ['30px', '30px', '16px'],
  gridWidth: ['1200px'],
};

const fontFamily = {
  primary: '\'Open Sans\', \'PingFangTC\', \'微軟正黑體\', \'Microsoft JhengHei\', sans-serif',
  pingFang: '\'PingFangTC\', \'微軟正黑體\', \'Microsoft JhengHei\', sans-serif',
  openSans: '\'Open Sans\', sans-serif',
};

const color = {

};

const font = {
  family: fontFamily,
};

const theme = {
  media,
  grid,
  font,
  color,
};

export default theme;

export {
  sizes,
  grid,
};
