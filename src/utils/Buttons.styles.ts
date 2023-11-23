// import React from "react";
// import PropTypes from "prop-types";
import startButton from '../assets/icons/power-button.png'
import styled from "styled-components";
import { buttonTheme, globalTheme } from "./Themes";

const gradient = `
  background: ${buttonTheme.primaryButtonDefaultGradientLight};
  background: -webkit-linear-gradient(to right, ${buttonTheme.primaryButtonDefaultGradientLight}, ${buttonTheme.primaryButtonDefaultGradientDark});
  background: linear-gradient(to right, ${buttonTheme.primaryButtonDefaultGradientLight}, ${buttonTheme.primaryButtonDefaultGradientDark});
`;

const hoverGradient = `
  background: ${buttonTheme.primaryButtonHoverLight}; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, ${buttonTheme.primaryButtonHoverLight}, ${buttonTheme.primaryButtonHoverDark}); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, ${buttonTheme.primaryButtonHoverLight}, ${buttonTheme.primaryButtonHoverDark}); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;

const pressGradient = `
  background: ${buttonTheme.primaryButtonPressLight};
  background: -webkit-linear-gradient(to right, ${buttonTheme.primaryButtonPressLight}, ${buttonTheme.primaryButtonPressDark});
  background: linear-gradient(to right, ${buttonTheme.primaryButtonPressLight}, ${buttonTheme.primaryButtonPressDark});
`;

const disabledGradient = `
  background: ${buttonTheme.disabledButtonBackground};
`;

const boxShadow = "5px 5px 5px 0px rgba(0, 0, 0, 0.3)";
const hoverBoxShadow = "5px 5px 5px 0px rgba(0, 0, 0, 0.5)";
const hoverTransform = "translate(-2px, -2px)";
const pressTransform = "translate(0, 0) rotate(720deg)";
const disabledTextColor = buttonTheme.disabledButtonBorderAndText;

// Create the styled button component
export const PrimaryStyledButton = styled.button`
  padding: 10px 20px;
  color: #fff;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: ${boxShadow};
  transition: all 0.2s ease;
  ${gradient}

  &:hover {
    ${hoverGradient}
    box-shadow: ${hoverBoxShadow};
    transform: ${hoverTransform};
  }

  &:active {
    ${pressGradient}
    box-shadow: none;
    transform: ${pressTransform};
  }
`;

export const SecondaryStyledButton = styled.button`
  padding: 10px 20px;
  color: ${buttonTheme.secondaryButtonBorderAndText};
  font-size: 16px;
  border: 2px solid ${buttonTheme.secondaryButtonBorderAndText};
  border-radius: 5px;
  cursor: pointer;
  background-color: ${buttonTheme.secondaryButtonDefault};
  transition: all 0.2s ease;

  &:hover {
    background-color: ${buttonTheme.secondaryButtonHover};
    box-shadow: ${hoverBoxShadow};
    transform: ${hoverTransform};
  }

  &:active {
    background-color: ${buttonTheme.secondaryButtonActive};
    box-shadow: none;
    transform: ${pressTransform};
  }
`;

export const DisabledButton = styled.button`
  padding: 10px 20px;
  color: ${disabledTextColor};
  font-size: 16px;
  border-radius: 5px;
  cursor: not-allowed;
  ${disabledGradient}
  }
`;

export const StartButton = styled.button`
background: url(${startButton}) no-repeat;
width: 100px; /* Set the width and height based on your image size */
height: 100px;
border: none;
background-size: contain;
background-position: center;
border: none;
border-radius: 50%;
cursor: pointer;
color: #000000; /* Change the color as needed */
font-size: 16px;
transition: all 5s ease;

&:hover {
  background-color: ${globalTheme.primary}; // Use the hover background color from the theme
  box-shadow: ${boxShadow};
  transform: ${hoverTransform};
  transition: all 0.2s ease;
}

&:active {
  background-color: ${buttonTheme.primaryButtonHoverDark};
  box-shadow: none;
  transform: ${pressTransform};
  transition: all 0s ease;
}

@media (max-width: 768px) {
  padding: 10px 20px;
  font-size: 14px;
}
`;
