export const slideShow = {
    initial: { opacity: 0, scale: 1.1, transition: { duration: 1 } },
    animate: { opacity: 1, scale: 1, transition: { duration: 1 } },
    exit: { opacity: 0, scale: 1.1, transition: { duration: 1 } },
  };
  
  export const subtitleAnimation = {
    initial: { x: -50, opacity: 0, transition: { duration: 0.5, delay: 0.7 } },
    animate: { x: 0, opacity: 1, transition: { duration: 0.5, delay: 0.7 } },
    exit: { x: -50, opacity: 0, transition: { duration: 0.5, delay: 0.7 } },
  };
  
  export const descriptionAnimation = {
    initial: { x: 50, opacity: 0, transition: { duration: 0.5, delay: 0.9 } },
    animate: { x: 0, opacity: 1, transition: { duration: 0.5, delay: 0.9 } },
    exit: { x: 50, opacity: 0, transition: { duration: 0.5, delay: 0.9 } },
  };
  
  export const buttonAnimation = {
    initial: { y: 50, opacity: 0, transition: { duration: 0.5, delay: 1.1 } },
    animate: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 1.1 } },
    exit: { y: 50, opacity: 0, transition: { duration: 0.5, delay: 1.1 } },
  };
  
  export const imageAnimation = {
    hidden: { opacity: 0, scale: 1.1, x: -50 },
    visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 0.5 } },
  };
  
  export const textAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3 } },
  };
  
  export const listItemAnimation = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.5 } },
  };

  
  export const cardAnimation = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };
  
  export const sectionTitleAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  
  export const listFromLeftAnimation = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };
  
  export const imageFromRightAnimation = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };
  
  export const circleAnimation = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };
  
export const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 1 },
  };
  
  export const scrollReveal = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  
  export const slideInFromTop = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  
  export const slideInFromBottom = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  
  export const slideInFromLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };
  
  export const slideInFromRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };
  


export const cardHoverAnimation = {
    initial: { rotateY: 0 },
    hover: { rotateY: 180 },
    transition: { duration: 0.6 },
  };
  
  export const cardContentAnimation = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 1 },
  };
  