import styled from "styled-components"

export const Button = styled.button`
  color: white;
  padding: 10px 18px;
  background-color: #000000;
  border-radius: 5px;
  min-width: 220px;
  border: none;
  font-size: 13px;
  border: 1px solid transparent;
  cursor: pointer;
  transition: 0.2s background ease-out;


  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
    transition: 0.1s background ease-in;
  }
`


export const OutlineButton = styled(Button)`
background-color: white;
border: 1px solid black;
color: black;
&:hover {
    background-color: black;
    color: white;
    border: 1px solid transparent;
    border: 1px solid transparent;

  }
`

