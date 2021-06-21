import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  html, body, * {
  font-family: 'Jost', sans-serif, 'Helvetica Neue', Helvetica, Arial;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333333;
  font-size: 16px;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}`;