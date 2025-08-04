// Define your custom theme type
export interface CustomTheme {
  colors: {
    primary: string;
    secondary: string;
  };
  spacing: {
    large: string;
    small: string;
  };
}

// Define your theme object
export const theme: CustomTheme = {
  colors: {
    primary: 'blue',
    secondary: 'green',
  },
  spacing: {
    large: '16px',
    small: '8px',
  },
};