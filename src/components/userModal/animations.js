function userModalTransition(ease) {
  return {
    duration: 0.2,
    type: 'tween',
    ease,
  };
}

export const userModalAnimations = {
  userModalFrom: () => ({ opacity: 0, y: 12 }),
  userModalTo: () => ({ opacity: 1, y: 0, transition: userModalTransition('easeIn') }),
  userModalExit: () => ({
    opacity: 0,
    y: 12,
    transition: userModalTransition('easeOut'),
  }),
};
