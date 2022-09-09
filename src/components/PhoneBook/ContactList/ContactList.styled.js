import styled from 'styled-components';

export const StyledContactItem = styled.li`
  display: flex;
  /* flex-direction: row; */
  justify-content: space-between;
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.normal};
  line-height: ${p => p.theme.lineHeights.text};
  letter-spacing: ${p => p.theme.letterSpacing.m};
  margin-top: ${p => `${p.theme.space[4]}px`};
`;
