export const gridUnit = (amount: number, onlyNumber?: boolean): string =>
  `${8 * amount}${!onlyNumber && `px`}`;

export const BREAKPOINTS = {
  small: `480px`,
  medium: `768px`,
  large: `1024px`,
};

export const COLORS = {
  background: {
    primary: `#262636`,
    secondary: ``,
  },
  text: {
    primary: `#f3f3fa`,
    secondary: ``,
  },
  border: {
    primary: `#81879e`,
    secondary: ``,
  },
  button: {
    primary: `#ee4865`,
    secondary: ``,
  },
};
