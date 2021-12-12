import { Controlled as ControlledEditor } from 'react-codemirror2';
import { StyledEditorWrapper, StyledActionWrapper, StyledLoadingWrapper } from './styles';
import { useCodeEditor } from './useCodeEditor';
import Dropdown from '../dropdown/Dropdown';
import ActionBtn from '../actionBtn/ActionBtn';
import ColorPicker from '../colorPicker/ColorPicker';
import Loader from '../loader/Loader';
// Code mirror
import 'codemirror/lib/codemirror.css';

const CodeEditor = () => {
  const {
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
  } = useCodeEditor();

  return (
    <article className='flow-spacing-3'>
      <StyledActionWrapper>
        <Dropdown
          value={language}
          onChange={e => handleLanguageChange(e.target.value)}
          data={languagesOptions}
          classGridItem='language'
        />
        <Dropdown
          value={theme}
          onChange={e => handleThemeChange(e.target.value)}
          data={themesOptions}
          classGridItem='theme'
        />

        <ActionBtn isAction='copy' classGridItem='copy' code={code} />
        <ColorPicker classGridItem='picker' color={color} setColor={setColor} />
        <ActionBtn isAction='save' classGridItem='save' editorRef={editorRef} />
        <ActionBtn isAction='download' classGridItem='download' editorRef={editorRef} />
      </StyledActionWrapper>

      {loadingModules ? (
        <StyledLoadingWrapper>
          <Loader />
        </StyledLoadingWrapper>
      ) : (
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
      )}
    </article>
  );
};

export default CodeEditor;
