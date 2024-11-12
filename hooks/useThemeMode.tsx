import getThemeConfig from "@/constants/theme";
import { ConfigProvider } from "antd";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
  useMemo,
} from "react";

// Define a interface para o contexto de tema
interface ThemeContextType {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

// Cria o contexto com um valor inicial como `undefined`
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Hook para usar o contexto do tema
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

// Hook de alternância de tema com tipagem
const useDarkMode = (): [boolean, () => void] => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Carregar o tema do localStorage, se existir
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
      document.documentElement.setAttribute("data-theme", savedTheme);
    } else {
      // Define o tema padrão com base na preferência do sistema do usuário
      const prefersDarkScheme = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setIsDarkMode(prefersDarkScheme);
      document.documentElement.setAttribute(
        "data-theme",
        prefersDarkScheme ? "dark" : "light"
      );
    }
  }, []);

  const toggleDarkMode = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    setIsDarkMode(!isDarkMode);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return [isDarkMode, toggleDarkMode];
};

// Interface para as props do ThemeProvider
interface ThemeProviderProps {
  children: ReactNode;
}

// ThemeProvider para fornecer o contexto de tema
export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [isDarkMode, toggleDarkMode] = useDarkMode();
  const theme = useMemo(() => getThemeConfig(isDarkMode), [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      <ConfigProvider theme={theme}>{children}</ConfigProvider>
    </ThemeContext.Provider>
  );
};
