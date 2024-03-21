import styled from 'styled-components'

const ThemeWrapper = styled.section`
  /* GENERAL STYLING */
  color:${({ theme }) => theme.color};
  background:${({ theme }) => theme.backgroundColor};
  a{
    color:${({ theme }) => theme.color};
  }
  .cardColor{
    background: ${({ theme }) => theme.cardColor};
  }
  .formInput{
    border: ${({ theme }) => theme.cardOutline};
    color:${({ theme }) => theme.color} ;
  }
  .strokeBtn{
    border: ${({ theme }) => theme.cardOutline};
    color:${({ theme }) => theme.strokeBtnColor};
  }
  .strokeBtn:hover{
    background:var(--Blue2);
    border: ${({ theme }) => theme.strokeBorderHover};
  }
  .pseudoBackgroundColor{
    background:${({ theme }) => theme.pseudoBackgroundColor};
  }
  .PageImageContainer {
    background:${({ theme }) => theme.cardColor};
    border-radius: var(--border-radius2);
  }
  .footer-container{
    background:${({ theme }) => theme.backgroundColor};
    border-top: ${({ theme }) => theme.footerBorder};
  }
  .footer-links .footer-link {
    color: ${({ theme }) => theme.color};
  }
  .footer-links .footer-link:hover {
    color: ${({ theme }) => theme.footerLinkHover};
  }
  .footer-underline {
    background: ${({ theme }) => theme.footerDivider};
  }
  .productCard {
    background: ${({ theme }) => theme.cardColor};
    outline: ${({ theme }) => theme.cardOutline};
    transition: var(--smooth);
  };
  .productCard:hover {
    outline: ${({ theme }) => theme.cardOutlineHover};
  };
  .productDetails {
      border-top: ${({ theme }) => theme.cardOutline};  
  };
  .colorButtons.activeButton {
      outline: ${({ theme }) => theme.activeProductColor};  
  }
  #quantity {
    color: ${({ theme }) => theme.color};
    background: ${({ theme }) => theme.backgroundColor};
    border: ${({ theme }) => theme.cardOutline};
  }
  .imgListContainer {
    background: ${({ theme }) => theme.listBgColor};
  }
  .layoutBtn {
    color:${({ theme }) => theme.color};
    border: ${({ theme }) => theme.cardOutline};
    transition: var(--smooth);
  }
  .activeLayoutBtn {
    color: var(--lm-white1);
    background: var(--Blue1);
    border: 2px solid var(--Blue1);
  }
  .layoutBtn:hover {
    border: ${({ theme }) => theme.cardOutlineHover};
  }
  .filterFormBG {
    background: ${({ theme }) => theme.filterFormBG};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  .formWrapper {
    background:${({ theme }) => theme.backgroundColor};
    border: ${({ theme }) => theme.cardOutline};
  }
  .selectStyling {
    color:${({ theme }) => theme.color};
    background:${({ theme }) => theme.backgroundColor};
    border: ${({ theme }) => theme.cardOutline};
  }
  .searchBtn, .resetBtn {
    background-color:${({ theme }) => theme.filterBtn};
  }
  .line {
    background-color:${({ theme }) => theme.lineColor};
  }
  .loaderContainer, .paginationBtn {
    background-color:${({ theme }) => theme.backgroundColor};
  }
  .paginationBtn {
    color:${({ theme }) => theme.color};
    border:${({ theme }) => theme.cardOutline};
  }
  .paginationBtn:hover {
    border:${({ theme }) => theme.cardOutlineHover};
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
  .nav-link.active {
    color: var(--lm-white1);
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
  .switchIconContainer{
    background: ${({ theme }) => theme.navLinkHover};
    display: grid;
    place-items: center;
    height: 2.5rem; 
    width: 2.5rem;
    border-radius: 50%;
    cursor: pointer;
    transition: var(--smooth);
  }
  .switchIconContainer:hover{
    border: ${({ theme }) => theme.switchIconContainerHover};
  }
`

export default ThemeWrapper;