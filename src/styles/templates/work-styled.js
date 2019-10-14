import styled from 'styled-components';

export const WorkTitle = styled.h2`
  font-size: 3.625rem;
  line-height: 1.2;
  padding-top: 8vh;
  padding-bottom: 0;
  margin: 0;
`;

export const WorkSubtitle = styled.h3`
  padding-bottom: 4vh;
  font-size: .95em;
  padding-top: .5rem;
  line-height: 1.5;
`;

export const WorkIntroBlock = styled.div`
  background-color: #fff;
  padding: 50px;
  line-height: 1.5;

  p:not(:last-child) {
    margin-bottom: 0.5rem;
  }
  p:last-child {
    margin-bottom: 0;
  }
`;

export const TextBody = styled.div`
  padding: 50px 0;
    
  p {
    font-size: 1.3rem;
    line-height: 1.6;
  }
  h2 {
    margin-bottom: 1rem;
    margin-top: 2.5rem;
  }
  blockquote {
    margin-left: -20px;
    padding-left: 23px;
    box-shadow: inset 3px 0 0 0 rgba(0, 0, 0, 0.84);
    > p {
      font-style: italic;
      color: #525252;
    }
  }
`;