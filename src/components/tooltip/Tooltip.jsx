import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';
import { Box } from './styles';

const Tooltip = ({ children, tooltipData }) => {
  return (
    <Tippy
      render={attrs => <Box {...attrs}>{tooltipData.content}</Box>}
      visible={tooltipData.isVisible}
    >
      {children}
    </Tippy>
  );
};

// Proptypes
Tooltip.propTypes = {
  children: PropTypes.element.isRequired,
  tooltipData: PropTypes.shape({
    isVisible: PropTypes.bool,
    content: PropTypes.string,
  }).isRequired,
};

export default Tooltip;
