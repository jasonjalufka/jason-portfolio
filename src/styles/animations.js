const keyframes = {
  fadeIn: `@keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }`,
}

const animations = {
  fadeIn: `
    animation: fadeIn 800ms ease-out forwards;
    ${keyframes.fadeIn};
  `,
}

export default animations
