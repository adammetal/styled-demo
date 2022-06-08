import styled from "styled-components";

export const Button = styled.button`
  color: rgb(219, 112, 147);
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  cursor: pointer;
`;

export const AlertButton = styled(Button)`
  color: #a02e2e;
  border-color: #a02e2e;
  background-color: grey;
`;

export const OkButton = styled(Button)`
  color: #49d849;
  border-color: #49d849;
`;

export const CustomButton = styled(Button)`
  color: ${(props) => props?.color ?? "rgb(219, 112, 147)"};
  border-color: ${(props) => props?.color ?? "rgb(219, 112, 147)"};
`;
