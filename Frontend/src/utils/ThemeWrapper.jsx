import styled from 'styled-components'

export const ThemeWrapper = styled.section`
  /* GENERAL STYLING */
  color:${({ theme }) => theme.color};
  background:${({ theme }) => theme.backgroundColor};
  .cardColor{
    background: ${({ theme }) => theme.cardColor};
  }
  .formInput{
    border: ${({ theme }) => theme.stroke};
    color:${({ theme }) => theme.color} ;
  }
  .strokeBtn{
    border: ${({ theme }) => theme.stroke};
    color:${({ theme }) => theme.strokeBtnColor};
  }
  .strokeBtn:hover{
    background:var(--Blue2);
    border: ${({ theme }) => theme.strokeBorderHover};
    color:${({ theme }) => theme.backgroundColor};
  }
  .pseudoBackgroundColor{
    background:${({ theme }) => theme.pseudoBackgroundColor};
  }

  /* NAVSTYLING */
  .nav-container {
    background: ${({ theme }) => theme.navContainerBG};
    box-shadow: ${({ theme }) => theme.navContainerDropShadow};
  }
  .KaseLogo {
    color:${({ theme }) => theme.logoColor}
  }
  .nav-center .nav-link, .nav-end .nav-end-item {
    color:${({ theme }) => theme.color};
    transition: var(--smooth);
  }
  .nav-center .nav-link:not(.active):hover, .mobile-nav-link:hover {
    background: ${({ theme }) => theme.navLinkHover};
  }
  .menu-icon {
    outline: ${({ theme }) => theme.stroke} ;
  }
  .mobile-nav-link-container {
    background:${({ theme }) => theme.navContainerBG};
    box-shadow: ${({ theme }) => theme.navContainerDropShadow};
  }
  .mobile-nav-link-container .mobile-nav-link {
    color:${({ theme }) => theme.color};
  }
`