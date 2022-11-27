import styled from 'styled-components';

export const Button = styled.button`
  display: ${p => p.theme.inlineBlock};
  width: 70px;
  padding: ${p => p.theme.space[3]}px;
  margin-right: ${p => p.theme.space[2]}px;
  margin-bottom: ${p => p.theme.space[4]}px;
  background-color: ${p => p.theme.colors.buttonColor};
  border: ${p => p.theme.borders.normal};
  border-color: ${p => p.theme.colors.primary};
  border-radius: ${p => p.theme.radii.normal};
  box-shadow: ${p => p.theme.boxShadow};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.white};

  cursor: pointer;
  :hover,
  :focus {
    background-color: ${p => p.theme.colors.hoverColor};
  }
`;
