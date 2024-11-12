import { ThemeConfig } from "antd";

const customTheme: ThemeConfig = {
  token: {
    colorPrimary: "#8A42DB",
    colorSuccess: "#7DFFAF",
    colorBgBase: "#F5F6F6",
    colorBgElevated: "#413A4F",
    colorTextBase: "#171023",
    colorTextSecondary: "#2C243B",
  },
};

const darkTheme: ThemeConfig = {
  token: {
    colorBgBase: "#171023",
    colorBgElevated: "#2C243B",
    colorTextBase: "#F5F6F6",
    colorTextSecondary: "#CDD0D4",
  },
};

export default function getThemeConfig(darkMode: boolean): ThemeConfig {
  return darkMode ? { ...customTheme, ...darkTheme } : customTheme;
}
