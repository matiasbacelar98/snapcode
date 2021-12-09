import { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { AnimatePresence } from 'framer-motion';
import { HexColorPicker } from 'react-colorful';
import { CgColorPicker } from 'react-icons/cg';
import { useDebounce, useClickOutside } from '../../hooks';
import { StyledActionBtn } from '../../styles/reusable/button';
import { StyledAnimationWrapper } from './styles';
import { pickerAnimations } from './animations';

const ColorPicker = ({ classGridItem, color, setColor }) => {
  const [value, setValue] = useState(color);
  const [isColorPickerActive, setIsColorPickerActive] = useState(false);
  const colorPickerRef = useRef(null);
  const { pickerFrom, pickerTo, pickerExit } = pickerAnimations;

  // close color-picker when click outside
  useClickOutside(colorPickerRef, () => {
    if (isColorPickerActive) setIsColorPickerActive(false);
  });

  // Update color state after 200ms
  useDebounce(() => setColor(value), 200, [value]);

  // toggle
  const toggleColorPicker = () => {
    setIsColorPickerActive(prev => !prev);
  };

  return (
    <div className={`relative-parent ${classGridItem}`}>
      <StyledActionBtn
        type='button'
        onClick={toggleColorPicker}
        aria-label={isColorPickerActive ? 'Cerrar selector de color' : 'Abrir selector de color'}
        className='focus-bg'
        name='elegir color'
      >
        <CgColorPicker className='default-icon' />
      </StyledActionBtn>

      <AnimatePresence>
        {isColorPickerActive ? (
          <StyledAnimationWrapper
            key='color-picker'
            initial={pickerFrom}
            animate={pickerTo}
            exit={pickerExit}
            ref={colorPickerRef}
          >
            <div className='picker-wrapper'>
              <HexColorPicker color={value} onChange={setValue} />
            </div>
          </StyledAnimationWrapper>
        ) : null}
      </AnimatePresence>
    </div>
  );
};

// Proptypes
ColorPicker.propTypes = {
  classGridItem: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  setColor: PropTypes.func.isRequired,
};

export default ColorPicker;
