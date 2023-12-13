import styled, { css } from "styled-components";

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const PageButton = styled.button<{ isSelected?: boolean }>`
  margin: 0 5px;
  padding: 8px 12px;
  cursor: pointer;
  background-color: ${(props) => (props.isSelected ? "#2980b9" : "#fff")};
  color: ${(props) => (props.isSelected ? "#fff" : "#000")};
  border: none;
  border-radius: 5px;
  border: 2px solid ${(props) => (props.isSelected ? "transparent" : "#2980b9")};

  &:hover {
    background-color: ${(props) => (props.isSelected ? "#2980b9" : "#2980b9")};
    color: #fff;
    border-color: transparent;
  }

  ${(props) =>
    props.disabled &&
    css`
      background-color: #ddd;
      color: #777;
      cursor: not-allowed;
      border-color: transparent;

      &:hover {
        background-color: #ddd;
      }
    `}
`;


export const ActionButton = styled.button`
  margin: 0 5px;
  padding: 8px 12px;
  cursor: pointer;
  background-color: #2980b9;
  color: white;
  border: none;
  border-radius: 5px;

  &:hover {
    border-color: transparent;
  }

  ${(props) =>
    props.disabled &&
    css`
      background-color: #ddd;
      color: #777;
      cursor: not-allowed;
      border-color: transparent;

      &:hover {
        background-color: #ddd;
      }
    `}
`;
