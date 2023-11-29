export const showUpVariant = {
  initial: { opacity: 0 },
  simpleAnimate: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 4,
    },
  },
};

export const jumpUpVariant = {
  initial: { y: 5 },
  animate: {
    y: 0,
    transition: {
      delay: 0.2,
      duration: 0.5,
    },
  },
};

export const blurVariant = {
  initial: { filter: " blur(4px)" },
  animate: {
    filter: "blur(0)",
    transition: {
      duration: 2,
    },
  },
};

export const scaleVariant = {
  initial: { opacity: 0, transform: "scale(0) skewY(0deg)" },
  animate: {
    opacity: 1,
    transform: "scale(1) skewY(6deg)",
    transition: {
      type: "tween",
      duration: 0.5,
    },
  },
};

export const skewVariant = {
  initial: { transform: "skewY(0deg)" },
  animate: {
    transform: "skewY(-6deg)",
    transition: {
      type: "tween",
      duration: 0.5,
    },
  },
};
