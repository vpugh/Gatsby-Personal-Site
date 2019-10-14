import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background: transparent;
  margin-bottom: 1.45rem;
`;

export const GradientBorder = styled.div`
  background: #ff9600;
  background: -moz-linear-gradient(left,#ffb64d 0%,#aed87c 50%,#4dd8ff 100%);
  background: -webkit-linear-gradient(left,#ffb64d 0%,#aed87c 50%,#4dd8ff 100%);
  background: linear-gradient(to right,#ffb64d 0%,#aed87c 50%,#4dd8ff 100%);
  height: 20px;
`;

export const NavigationContainer = styled.div`
  margin: 40px auto 0 auto;

  @media (min-width: 1024px) {
    max-width: 82%;
    padding: 1.45rem 1.0875rem;
    display: flex;
    justify-items: space-between;
    align-items: center;  
  }

  @media (max-width: 768px) {
    display: block;
  }

  @media (max-width: 480px) {
    margin: 40px auto 0 auto;
    text-align: center;
  }
`;

export const NavigationContent = styled.nav`
  display: flex;
  @media (max-width: 480px) {
    display: block;
  }

  ul {
    display: flex;
    flex: 1;
    margin-bottom: 0;

    @media (max-width: 480px) {
      display: inline-block;
      margin: 10px 0;
    }
  }

  li {
    list-style-type: none;
    padding: 0 .75rem;
    margin-bottom: 0;
    letter-spacing: 1.25px;
    align-self: center;

    @media (max-width: 480px) {
      display: inline-block;
      padding-left: 0;
    }
  }
`;

export const NavLogo = styled.h1`
  margin: 0;
  flex: 1;
  text-transform: uppercase;

  .logo-link {
    color: #424242;
    text-decoration: none;
  }
`;