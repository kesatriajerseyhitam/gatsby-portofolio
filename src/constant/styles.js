export const center = `
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const color = {
  gradient: 'linear-gradient(90deg, rgba(242,148,40,1) 0%, rgba(178,37,82,1) 100%)',
  graph: '#e632ac',
  node: '#84ce24',
  primaryBackground: '#202020',
  primaryHighlight: '#f29428',
  react: '#0090ff',
  saga: '#89d96d',
  secondaryBackground: '#252525',
  secondaryHighlight: '#b22552',
};

export const padding = {
  mobileHorizontalPadding: '15vw',
  mobileHeaderHorizontalPadding: '8vw',
  webHorizontalPadding: '25vw',
};

export const defaultButton = `
  background: ${color.gradient};
  border: none;
  border-radius: 10px;
  color: white;
  cursor: pointer;
  padding: 10px 20px;
`;
