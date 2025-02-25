export const colors = {
  primary: '#4F5B46',
  secondary: '#A6E380',
  secondaryText: '#676A76',
  grey: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#E5E9EF',
    300: '#E8E8E8',
    400: '#EEEEEE',
    500: '#9e9e9e',
    600: '#868686',
    700: '#616161',
    800: '#424242',
    900: '#7D8790',
  },
  // Additional colors
  success: '#4caf50',
  warning: '#ff9800',
  error: '#f44336',
  info: '#2196f3',
  background: '#fdfdfd',
  text: '#000000',
  white: '#fff',
  black: '#000',
  border: '#E0E3E4',
  orange: '#F47215',
  orangeTwo: '#F7A662',
  gold: '#FFF2CB',
  green: '#239BA9',
  greenSignal: '#11C78C',
  future: '#CEE2FF80',
  futureText: '#14356880',
  limit: '#4DBDC933',
  limitText: '#14526899',
  buy: '#4DC94D33',
  buyText: '#14684399',
  sell: '#C94D4D33',
  sellText: '#BD5A5A',
  red: '#F75151',
};
export const hexToRgba = (hex: any, opacity = 1) => {
  hex = hex.replace(/^#/, '');
  let r = parseInt(hex.substring(0, 2), 16);
  let g = parseInt(hex.substring(2, 4), 16);
  let b = parseInt(hex.substring(4, 6), 16);

  // Return the rgba color
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};
