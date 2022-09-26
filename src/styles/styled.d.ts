import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}

export interface ThemeType {
  title: string;
  colors: {
    bg400: string;
    bg600: string;
    bg800?: string;
    bg900?: string;
    wrd400: string;
    wrd600: string;
    wrd800?: string;
    acc800: string;
    acc900?: string;
  };
  font: {
    family: string;
  };
}
