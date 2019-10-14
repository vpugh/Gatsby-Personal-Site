import styled from 'styled-components';

export const SocialMediaContainer = styled.ul`
  display: flex;
  flex: 1;
  margin-bottom: 0;
  border-left: 2px solid #ddd;
  padding-left: 20px;
  margin-left: 10px;

  @media (max-width: 480px) {
    margin: 0;
    border: none;
    padding: 0;
  }

  .soc {
    display: inline-block;
    margin-bottom: 0;
    list-style-type: none;
    padding: 0 .25rem;
    line-height: 0;
    
    a {
      display: inline-flex;
    }

    svg {
      transition: 300ms ease-in-out;
      fill: #969696;
      &:hover {
        fill: #606060;
      }
    }
  }
`;