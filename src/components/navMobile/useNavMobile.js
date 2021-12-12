import { useAnimation } from 'framer-motion';
import { useEffect, useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import { navAnimations, liAnimations } from './animations';
import { removeScrollbar, handleClick } from '../../utils/utilities';

export const useNavMobile = (isMenuOpen, setIsMenuOpen) => {
  const navControls = useAnimation();
  const liControls = useAnimation();
  const { navFrom, navTo } = navAnimations;
  const { liFrom, liTo, liOut } = liAnimations;

  const animateMenuOut = useCallback(async () => {
    await liControls.start(liOut);
    await navControls.start(navFrom);
    removeScrollbar();
  }, [liControls, navControls, liOut, navFrom]);

  const animateMenuIn = useCallback(async () => {
    removeScrollbar();
    await navControls.start(navTo);
    liControls.start(liTo);
  }, [liControls, navControls, liTo, navTo]);

  const closeMenuOnClick = () => {
    setIsMenuOpen(false);
  };

  // Check menuState and execute
  useEffect(() => {
    if (isMenuOpen === null) return;

    if (!isMenuOpen) {
      animateMenuOut();
    }

    if (isMenuOpen) {
      animateMenuIn();
    }
  }, [isMenuOpen, animateMenuOut, animateMenuIn]);

  return { NavLink, navControls, navFrom, liControls, liFrom, handleClick, closeMenuOnClick };
};
