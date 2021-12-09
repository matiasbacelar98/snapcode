import PropTypes from 'prop-types';
import { AiOutlineCopy, AiOutlineSave } from 'react-icons/ai';
import { BsDownload } from 'react-icons/bs';
import { StyledActionBtn } from '../../styles/reusable/button';
import { useActionBtn } from './useActionBtn';
import Tooltip from '../tooltip/Tooltip';

const ActionBtn = ({ isAction, classGridItem, code, editorRef }) => {
  const {
    handleCopyToClipboard,
    saveUserImg,
    downloadCodeAsImg,
    copyTooltip,
    saveTooltip,
    downloadTooltip,
  } = useActionBtn(editorRef, code);

  /* CopyToClipboard Btn */
  if (isAction === 'copy') {
    return (
      <Tooltip tooltipData={copyTooltip}>
        <StyledActionBtn
          type='button'
          onClick={() => handleCopyToClipboard(code)}
          className={`${classGridItem} focus`}
        >
          <AiOutlineCopy className='default-icon' />
        </StyledActionBtn>
      </Tooltip>
    );
  }

  /* Download Btn */
  if (isAction === 'download') {
    return (
      <Tooltip tooltipData={downloadTooltip}>
        <StyledActionBtn
          type='button'
          className={`${classGridItem} focus`}
          onClick={downloadCodeAsImg}
        >
          <BsDownload className='default-icon' />
        </StyledActionBtn>
      </Tooltip>
    );
  }

  /* Default is Save Btn */
  return (
    <Tooltip tooltipData={saveTooltip}>
      <StyledActionBtn type='button' className={`${classGridItem} focus`} onClick={saveUserImg}>
        <AiOutlineSave className='default-icon' />
      </StyledActionBtn>
    </Tooltip>
  );
};

// Proptypes
ActionBtn.propTypes = {
  isAction: PropTypes.string.isRequired,
  classGridItem: PropTypes.string.isRequired,
  code: PropTypes.string,
  editorRef: PropTypes.objectOf(
    PropTypes.shape({ current: PropTypes.instanceOf(HTMLInputElement) })
  ),
};

ActionBtn.defaultProps = {
  editorRef: null,
  code: null,
};

export default ActionBtn;
