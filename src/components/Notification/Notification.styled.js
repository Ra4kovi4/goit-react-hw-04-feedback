import styled from 'styled-components';

export const Message = styled.div`
  color: ${p => p.theme.colors.red};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
  margin-bottom: ${p => p.theme.space[5]};
`;
