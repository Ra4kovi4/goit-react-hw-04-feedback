import styled from 'styled-components';

export const GoodResult = styled.div`
  color: ${p => p.theme.colors.green};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
  margin-bottom: ${p => p.theme.space[2]}px;
`;

export const NeutralResult = styled.div`
  color: ${p => p.theme.colors.yellow};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
  margin-bottom: ${p => p.theme.space[2]}px;
`;
export const BadResult = styled.div`
  color: ${p => p.theme.colors.red};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
  margin-bottom: ${p => p.theme.space[2]}px;
`;
export const TotalResult = styled.div`
  color: ${p => p.theme.colors.blue};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
  margin-bottom: ${p => p.theme.space[2]}px;
`;
export const GoodResultPercent = styled.div`
  color: ${p => p.theme.colors.maroon};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
  margin-bottom: ${p => p.theme.space[2]}px;
`;
