import { useState, useRef, useEffect } from 'react';
import { useLocalStorage } from '../../hooks';
import {
  defaultCode,
  defaultColor,
  defaultTheme,
  defaultLanguage,
  languagesOptions,
  themesOptions,
} from './editorData';

export const useCodeEditor = () => {
  const [code, setCode] = useLocalStorage('code', defaultCode);
  const [language, setLanguage] = useLocalStorage('language', defaultLanguage);
  const [theme, setTheme] = useLocalStorage('theme', defaultTheme);
  const [color, setColor] = useLocalStorage('bg-color', defaultColor);
  const [loadingModules, setLoadingModules] = useState(true);
  const editorRef = useRef(null);

  // lazy load modules
  const requestEditorModules = async (themeMod, languageMod) => {
    const themeFile = Object.keys(themeMod);
    const languageFile = Object.keys(languageMod);

    await themeMod[themeFile]();
    await languageMod[languageFile]();
    setLoadingModules(false);
  };

  // load modules
  useEffect(() => {
    const languages = import.meta.glob(`./languages/*.js`);
    const themes = import.meta.glob(`./themes/*.js`);

    requestEditorModules(themes, languages);
  }, [loadingModules]);

  /* Update editor functions */
  const handleLanguageChange = async language => {
    // check if language is html
    const langValue = language === 'html' ? 'xml' : language;
    setLanguage(langValue);
  };

  const handleThemeChange = async theme => {
    setTheme(theme);
  };

  const handleChange = (editor, data, value) => {
    setCode(value);
  };

  return {
    code,
    language,
    theme,
    color,
    setColor,
    editorRef,
    loadingModules,
    handleLanguageChange,
    handleThemeChange,
    handleChange,
    languagesOptions,
    themesOptions,
  };
};
