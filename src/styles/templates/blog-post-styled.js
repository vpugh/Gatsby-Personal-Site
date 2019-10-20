import styled from 'styled-components';

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