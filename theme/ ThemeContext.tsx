export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  isDarkMode: Boolean;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: extendedTheme.dark,
  toggleTheme: () => {},
  isDarkMode: false,
});

export const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => setIsDarkMode((prevMode) => !prevMode);

  const theme = isDarkMode ? extendedTheme.dark : extendedTheme.light;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
