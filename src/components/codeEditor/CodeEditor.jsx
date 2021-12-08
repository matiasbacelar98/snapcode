import { useState, useRef } from 'react';
import { Controlled as ControlledEditor } from 'react-codemirror2';
import { StyledEditorWrapper, StyledActionWrapper } from './styles';
import {
  languagesOptions,
  themesOptions,
  defaultCode,
  defaultColor,
  defaultTheme,
  defaultLanguage,
} from './editorData';
import './modes';
import Dropdown from '../dropdown/Dropdown';
import ActionBtn from '../actionBtn/ActionBtn';
import ColorPicker from '../colorPicker/ColorPicker';

const CodeEditor = () => {
  const [code, setCode] = useState(defaultCode);
  const [language, setLanguage] = useState(defaultLanguage);
  const [theme, setTheme] = useState(defaultTheme);
  const [color, setColor] = useState(defaultColor);
  const editorRef = useRef(null);

  const handleChange = (editor, data, value) => {
    setCode(value);
  };

  return (
    <article className='flow-spacing-3'>
      <StyledActionWrapper>
        <Dropdown
          value={language}
          onChange={e => setLanguage(e.target.value)}
          data={languagesOptions}
          classGridItem='language'
        />

        <Dropdown
          value={theme}
          onChange={e => setTheme(e.target.value)}
          data={themesOptions}
          classGridItem='theme'
        />

        <ColorPicker classGridItem='picker' color={color} setColor={setColor} />

        <ActionBtn isAction='save' classGridItem='save' editorRef={editorRef} />

        <ActionBtn isAction='copy' classGridItem='copy' code={code} />

        <ActionBtn isAction='download' classGridItem='download' editorRef={editorRef} />
      </StyledActionWrapper>

      <div>
        <div ref={editorRef}>
          <StyledEditorWrapper
            style={{
              '--bg-color': color,
            }}
          >
            <ControlledEditor
              className='react-codemirror2'
              onBeforeChange={handleChange}
              value={code}
              options={{
                lineWrapping: true,
                lint: true,
                mode: language,
                theme,
              }}
            />
          </StyledEditorWrapper>
        </div>
      </div>
    </article>
  );
};

export default CodeEditor;
