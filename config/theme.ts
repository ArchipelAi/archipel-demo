export interface ICustomTheme {
  colors: {
    surface1: string;
    surface2: string;
    surface3: string;
    surface4: string;
    surface5: string;
    surface6: string;
    accentPrimary: string;
    accentSecondary: string;
    accentTertiary: string;
    hightlightPrimary: string;
    hightlightSecondary: string;
    highlightTertiary: string;
    text100: string;
    text200: string;
    text300: string;
    text400: string;
    text500: string;
    alertConfirmation: string;
    alertError: string;
    alertWarning: string;
  };
}

export const DARK_THEME: ICustomTheme = {
  colors: {
    surface1: "#111518",
    surface2: "#191F24",
    surface3: "#222A30",
    surface4: "#2B363D",
    surface5: "#3E4C57",
    surface6: "#4F5F71",
    accentPrimary: "#475763",
    accentSecondary: "#27929C",
    accentTertiary: "#FFFFFF",
    hightlightPrimary: "#F3F7FF",
    hightlightSecondary: "#9DA0A6",
    highlightTertiary: "#0C0D0D",
    text100: "#F2F9FF",
    text200: "#C2C8CC",
    text300: "#919699",
    text400: "#616466",
    text500: "#0C0C0D",
    alertConfirmation: "#43D48F",
    alertError: "#FF0000",
    alertWarning: "#F4D73D",
  },
};
