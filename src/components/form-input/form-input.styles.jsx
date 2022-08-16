import styled from "styled-components";

const subColor = "grey";
const mainColor = "black";

export const Container = styled.div`
  position: relative;
  margin: 45px 0;
`;

export const FormInputBox = styled.input`
  background: none;
  background-color: white;
  color: ${subColor};
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${subColor};
  margin: 25px 0;

  &:focus {
    outline: none;
  }

  input[type="password"] {
    letter-spacing: 0.3em;
  }
`;

export const FormInputLabel = styled.label`
  top: ${(props) => (!props.shrink ? "10px" : "-14px")};
  color: ${(props) => (!props.shrink ? subColor : mainColor)};
  font-size: ${(props) => (!props.shrink ? "12px" : "16px")};
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  transition: 300ms ease all;
`;
