import { ThemeConfig } from "antd";

export const primaryColor: string = "#8A42DB";
export const contrastColor: string = "#7DFFAF";

const customTheme: ThemeConfig = {
  token: {
    colorPrimary: "#8A42DB",
    colorSuccess: "#7DFFAF",
    colorBgBase: "#D2D5D9",
    colorBgElevated: "#B5ADC7",
    colorTextBase: "#171023",
    colorTextSecondary: "#2C243B",
    colorTextTertiary: "#7DFFAF",
    colorFillTertiary: "#7DFFAF",
    colorBorder: "#484848",
    colorLink: contrastColor,
  },
};

const darkTheme: ThemeConfig = {
  token: {
    colorBgBase: "#171023",
    colorBgElevated: "#4E4563",
    colorTextBase: "#F5F6F6",
    colorTextSecondary: "#CDD0D4",
  },
};

export default function getThemeConfig(darkMode: boolean): ThemeConfig {
  return darkMode
    ? {
        token: {
          ...customTheme.token,
          ...darkTheme.token,
        },
      }
    : customTheme;
}
