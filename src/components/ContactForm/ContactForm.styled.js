import styled from 'styled-components';
import theme from 'theme';
import { Form, Field } from 'formik';

export const PhonebookForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 240px;
`;

export const Label = styled.label`
  font-size: ${theme.fontSizes.m};
  font-weight: ${theme.fontWeights.normal};
  color: ${theme.colors.secondary};
  
  @media (min-width: 420px) {
    font-size: ${theme.fontSizes.s};
  }
`;

export const Input = styled(Field)`
  margin-bottom: 10px;
  box-shadow: 0px 0px 20px -20px;
  font-size: ${theme.fontSizes.m};
  margin-left: ${theme.space[3]};
  padding: ${theme.space[3]};
  border: 1px solid #ccc;
  border-radius: ${theme.radii.normal};
  background-color: ${theme.colors.primary};

  ::placeholder {
    font-family: ${theme.fonts.body};
    color: ${theme.colors.secondary};
  }

  :focus {
    outline-color: #1976d2;
  }

  @media (min-width: 420px) {
    font-size: ${theme.fontSizes.s};
  }
`;

export const Error = styled.p`
  display: inline;
  position: absolute;
  top: calc(${theme.space[2]} + 30px);
  font-size: ${theme.fontSizes.m};
  color: red;
`;
