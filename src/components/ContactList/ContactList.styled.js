import styled from 'styled-components';
import theme from 'theme';

export const ContactListUl = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  border-radius: 5px;
`;

export const ContactItemLi = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 260px;
  padding: 8px;
  margin-bottom: 8px;
  border: 1px solid #eee;
  border-radius: ${theme.radii.normal};
  box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(190, 190, 190),
    0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
  &:hover {
    background-color: lightgray;
    box-shadow: 0px 0px 20px -18px;
  }
`;

export const ContactName = styled.p`
  text-align: left;
  font-size: ${theme.fontSizes.xs};
  font-weight: ${theme.fontWeights.light};
  @media (min-width: 420px) {
    font-size: ${theme.fontSizes.m};
  }
`;

export const ContactNumber = styled.p`
  text-align: right;
  font-size: ${theme.fontSizes.xs};
  font-weight: ${theme.fontWeights.light};
  margin-right: 6px;
  @media (min-width: 420px) {
    font-size: ${theme.fontSizes.s};
  }
`;
