// Transitions
function navTransition(easeType) {
  return {
    duration: 0.7,
    easing: easeType,
    type: 'tween',
  };
}

function liTransition(easeType, duration, elementIndex) {
  return {
    type: 'tween',
    duration,
    ease: easeType,
    delay: elementIndex * 0.2,
  };
}

// Nav animations
const navAnimations = {
  navFrom: () => ({
    clipPath: 'circle(0% at 100% 0)',
    transition: navTransition('easeOut'),
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
  }),

  navTo: () => ({
    clipPath: 'circle(141.4% at 100% 0)',
    transition: navTransition('easeIn'),
  }),
};

// Li animations
const liAnimations = {
  liFrom: () => ({
    opacity: 0,
    y: 30,
  }),

  liTo: i => ({
    y: 0,
    opacity: 1,
    transition: liTransition('easeOut', 0.5, i),
  }),

  liOut: i => ({
    opacity: 0,
    y: -30,
    transition: liTransition('easeIn', 0.2, i),
  }),
};

export { navAnimations, liAnimations };
