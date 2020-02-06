import { createGlobalStyle } from 'styled-components'

export const theme = {
  headerHeight: '44px',
  linkColor: '#3f51b5',
  borderColor: 'rgba(151, 151, 151, 0.2)',
  errorColor: 'rgb(248, 99, 73)',
  errorBorderColor: 'rgb(248, 187, 73)',
  errorBgColor: 'rgb(254, 245, 231)',
  black: '#000',
  gray: '#dadce0',
  xl: '1680px',
  lg: '1280px',
  md: '980px',
  sm: '736px',
  xs: '480px'
}

/** Global style for components */
export const Style = createGlobalStyle`
  a {
    text-decoration: none;
    color: ${props => props.theme.black};
  }
`
