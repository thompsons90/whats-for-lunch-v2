import styled from "styled-components";
import {  darkTheme, lightTheme } from "../../utils/Themes";

interface RandomizedContainerProps {
    isDarkMode: boolean;
  }
  
  export const RandomizedContainer = styled.div<RandomizedContainerProps>`
  // border: 3px solid blue;
  margin: 0;
  padding: 0;
  height: 100%;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    align-text: right;
    overflow: auto;
    background-color: ${(props) => (props.isDarkMode ? darkTheme.body : lightTheme.body)};
    color: ${(props) => (props.isDarkMode ? darkTheme.text : lightTheme.text)};
  `;