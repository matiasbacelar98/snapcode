const languagesOptions = [
  'javascript',
  'css',
  'dart',
  'django',
  'go',
  'jsx',
  'markdown',
  'nginx',
  'php',
  'powershell',
  'pug',
  'python',
  'ruby',
  'sass',
  'shell',
  'sql',
  'stylus',
  'swift',
  'vue',
  'html',
];

const themesOptions = [
  '3024-day',
  '3024-night',
  'abbott',
  'abcdef',
  'ambiance',
  'ayu-dark',
  'ayu-mirage',
  'base16-dark',
  'bespin',
  'base16-light',
  'blackboard',
  'cobalt',
  'colorforth',
  'dracula',
  'duotone-dark',
  'duotone-light',
  'eclipse',
  'elegant',
  'erlang-dark',
  'gruvbox-dark',
  'hopscotch',
  'icecoder',
  'isotope',
  'juejin',
  'lesser-dark',
  'liquibyte',
  'lucario',
  'material',
  'material-darker',
  'material-palenight',
  'material-ocean',
  'mbo',
  'mdn-like',
  'midnight',
  'monokai',
  'moxer',
  'neat',
  'neo',
  'night',
  'nord',
  'oceanic-next',
  'panda-syntax',
  'paraiso-dark',
  'paraiso-light',
  'pastel-on-dark',
  'railscasts',
  'rubyblue',
  'seti',
  'shadowfox',
  'solarized',
  'the-matrix',
  'tomorrow-night-bright',
  'tomorrow-night-eighties',
  'ttcn',
  'twilight',
  'vibrant-ink',
  'xq-dark',
  'xq-light',
  'yeti',
  'yonce',
  'zenburn',
];

const defaultCode = `import { useState, useEffect } from 'react';
export function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // Actualizar valor despues del delay
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Cancelar el timeout si el valor cambio
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}`;
const defaultColor = '#f66f6f';
const defaultTheme = 'monokai';
const defaultLanguage = 'jsx';

export {
  languagesOptions,
  themesOptions,
  defaultCode,
  defaultColor,
  defaultTheme,
  defaultLanguage,
};
