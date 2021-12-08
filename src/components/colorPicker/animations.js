function pickerTransition(easeType) {
  return {
    duration: 0.35,
    easing: easeType,
    type: 'tween',
  };
}

export const pickerAnimations = {
  pickerFrom: () => ({
    y: 40,
    opacity: 0,
  }),

  pickerTo: () => ({
    y: 10,
    opacity: 1,
    transition: pickerTransition('easeIn'),
  }),

  pickerExit: () => ({
    y: 40,
    opacity: 0,
    transition: pickerTransition('easeOut'),
  }),
};
