import styled from 'styled-components';

export const Container = styled.section`
  width: 500px;
  padding: ${p => p.theme.space[4]}px;
`;
export const Title = styled.h2`
  color: ${p => p.theme.colors.primary};
  font-size: ${p => p.theme.fontSizes.l};
`;
