import styled from "styled-components";
import {  darkTheme, lightTheme } from "../../utils/Themes";

interface RandomizedContainerProps {
    isDarkMode: boolean;
  }
  
  export const RandomizedContainer = styled.div<RandomizedContainerProps>`
    height: 100vh;
    width: 100vw;
    border: 3px solid red;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    align-text: right;
    overflow: auto;
    background-color: ${(props) => (props.isDarkMode ? darkTheme.body : lightTheme.body)};
    color: ${(props) => (props.isDarkMode ? darkTheme.text : lightTheme.text)};
  `;